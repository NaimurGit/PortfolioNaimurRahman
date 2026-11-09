import { connectToDatabase } from "@/lib/db";
import { Profile } from "@/lib/models/Profile";
import { Project } from "@/lib/models/Project";
import { Skill } from "@/lib/models/Skill";
import { Education } from "@/lib/models/Education";
import { Activity } from "@/lib/models/Activity";
import { errorMessage, fail, json, preflight } from "@/lib/api";

export const dynamic = "force-dynamic";

export function OPTIONS(request: Request) {
  return preflight(request);
}

export async function GET(request: Request) {
  try {
    await connectToDatabase();

    const [profile, projects, skills, education, activities] = await Promise.all([
      Profile.findOne().sort({ createdAt: 1 }).lean(),
      Project.find().sort({ featured: -1, order: 1 }).lean(),
      Skill.find().sort({ order: 1 }).lean(),
      Education.find().sort({ order: 1 }).lean(),
      Activity.find().sort({ order: 1 }).lean(),
    ]);

    return json(request, {
      ok: true,
      data: {
        profile,
        projects,
        skills,
        education,
        activities,
      },
    });
  } catch (error) {
    return fail(request, errorMessage(error));
  }
}
