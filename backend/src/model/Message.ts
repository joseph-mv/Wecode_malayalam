import { Schema, model } from "mongoose";

interface IMessage {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

const messageSchema = new Schema<IMessage>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    required: true,
  },
});

const Message = model<IMessage>("message", messageSchema);

export default Message;
