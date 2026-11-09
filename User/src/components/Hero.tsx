import { ArrowDownToLine, ArrowUpRight, MapPin } from "lucide-react";
import type { Profile } from "../lib/types";

export default function Hero({ profile }: { profile: Profile }) {
  const primaryLinks = profile.links.filter((link) => link.label !== "Email");

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent-500/20 blur-[120px] animate-pulse-slow" />

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.availability || "Available for new opportunities"}
          </span>

          <p className="eyebrow mt-6">{profile.role}</p>

          <h1 className="mt-3 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            {profile.headline}
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            {profile.summary}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} className="text-accent-400" />
              {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent-300"
            >
              {profile.email}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-accent-500 px-5 py-3 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5 hover:bg-accent-400"
            >
              View my work
              <ArrowUpRight size={16} />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-accent-400/40 hover:bg-white/10"
            >
              <ArrowDownToLine size={16} />
              Download CV
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {primaryLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="chip transition-colors hover:border-accent-400/40 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-up [animation-delay:150ms]">
          <div className="absolute inset-0 -z-10 translate-y-6 rounded-[2rem] bg-gradient-to-br from-accent-500/30 via-indigo-500/20 to-transparent blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-2">
            <div className="overflow-hidden rounded-[1.6rem] bg-gradient-to-b from-slate-800 to-ink-900">
              <img
                src={profile.photoUrl}
                alt={`Portrait of ${profile.name}`}
                className="h-[26rem] w-full object-cover object-top animate-float"
                loading="eager"
              />
            </div>
          </div>

          <div className="absolute -left-4 bottom-10 hidden rounded-xl border border-white/10 bg-ink-900/90 px-4 py-3 backdrop-blur-md sm:block">
            <p className="font-display text-xl font-semibold text-white">3.63</p>
            <p className="text-[11px] uppercase tracking-wider text-slate-400">CGPA / 4.00</p>
          </div>

          <div className="absolute -right-3 top-10 hidden rounded-xl border border-white/10 bg-ink-900/90 px-4 py-3 backdrop-blur-md sm:block">
            <p className="font-display text-xl font-semibold text-white">MERN</p>
            <p className="text-[11px] uppercase tracking-wider text-slate-400">Stack</p>
          </div>
        </div>
      </div>
    </section>
  );
}
