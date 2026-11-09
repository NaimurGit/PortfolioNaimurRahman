import type { Profile } from "../lib/types";

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="border-t border-white/8 py-8">
      <div className="container-page flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React, Next.js &amp; MongoDB.
        </p>
        <div className="flex items-center gap-4">
          {profile.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="transition-colors hover:text-accent-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
