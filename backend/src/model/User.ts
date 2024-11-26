import { Schema, model } from 'mongoose';

interface IUser {
  name: string;
  email: string;
  password: string;
  verificationToken:string;
  isVerified:boolean;
  createdAt:Date
}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  verificationToken:{
    type: String,
    required: true,
  },
  isVerified:{
    type:Boolean,
    required:true
  },
  createdAt:{
    type:Date,
    required:true
  }
});

const User = model<IUser>('User', userSchema);

export default User;
