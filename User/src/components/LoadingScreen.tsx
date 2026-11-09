import { Loader2 } from "lucide-react";

export default function LoadingScreen() {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="flex flex-col items-center gap-4 text-slate-400">
        <Loader2 size={28} className="animate-spin text-accent-400" />
        <p className="text-sm">Loading portfolio…</p>
      </div>
    </div>
  );
}
