import type { SkillGroup } from "../lib/types";

export default function Skills({ skills }: { skills: SkillGroup[] }) {
  return (
    <section id="skills" className="section-anchor py-20">
      <div className="container-page">
        <p className="eyebrow">Toolbox</p>
        <h2 className="section-title mt-3">Skills &amp; technologies</h2>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group._id} className="glass-card p-5">
              <h3 className="font-display text-base font-semibold text-white">{group.group}</h3>
              <div className="mt-3.5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
