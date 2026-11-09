import { connectToDatabase } from "@/lib/db";
import { Activity } from "@/lib/models/Activity";
import { errorMessage, fail, json, preflight } from "@/lib/api";

export const dynamic = "force-dynamic";

export function OPTIONS(request: Request) {
  return preflight(request);
}

export async function GET(request: Request) {
  try {
    await connectToDatabase();
    const activities = await Activity.find().sort({ order: 1 }).lean();
    return json(request, { ok: true, data: activities });
  } catch (error) {
    return fail(request, errorMessage(error));
  }
}
