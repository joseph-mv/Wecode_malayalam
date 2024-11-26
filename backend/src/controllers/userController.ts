import { Request, Response } from "express";
const bcrypt = require("bcrypt");
import * as crypto from "crypto";

import User from "../model/User";
import { sendVerificationEmail } from "../utils/mailer";
import Message from "../model/Message";

export const messageByUser = async (req: Request, res: Response) => {
  try {
    const message = new Message(req.body);
    message.createdAt=new Date()
    await message.save();
    res.status(201).json({ msg: 'Message sent successfully.' });
  } catch (error) {
    // console.log(error)
    res.status(500).json({ error: 'Internal server error.' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = new User(req.body);
    console.log(user);
    const oldUser = await User.findOne({ email: user.email });
    if (oldUser) {
      res
        .status(501)
        .json({ message: "oops , The email is already used, try another" });
    } else {
      const saltRounds = 10;
      console.log(user);
      user.password = await bcrypt.hash(user.password, saltRounds);
      const verificationToken = crypto.randomBytes(32).toString("hex");
      user.verificationToken = verificationToken;
      user.isVerified = false;
      user.createdAt = new Date();
      await user.save();
      const verificationLink = `${process.env.CLIENT_URL}/verify-email?token=${verificationToken}`;
      const emailRes = await sendVerificationEmail(
        user.email,
        verificationLink
      );
      console.log(emailRes);
      res.status(201).json(emailRes);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};
export const login = async (req: Request, res: Response) => {
  try{
    const user = req.body;
    const existUser=await User.findOne({ email: user.email })
    if (existUser) {
      if(!existUser.isVerified){
  
        res.status(501).json({message:'First verify your account'})
      }else{
        // Compare the provided password with the stored hashed password
      const isMatch = await bcrypt.compare(existUser.password, user.password);
      if (!isMatch) {
        res.status(401).json({ message: 'Invalid password.' });
        return;
      }
  
      // Passwords match
      

      res.status(200).json({ message: 'Password is correct.' });
      }
    }else{
      console.log('no user')
      res.status(501).json({message:'User not found'})
    }
  }catch(error){
    res.status(500).json({ message: 'Internal server error.' });
  }
  
};
