import Link from "next/link";
import DeliverableSheets from "@/components/DeliverableSheets";
import ProjectGrid from "@/components/ProjectGrid";
import { profile, services, workflow } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="sheet-grid border-b border-ink/15">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.1fr_1fr] md:items-start md:py-24">
          <div>
            <p className="text-ink/70">{profile.name}, {profile.role}</p>
            <h1 className="mt-3 font-display text-5xl font-semibold leading-[0.98] md:text-7xl">
              Concrete, formwork and rebar, measured before anything is poured.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink/80">{profile.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className="bg-ink px-5 py-2.5 font-semibold text-paper transition-colors hover:bg-mark">See experience</Link>
              <Link href="/contact" className="border border-ink px-5 py-2.5 font-semibold transition-colors hover:bg-ink hover:text-paper">Request a takeoff</Link>
            </div>
          </div>
          <DeliverableSheets />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-20">
        <h2 className="font-display text-4xl font-semibold">What I take off</h2>
        <div className="mt-8 grid gap-px border border-ink/30 bg-ink/30 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="bg-paper p-5 transition-colors hover:bg-slab">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-[15px] text-ink/75">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-20">
        <h2 className="font-display text-4xl font-semibold">How a job runs</h2>
        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workflow.map((w, i) => (
            <li key={w.title} className="border-t-2 border-ink pt-3">
              <p className="font-display text-2xl font-semibold"><span className="text-mark">{i + 1}.</span> {w.title}</p>
              <p className="mt-1 text-[15px] text-ink/75">{w.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-20">
        <div className="mb-3 flex items-end justify-between gap-4">
          <h2 className="font-display text-4xl font-semibold">My estimating role</h2>
          <Link href="/projects" className="underline underline-offset-4 hover:text-mark">Full experience</Link>
        </div>
        <p className="mb-8 max-w-[62ch] text-ink/80">Since June 2025 I have been the only structural QS at Don Lee Builders, so every structural takeoff and quantity check runs through me. The site and construction work behind it is why I read drawings the way a builder does.</p>
        <ProjectGrid limit={3} />
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-5">
        <div className="flex flex-col items-start justify-between gap-4 bg-ink p-8 text-paper md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold">Have drawings that need quantities?</h2>
            <p className="mt-1 text-paper/75">Send them over for a remote takeoff or a quantity check.</p>
          </div>
          <Link href="/contact" className="bg-paper px-5 py-2.5 font-semibold text-ink transition-colors hover:bg-concrete">Get in touch</Link>
        </div>
      </section>
    </>
  );
}
