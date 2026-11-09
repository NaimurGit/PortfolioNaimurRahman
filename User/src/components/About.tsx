import { Braces, Database, GraduationCap, Sparkles } from "lucide-react";
import type { Profile } from "../lib/types";

const pillars = [
  {
    icon: Braces,
    title: "Frontend craft",
    body: "React, Tailwind and Vite — accessible, responsive interfaces with a focus on real user flows.",
  },
  {
    icon: Database,
    title: "Backend logic",
    body: "Node.js, Express and MongoDB APIs designed for clean data models and predictable responses.",
  },
  {
    icon: Sparkles,
    title: "AI-assisted delivery",
    body: "Comfortable shipping faster with modern AI tooling like Claude and OpenCode.",
  },
  {
    icon: GraduationCap,
    title: "Data-driven thinking",
    body: "Software Engineering major in Data Science, with an interest in ML and analytics.",
  },
];

export default function About({ profile }: { profile: Profile }) {
  return (
    <section id="about" className="section-anchor py-20">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">About me</p>
            <h2 className="section-title mt-3">
              I turn ideas into reliable, full-stack products.
            </h2>
            <p className="mt-5 leading-relaxed text-slate-400">{profile.summary}</p>
            <div className="mt-6 rounded-2xl border-l-2 border-accent-400/60 bg-white/[0.03] px-5 py-4">
              <p className="text-sm leading-relaxed text-slate-300">{profile.objective}</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, title, body }) => (
              <div key={title} className="glass-card p-5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-500/12 text-accent-300 ring-1 ring-inset ring-accent-400/20">
                  <Icon size={18} />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
