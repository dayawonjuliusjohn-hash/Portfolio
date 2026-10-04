import { profile } from "@/lib/data";

// Styled like a drawing-sheet title block.
export default function Footer() {
  const cell = "border border-ink/40 p-3";
  return (
    <footer className="mt-24 px-5 pb-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 text-sm md:grid-cols-4">
        <div className={`${cell} col-span-2`}>
          <p className="text-xs text-ink/60">Sheet title</p>
          <p className="font-display text-xl font-semibold">{profile.role}</p>
          <p className="text-ink/70">Concrete, formwork and rebar takeoff, BOQ, quantity checking</p>
        </div>
        <div className={cell}>
          <p className="text-xs text-ink/60">Prepared by</p>
          <p>{profile.name}</p>
          <p className="text-ink/70">{profile.location}</p>
        </div>
        <div className={cell}>
          <p className="text-xs text-ink/60">Contact</p>
          <a className="break-all underline underline-offset-2 hover:text-mark" href={`mailto:${profile.email}`}>{profile.email}</a>
          <p>{profile.phone}</p>
        </div>
      </div>
    </footer>
  );
}
