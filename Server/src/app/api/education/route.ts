import { connectToDatabase } from "@/lib/db";
import { Education } from "@/lib/models/Education";
import { errorMessage, fail, json, preflight } from "@/lib/api";

export const dynamic = "force-dynamic";

export function OPTIONS(request: Request) {
  return preflight(request);
}

export async function GET(request: Request) {
  try {
    await connectToDatabase();
    const education = await Education.find().sort({ order: 1 }).lean();
    return json(request, { ok: true, data: education });
  } catch (error) {
    return fail(request, errorMessage(error));
  }
}
