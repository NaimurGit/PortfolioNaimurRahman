import mongoose from "mongoose";

import { connectToDatabase } from "../../src/lib/db";
import { Profile } from "../../src/lib/models/Profile";
import { Project } from "../../src/lib/models/Project";
import { Skill } from "../../src/lib/models/Skill";
import { Education } from "../../src/lib/models/Education";
import { Activity } from "../../src/lib/models/Activity";
import {
  seedProfile,
  seedProjects,
  seedSkills,
  seedEducation,
  seedActivities,
} from "../seed-data";

export async function databaseHasProfile(): Promise<boolean> {
  const count = await Profile.estimatedDocumentCount();
  return count > 0;
}

export async function seedDatabase(): Promise<{
  profile: number;
  projects: number;
  skills: number;
  education: number;
  activities: number;
}> {
  await connectToDatabase();

  await Promise.all([
    Profile.deleteMany({}),
    Project.deleteMany({}),
    Skill.deleteMany({}),
    Education.deleteMany({}),
    Activity.deleteMany({}),
  ]);

  await Profile.create(seedProfile);
  await Project.insertMany(seedProjects);
  await Skill.insertMany(seedSkills);
  await Education.insertMany(seedEducation);
  await Activity.insertMany(seedActivities);

  return {
    profile: 1,
    projects: seedProjects.length,
    skills: seedSkills.length,
    education: seedEducation.length,
    activities: seedActivities.length,
  };
}

export async function seedIfEmpty(): Promise<boolean> {
  await connectToDatabase();
  if (await databaseHasProfile()) {
    return false;
  }
  await seedDatabase();
  return true;
}

export async function disconnectDatabase(): Promise<void> {
  await mongoose.disconnect();
}
