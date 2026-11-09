import { Schema, model, models } from "mongoose";

export interface EducationDocument {
  degree: string;
  institution: string;
  location: string;
  session: string;
  result: string;
  order: number;
}

const educationSchema = new Schema<EducationDocument>(
  {
    degree: { type: String, required: true },
    institution: { type: String, required: true },
    location: { type: String, default: "" },
    session: { type: String, default: "" },
    result: { type: String, default: "" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Education =
  models.Education ?? model<EducationDocument>("Education", educationSchema);
