import ContactForm from "@/components/ContactForm";
import { profile } from "@/lib/data";

export const metadata = { title: "Contact | J. Dayawon, CE" };

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="font-display text-5xl font-semibold md:text-6xl">Contact</h1>
      <div className="mt-10 grid gap-12 md:grid-cols-2">
        <div>
          <p className="max-w-[48ch] text-lg text-ink/80">Tell me what drawings you have and what you need measured. I work remotely and can relocate if the project calls for it.</p>
          <dl className="mt-8 space-y-4">
            <div className="border-t border-ink/30 pt-3"><dt className="text-sm text-ink/60">Email</dt><dd><a className="underline underline-offset-4 hover:text-mark" href={`mailto:${profile.email}`}>{profile.email}</a></dd></div>
            <div className="border-t border-ink/30 pt-3"><dt className="text-sm text-ink/60">Mobile</dt><dd><a className="hover:text-mark" href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a></dd></div>
            <div className="border-t border-ink/30 pt-3"><dt className="text-sm text-ink/60">Location</dt><dd>{profile.location}</dd></div>
            <div className="border-t border-ink/30 pt-3"><dt className="text-sm text-ink/60">Availability</dt><dd>{profile.availability}</dd></div>
          </dl>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
