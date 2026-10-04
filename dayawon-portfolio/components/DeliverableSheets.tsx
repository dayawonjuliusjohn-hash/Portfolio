"use client";
import { useState } from "react";

const sheets = [
  { name: "Concrete takeoff", note: "Volumes by structural element and location.", cols: ["Structure / location", "Element", "Volume"] },
  { name: "Formwork takeoff", note: "Contact areas by structural element and location.", cols: ["Structure / location", "Element", "Contact area"] },
  { name: "Rebar summary", note: "Reinforcement by bar diameter, grade and location/structure.", cols: ["Structure / location", "Bar diameter", "Grade", "Quantity"] },
  { name: "Combined summary", note: "Concrete, formwork and rebar per structure, reviewed together.", cols: ["Structure", "Concrete", "Formwork", "Rebar"] },
  { name: "BOQ schedule", note: "Quantity schedule for estimating, tender and review.", cols: ["Item", "Description", "Unit", "Quantity"] },
  { name: "Quantity check", note: "Quantities and dimensions cross-checked against drawings.", cols: ["Item", "Drawing reference", "Checked", "Remarks"] },
];

export default function DeliverableSheets() {
  const [i, setI] = useState(2);
  const s = sheets[i];
  return (
    <div className="border border-ink/40 bg-paper">
      <div className="border-b border-ink/40 px-4 py-2 text-sm font-semibold">Sample sheet layouts you receive</div>
      <div role="tablist" aria-label="Deliverables" className="flex flex-wrap gap-2 p-4 pb-3">
        {sheets.map((x, n) => (
          <button key={x.name} role="tab" aria-selected={i === n} onClick={() => setI(n)}
            className={`rounded-sm border px-3 py-1.5 text-sm transition-colors ${i === n ? "border-ink bg-ink text-paper" : "border-ink/30 hover:border-ink"}`}>
            {x.name}
          </button>
        ))}
      </div>
      <div className="px-4 pb-4" role="tabpanel" aria-live="polite">
        <p className="text-sm text-ink/75">{s.note}</p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[22rem] border-collapse text-sm">
            <thead>
              <tr className="bg-ink text-paper">
                {s.cols.map((c) => <th key={c} className="border border-ink px-3 py-2 text-left font-semibold">{c}</th>)}
              </tr>
            </thead>
            <tbody>
              {[0, 1, 2].map((r) => (
                <tr key={r} className={r % 2 ? "bg-slab" : ""}>
                  {s.cols.map((c) => <td key={c} className="h-9 border border-ink/30 px-3 text-ink/30">&nbsp;</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-ink/60">Layout only. Delivered as Excel, with marked-up Bluebeam PDFs.</p>
      </div>
    </div>
  );
}
