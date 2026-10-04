"use client";
import { useState } from "react";
import { profile } from "@/lib/data";

// No backend: opens the visitor's email app with the message filled in.
export default function ContactForm() {
  const [v, setV] = useState({ name: "", email: "", message: "" });
  const [err, setErr] = useState("");
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setV({ ...v, [k]: e.target.value });
  const submit = () => {
    if (!v.name.trim() || !v.message.trim()) { setErr("Add your name and a short message about the takeoff you need."); return; }
    setErr("");
    const body = `${v.message}\n\nFrom: ${v.name}${v.email ? ` (${v.email})` : ""}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Estimating inquiry from " + v.name)}&body=${encodeURIComponent(body)}`;
  };
  const field = "mt-1 w-full border border-ink/40 bg-paper px-3 py-2 focus:border-mark";
  return (
    <div className="space-y-4">
      <label className="block text-sm font-semibold">Your name
        <input className={field} value={v.name} onChange={set("name")} autoComplete="name" />
      </label>
      <label className="block text-sm font-semibold">Your email (optional)
        <input type="email" className={field} value={v.email} onChange={set("email")} autoComplete="email" />
      </label>
      <label className="block text-sm font-semibold">What do you need measured?
        <textarea rows={5} className={field} value={v.message} onChange={set("message")} placeholder="Project type, drawings available, and your deadline." />
      </label>
      {err && <p role="alert" className="text-sm font-semibold text-bar">{err}</p>}
      <button type="button" onClick={submit} className="bg-ink px-5 py-2.5 font-semibold text-paper transition-colors hover:bg-mark">Send by email</button>
    </div>
  );
}
