import { connectToDatabase } from "@/lib/db";
import { Project } from "@/lib/models/Project";
import { errorMessage, fail, json, preflight } from "@/lib/api";

export const dynamic = "force-dynamic";

export function OPTIONS(request: Request) {
  return preflight(request);
}

export async function GET(request: Request) {
  try {
    await connectToDatabase();
    const projects = await Project.find().sort({ featured: -1, order: 1 }).lean();
    return json(request, { ok: true, data: projects });
  } catch (error) {
    return fail(request, errorMessage(error));
  }
}
