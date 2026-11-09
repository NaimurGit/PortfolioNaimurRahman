import { Award, MapPin } from "lucide-react";
import type { Activity, Education as EducationItem } from "../lib/types";

interface EducationProps {
  education: EducationItem[];
  activities: Activity[];
}

export default function Education({ education, activities }: EducationProps) {
  return (
    <section id="education" className="section-anchor py-20">
      <div className="container-page">
        <p className="eyebrow">Background</p>
        <h2 className="section-title mt-3">Education &amp; activities</h2>

        <div className="mt-9 grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <ol className="relative space-y-4 border-l border-white/10 pl-6">
            {education.map((item) => (
              <li key={item._id} className="relative">
                <span className="absolute -left-[31px] top-2 grid h-3.5 w-3.5 place-items-center rounded-full border-2 border-ink-950 bg-accent-400 ring-4 ring-accent-400/15" />
                <div className="glass-card p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-display text-base font-semibold text-white">
                      {item.degree}
                    </h3>
                    <span className="chip shrink-0">{item.session}</span>
                  </div>
                  <p className="mt-1.5 text-sm text-slate-300">{item.institution}</p>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin size={12} />
                    {item.location}
                  </p>
                  <p className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
                    <Award size={12} />
                    {item.result}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div>
            <h3 className="font-display text-base font-semibold text-white">
              Extra-curricular
            </h3>
            <ul className="mt-4 space-y-3">
              {activities.map((activity) => (
                <li key={activity._id} className="glass-card p-4">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-medium text-slate-200">{activity.title}</p>
                    {activity.year && (
                      <span className="shrink-0 text-xs text-accent-300">{activity.year}</span>
                    )}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">{activity.detail}</p>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Languages
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>Bangla <span className="text-slate-500">— Native</span></li>
                <li>English <span className="text-slate-500">— Professional</span></li>
                <li>Hindi <span className="text-slate-500">— Conversational</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
