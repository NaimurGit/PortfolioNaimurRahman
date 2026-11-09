import { connectToDatabase } from "@/lib/db";
import { Skill } from "@/lib/models/Skill";
import { errorMessage, fail, json, preflight } from "@/lib/api";

export const dynamic = "force-dynamic";

export function OPTIONS(request: Request) {
  return preflight(request);
}

export async function GET(request: Request) {
  try {
    await connectToDatabase();
    const skills = await Skill.find().sort({ order: 1 }).lean();
    return json(request, { ok: true, data: skills });
  } catch (error) {
    return fail(request, errorMessage(error));
  }
}
