import { AlertTriangle, RotateCw, ServerOff } from "lucide-react";
import { API_URL } from "../lib/api";

interface ErrorScreenProps {
  message: string;
  onRetry: () => void;
}

export default function ErrorScreen({ message, onRetry }: ErrorScreenProps) {
  return (
    <div className="grid min-h-screen place-items-center px-5">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-rose-400/10 text-rose-300">
          <ServerOff size={22} />
        </span>
        <h1 className="mt-5 font-display text-xl font-semibold text-white">
          Couldn&apos;t reach the API
        </h1>
        <p className="mt-2 flex items-start justify-center gap-2 text-sm leading-relaxed text-slate-400">
          <AlertTriangle size={15} className="mt-0.5 shrink-0 text-amber-300" />
          <span>{message}</span>
        </p>
        <div className="mt-5 rounded-xl border border-white/8 bg-ink-900/60 p-3 text-left text-xs text-slate-400">
          <p>
            Expected backend at <code className="text-accent-300">{API_URL}</code>
          </p>
          <p className="mt-1">
            Start it with <code className="text-accent-300">cd Server &amp;&amp; npm run dev</code>,
            then run <code className="text-accent-300">npm run seed</code> once.
          </p>
        </div>
        <button
          type="button"
          onClick={onRetry}
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-accent-500 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-400"
        >
          <RotateCw size={15} />
          Try again
        </button>
      </div>
    </div>
  );
}
