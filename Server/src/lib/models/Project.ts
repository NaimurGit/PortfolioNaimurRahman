import { Schema, model, models } from "mongoose";

export interface ProjectDocument {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  category: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  order: number;
}

const projectSchema = new Schema<ProjectDocument>(
  {
    title: { type: String, required: true },
    tagline: { type: String, required: true },
    description: { type: String, default: "" },
    highlights: { type: [String], default: [] },
    techStack: { type: [String], default: [] },
    category: { type: String, default: "Web Application" },
    liveUrl: { type: String, default: "" },
    repoUrl: { type: String, default: "" },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Project = models.Project ?? model<ProjectDocument>("Project", projectSchema);
