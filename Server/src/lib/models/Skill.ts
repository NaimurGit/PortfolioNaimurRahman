import { Schema, model, models } from "mongoose";

export interface SkillDocument {
  group: string;
  items: string[];
  order: number;
}

const skillSchema = new Schema<SkillDocument>(
  {
    group: { type: String, required: true },
    items: { type: [String], default: [] },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Skill = models.Skill ?? model<SkillDocument>("Skill", skillSchema);
