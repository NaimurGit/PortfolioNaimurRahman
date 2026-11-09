import { Schema, model, models } from "mongoose";

export interface MessageDocument {
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
}

const messageSchema = new Schema<MessageDocument>(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 200 },
    subject: { type: String, default: "", trim: true, maxlength: 200 },
    message: { type: String, required: true, trim: true, maxlength: 4000 },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Message =
  models.Message ?? model<MessageDocument>("Message", messageSchema);
