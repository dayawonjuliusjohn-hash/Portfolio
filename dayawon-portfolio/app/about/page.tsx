import { deliverables, experience, profile, qualifications, tools } from "@/lib/data";

export const metadata = { title: "About | J. Dayawon, CE" };

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="font-display text-5xl font-semibold md:text-6xl">About me</h1>
      <div className="mt-8 grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="max-w-[62ch] space-y-4 text-lg text-ink/85">
          <p>I'm a licensed civil engineer working as a remote quantity surveyor and estimator. Rebar takeoff is my main strength, built on structural project experience and regular quantity-checking responsibilities.</p>
          <p>Rebar quantities are organized by bar diameter, grade and location/structure, so every line can be traced to its drawing. Concrete volumes and formwork areas use the same breakdown, so the three quantities can be reviewed together.</p>
          <p>My work is estimating and quantity surveying that can be completed remotely from drawings, specifications, schedules and project data. I don't offer site supervision or field execution as part of the remote service.</p>
        </div>
        <aside className="h-fit border border-ink/40 p-5">
          <h2 className="font-display text-2xl font-semibold">Availability</h2>
          <p className="mt-2">{profile.availability}</p>
          <p className="mt-3 text-sm text-ink/70">Based in {profile.location}</p>
        </aside>
      </div>

      <section className="mt-16">
        <h2 className="font-display text-4xl font-semibold">Work history</h2>
        <div className="mt-6 border-l-2 border-ink/30">
          {experience.map((e) => (
            <article key={e.role + e.period} className="relative pb-8 pl-6">
              <span className="absolute -left-[7px] top-2 h-3 w-3 border-2 border-ink bg-paper" aria-hidden />
              <p className="text-sm text-ink/60">{e.period}</p>
              <h3 className="text-xl font-semibold">{e.role}, {e.company}{e.place && <span className="font-normal text-ink/70"> in {e.place}</span>}</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-ink/80">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-semibold">Qualifications</h2>
          <dl className="mt-5 space-y-4">
            {qualifications.map((q) => (
              <div key={q.title} className="border-t border-ink/30 pt-3">
                <dt className="font-semibold">{q.title}</dt>
                <dd className="text-ink/75">{q.text}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h2 className="font-display text-4xl font-semibold">Tools</h2>
          <dl className="mt-5 space-y-4">
            {tools.map((t) => (
              <div key={t.name} className="border-t border-ink/30 pt-3">
                <dt className="font-semibold">{t.name}</dt>
                <dd className="text-ink/75">{t.note}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-4xl font-semibold">What you receive</h2>
        <ul className="mt-5 grid gap-x-8 gap-y-2 sm:grid-cols-2">
          {deliverables.map((d) => <li key={d} className="border-t border-ink/20 pt-2">{d}</li>)}
        </ul>
      </section>
    </div>
  );
}
