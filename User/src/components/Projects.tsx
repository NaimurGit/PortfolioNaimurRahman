import { ArrowUpRight, Code2, ExternalLink, Star } from "lucide-react";
import type { Project } from "../lib/types";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass-card group flex flex-col p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="eyebrow">{project.category}</span>
          <h3 className="mt-2 font-display text-xl font-semibold text-white">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-accent-300/90">{project.tagline}</p>
        </div>
        {project.featured && (
          <span
            title="Featured project"
            className="inline-flex shrink-0 items-center gap-1 rounded-full border border-amber-400/25 bg-amber-400/10 px-2.5 py-1 text-[11px] font-medium text-amber-300"
          >
            <Star size={11} className="fill-amber-300" />
            Featured
          </span>
        )}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-400">{project.description}</p>

      {project.highlights.length > 0 && (
        <ul className="mt-4 space-y-2">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2.5 text-sm text-slate-400">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent-500/15 px-3.5 py-2 text-sm font-medium text-accent-300 transition-colors hover:bg-accent-500/25"
          >
            <ExternalLink size={14} />
            Live demo
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3.5 py-2 text-sm font-medium text-slate-500">
            <ExternalLink size={14} />
            Coming soon
          </span>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3.5 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-accent-400/40 hover:text-white"
          >
            <Code2 size={14} />
            Source
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="section-anchor py-20">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title mt-3">Projects</h2>
          </div>
          <a
            href="https://github.com/NaimurGit"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-accent-300"
          >
            More on GitHub
            <ArrowUpRight size={15} />
          </a>
        </div>

        {projects.length === 0 ? (
          <p className="mt-8 text-slate-400">No projects published yet.</p>
        ) : (
          <div className="mt-9 grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
