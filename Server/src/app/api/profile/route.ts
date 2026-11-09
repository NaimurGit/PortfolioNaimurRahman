import { connectToDatabase } from "@/lib/db";
import { Profile } from "@/lib/models/Profile";
import { errorMessage, fail, json, preflight } from "@/lib/api";

export const dynamic = "force-dynamic";

export function OPTIONS(request: Request) {
  return preflight(request);
}

export async function GET(request: Request) {
  try {
    await connectToDatabase();
    const profile = await Profile.findOne().sort({ createdAt: 1 }).lean();

    if (!profile) {
      return fail(request, "Profile has not been seeded yet", 404);
    }

    return json(request, { ok: true, data: profile });
  } catch (error) {
    return fail(request, errorMessage(error));
  }
}
