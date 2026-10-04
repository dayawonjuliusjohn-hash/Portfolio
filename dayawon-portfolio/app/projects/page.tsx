import ProjectGrid from "@/components/ProjectGrid";

export const metadata = { title: "Experience | J. Dayawon, CE" };

export default function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="font-display text-5xl font-semibold md:text-6xl">Experience</h1>
      <p className="mt-3 max-w-[62ch] text-lg text-ink/80">My estimating role at Don Lee Builders, and the site experience that supports it. Hover or tap a card for details.</p>
      <div className="mt-10"><ProjectGrid /></div>
    </div>
  );
}
