import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // For development only
  },
});

interface SendVerificationEmailResponse {
  msg?: string;
  error?: string;
}

export const sendVerificationEmail = async (
  email: string,
  verificationLink: string
): Promise<SendVerificationEmailResponse> => {
  const mailOptions = {
    from: `Wecode Malayalam <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Email Verification - Wecode Malayalam",
    text: `Dear User,

Thank you for signing up with Wecode Malayalam. Please click the link below to verify your email address:

${verificationLink}

If you did not sign up for an account, please ignore this email.

Best regards,
Wecode Malayalam`,
    html: `
      <p>Dear User,</p>
      <p>Thank you for signing up with Wecode Malayalam. Please click the link below to verify your email address:</p>
      <p><a href="${verificationLink}">${verificationLink}</a></p>
      <p>If you did not sign up for an account, please ignore this email.</p>
      <p>Best regards,<br>Wecode Malayalam</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { msg: `A verification email has been sent to ${email}.` };
  } catch (error) {
    console.error(error);
    return { error: "An error occurred, please try again." };
  }
};
