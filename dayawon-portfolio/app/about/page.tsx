import { deliverables, estimating, profile, qualifications, site, tools } from "@/lib/data";

export const metadata = { title: "About | J. Dayawon, CE" };

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="font-display text-5xl font-semibold md:text-6xl">About me</h1>
      <div className="mt-8 grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="max-w-[62ch] space-y-4 text-lg text-ink/85">
          <p>I'm a licensed civil engineer working as a remote quantity surveyor and estimator. Rebar takeoff is my main strength, built on structural project experience and regular quantity-checking responsibilities.</p>
          <p>Rebar quantities are organized by bar diameter, grade and location/structure, so every line can be traced to its drawing. Concrete volumes and formwork areas use the same breakdown, so the three quantities can be reviewed together.</p>
          <p>Before estimating full time, I spent years on site. That means I check a quantity against how it will actually be built, poured and ordered, not only against the drawing.</p>
          <p>My work is estimating and quantity surveying that can be completed remotely from drawings, specifications, schedules and project data. I don't offer site supervision or field execution as part of the remote service.</p>
        </div>
        <aside className="h-fit border border-ink/40 p-5">
          <h2 className="font-display text-2xl font-semibold">Availability</h2>
          <p className="mt-2">{profile.availability}</p>
          <p className="mt-3 text-sm text-ink/70">Based in {profile.location}</p>
        </aside>
      </div>

      <section className="mt-16">
        <h2 className="font-display text-4xl font-semibold">Estimating experience</h2>
        <article className="mt-6 border border-ink/40 border-l-8 border-l-mark p-6">
          <p className="text-sm text-ink/60">{estimating.period}</p>
          <h3 className="mt-1 text-2xl font-semibold">{estimating.role}, {estimating.company}</h3>
          <p className="mt-1 text-ink/70">{estimating.place}</p>
          <p className="mt-4 max-w-[62ch] text-lg">{estimating.lead}</p>
          <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {estimating.points.map((p) => <li key={p} className="border-t border-ink/20 pt-2">{p}</li>)}
          </ul>
        </article>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-4xl font-semibold">Site and construction background</h2>
        <p className="mt-2 max-w-[62ch] text-ink/80">This is the experience behind the takeoffs: cutting lists, pours and material requisitions handled on real projects.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {site.map((e) => (
            <article key={e.role + e.period} className="border border-ink/30 border-l-8 border-l-bar p-5">
              <p className="text-sm text-ink/60">{e.period}</p>
              <h3 className="mt-1 text-xl font-semibold">{e.role}, {e.company}</h3>
              <p className="mt-2 text-ink/80">{e.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-10 md:grid-cols-2">
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
