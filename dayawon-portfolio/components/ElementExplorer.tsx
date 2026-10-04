"use client";
import { useState } from "react";
import { elements } from "@/lib/data";

const rows = [
  { label: "Concrete", unit: "volume", text: "Volume by structural element and location", color: "bg-concrete" },
  { label: "Formwork", unit: "contact area", text: "Contact area measured per element", color: "bg-mark/20" },
  { label: "Rebar", unit: "by diameter and grade", text: "Grouped by bar diameter, grade and location", color: "bg-bar/20" },
];

export default function ElementExplorer() {
  const [active, setActive] = useState(elements[1]);
  return (
    <div className="border border-ink/40 bg-paper">
      <div className="border-b border-ink/40 px-4 py-2 text-sm font-semibold">Pick an element to see what gets measured</div>
      <div role="tablist" aria-label="Structural elements" className="flex flex-wrap gap-2 p-4">
        {elements.map((e) => (
          <button key={e} role="tab" aria-selected={active === e} onClick={() => setActive(e)}
            className={`rounded-sm border px-3 py-1.5 text-sm transition-colors ${active === e ? "border-ink bg-ink text-paper" : "border-ink/30 hover:border-ink"}`}>
            {e}
          </button>
        ))}
      </div>
      <div className="px-4 pb-4" role="tabpanel" aria-live="polite">
        <p className="mb-3 font-display text-3xl font-semibold">{active}</p>
        <ul className="divide-y divide-ink/15 border-y border-ink/15">
          {rows.map((r) => (
            <li key={r.label} className="flex items-center gap-3 py-3">
              <span className={`h-8 w-2 ${r.color} border border-ink/30`} aria-hidden />
              <span className="w-24 font-semibold">{r.label}</span>
              <span className="text-sm text-ink/75">{r.text}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-ink/70">Every line traces back to its drawing and is tabulated per structure.</p>
      </div>
    </div>
  );
}
