import { Schema, model, models } from "mongoose";

export interface ActivityDocument {
  title: string;
  detail: string;
  year: string;
  order: number;
}

const activitySchema = new Schema<ActivityDocument>(
  {
    title: { type: String, required: true },
    detail: { type: String, default: "" },
    year: { type: String, default: "" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Activity =
  models.Activity ?? model<ActivityDocument>("Activity", activitySchema);
