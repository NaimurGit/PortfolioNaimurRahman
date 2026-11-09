import type { Portfolio } from "./types";

const API_URL = (import.meta.env.VITE_API_URL ?? "http://localhost:3001").replace(/\/$/, "");

interface ApiResponse<T> {
  ok: boolean;
  data?: T;
  error?: string;
}

export async function fetchPortfolio(): Promise<Portfolio> {
  const res = await fetch(`${API_URL}/api/portfolio`, {
    headers: { Accept: "application/json" },
  });

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }

  const payload = (await res.json()) as ApiResponse<Portfolio>;

  if (!payload.ok || !payload.data) {
    throw new Error(payload.error ?? "The portfolio API returned an unexpected response");
  }

  return payload.data;
}

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendMessage(payload: ContactPayload): Promise<void> {
  const res = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await res.json().catch(() => null)) as ApiResponse<unknown> | null;

  if (!res.ok || !data?.ok) {
    throw new Error(data?.error ?? "Message could not be sent. Please try again.");
  }
}

export { API_URL };
