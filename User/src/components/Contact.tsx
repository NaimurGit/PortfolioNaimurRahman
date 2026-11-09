import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, Loader2, Mail, Phone, Send } from "lucide-react";
import { sendMessage } from "../lib/api";
import type { Profile } from "../lib/types";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact({ profile }: { profile: Profile }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setError("");

    try {
      await sendMessage({
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        subject: String(data.get("subject") ?? ""),
        message: String(data.get("message") ?? ""),
      });
      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-anchor py-20">
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02]">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r">
              <p className="eyebrow">Get in touch</p>
              <h2 className="section-title mt-3">Let&apos;s build something together.</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                I&apos;m open to entry-level software engineering roles, internships and
                freelance work. Drop a message and I&apos;ll get back to you soon.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-3.5 transition-colors hover:border-accent-400/30"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent-500/12 text-accent-300">
                    <Mail size={16} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-wider text-slate-500">
                      Email
                    </span>
                    <span className="block truncate text-sm text-slate-200">{profile.email}</span>
                  </span>
                </a>
                {profile.phone && (
                  <a
                    href={`tel:${profile.phone}`}
                    className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-3.5 transition-colors hover:border-accent-400/30"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent-500/12 text-accent-300">
                      <Phone size={16} />
                    </span>
                    <span>
                      <span className="block text-[11px] uppercase tracking-wider text-slate-500">
                        Phone
                      </span>
                      <span className="block text-sm text-slate-200">{profile.phone}</span>
                    </span>
                  </a>
                )}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {profile.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="chip transition-colors hover:border-accent-400/40 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-7 sm:p-10">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    required
                    maxLength={120}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={200}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Subject" htmlFor="subject">
                  <input
                    id="subject"
                    name="subject"
                    maxLength={200}
                    placeholder="What is this about?"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Message" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    maxLength={4000}
                    placeholder="Tell me about your project or role..."
                    className={`${inputClass} resize-none`}
                  />
                </Field>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-5 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send message
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
                  <CheckCircle2 size={16} />
                  Thanks! Your message was saved — I&apos;ll be in touch.
                </p>
              )}

              {status === "error" && (
                <p className="mt-4 rounded-xl border border-rose-400/25 bg-rose-400/10 px-4 py-3 text-sm text-rose-300">
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-2.5 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-accent-400/60 focus:ring-2 focus:ring-accent-400/15";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-xs font-medium text-slate-400">{label}</span>
      {children}
    </label>
  );
}
