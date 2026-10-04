import ProjectGrid from "@/components/ProjectGrid";

export const metadata = { title: "Projects | J. Dayawon, CE" };

export default function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="font-display text-5xl font-semibold md:text-6xl">Projects</h1>
      <p className="mt-3 max-w-[62ch] text-lg text-ink/80">Estimating work at Don Lee Builders and building projects delivered with Archetton Development. Hover or tap a card for details.</p>
      <div className="mt-10"><ProjectGrid /></div>
    </div>
  );
}
