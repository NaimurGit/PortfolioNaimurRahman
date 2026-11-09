import { connectToDatabase } from "@/lib/db";
import { Message } from "@/lib/models/Message";
import { errorMessage, fail, isValidEmail, json, preflight } from "@/lib/api";

export const dynamic = "force-dynamic";

export function OPTIONS(request: Request) {
  return preflight(request);
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return fail(request, "Invalid request body", 400);
    }

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const subject = String(body.subject ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return fail(request, "Name, email and message are required", 400);
    }

    if (!isValidEmail(email)) {
      return fail(request, "Please provide a valid email address", 400);
    }

    if (message.length > 4000) {
      return fail(request, "Message is too long (max 4000 characters)", 400);
    }

    await connectToDatabase();
    const saved = await Message.create({ name, email, subject, message });

    return json(request, { ok: true, data: { id: saved._id } }, { status: 201 });
  } catch (error) {
    return fail(request, errorMessage(error));
  }
}
