"use client";
import { useState } from "react";
import { projects, type Project } from "@/lib/data";

const filters = ["All", "Estimating", "Buildings"] as const;

function Card({ p }: { p: Project }) {
  const [pinned, setPinned] = useState(false);
  return (
    <button type="button" aria-expanded={pinned} onClick={() => setPinned(!pinned)}
      className={`group relative flex min-h-[15rem] flex-col overflow-hidden border bg-paper p-5 text-left transition-all duration-200 hover:-translate-y-1 hover:border-mark focus-visible:-translate-y-1 ${pinned ? "border-mark" : "border-ink/30"}`}>
      <span className={`absolute left-0 top-0 h-1 transition-all duration-300 group-hover:w-full ${pinned ? "w-full" : "w-12"} ${p.group === "Estimating" ? "bg-mark" : "bg-bar"}`} />
      <span className="mt-2 text-sm text-ink/60">{p.org}, {p.place}</span>
      <span className="mt-1 font-display text-3xl font-semibold leading-tight">{p.name}</span>
      <span className="mt-2 text-[15px] text-ink/80">{p.summary}</span>
      <span className={`mt-auto pt-4 text-sm ${pinned ? "hidden" : "block group-hover:hidden group-focus-visible:hidden"}`}>
        <span className="text-ink/60">{p.period}. Hover or tap for details.</span>
      </span>
      <ul className={`mt-4 list-disc space-y-1 pl-5 text-sm ${pinned ? "block" : "hidden group-hover:block group-focus-visible:block"}`}>
        {p.details.map((d) => <li key={d}>{d}</li>)}
        <li className="list-none pl-0 pt-1 text-ink/60">{p.period}</li>
      </ul>
    </button>
  );
}

export default function ProjectGrid({ limit }: { limit?: number }) {
  const [f, setF] = useState<(typeof filters)[number]>("All");
  const list = projects.filter((p) => f === "All" || p.group === f).slice(0, limit);
  return (
    <div>
      {!limit && (
        <div className="mb-6 flex gap-2" role="group" aria-label="Filter projects">
          {filters.map((x) => (
            <button key={x} aria-pressed={f === x} onClick={() => setF(x)}
              className={`rounded-sm border px-4 py-1.5 text-sm transition-colors ${f === x ? "border-ink bg-ink text-paper" : "border-ink/30 hover:border-ink"}`}>
              {x === "Estimating" ? "Estimating work" : x === "Buildings" ? "Building projects" : "All"}
            </button>
          ))}
        </div>
      )}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => <Card key={p.id} p={p} />)}
      </div>
    </div>
  );
}
