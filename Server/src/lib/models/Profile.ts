import { Schema, model, models } from "mongoose";

export interface ContactLink {
  label: string;
  href: string;
}

export interface ProfileDocument {
  name: string;
  headline: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
  objective: string;
  availability: string;
  resumeUrl: string;
  photoUrl: string;
  links: ContactLink[];
}

const contactLinkSchema = new Schema<ContactLink>(
  {
    label: { type: String, required: true },
    href: { type: String, required: true },
  },
  { _id: false }
);

const profileSchema = new Schema<ProfileDocument>(
  {
    name: { type: String, required: true },
    headline: { type: String, required: true },
    role: { type: String, required: true },
    location: { type: String, default: "" },
    email: { type: String, required: true },
    phone: { type: String, default: "" },
    summary: { type: String, default: "" },
    objective: { type: String, default: "" },
    availability: { type: String, default: "" },
    resumeUrl: { type: String, default: "/resume/Md_Naimur_Rahman_Dev_Resume.pdf" },
    photoUrl: { type: String, default: "/naimur.png" },
    links: { type: [contactLinkSchema], default: [] },
  },
  { timestamps: true }
);

export const Profile = models.Profile ?? model<ProfileDocument>("Profile", profileSchema);
