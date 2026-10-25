import { useState } from "react";
import { profile } from "@/data/profile";

type Status = "idle" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = String(data.get("subject") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!subject || !email || message.length < 10) {
      setStatus("error");
      return;
    }
    const body = `From: ${email}\n\n${message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  }

  function copy() {
    navigator.clipboard?.writeText(profile.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }

  const channels = [
    ["hi.new/hakimo", profile.links.hinew],
    ["GitHub", profile.links.github],
    ["LinkedIn", profile.links.linkedin],
    ["X", profile.links.x],
    ["WhatsApp", profile.links.whatsapp],
  ] as const;

  return (
    <div className="grid gap-3 sm:grid-cols-[1fr_1.2fr]">
      <div className="space-y-3">
        <p className="text-xs leading-relaxed text-white/55">
          Open to selected remote product work — commerce, operations software, and Arabic/English
          interfaces. I answer notes about a real product.
        </p>
        <div className="space-y-1.5 text-[11px]">
          <button
            onClick={copy}
            className="flex w-full items-center justify-between rounded-lg border border-white/[0.07] bg-white/[0.02] px-2.5 py-2 text-left transition-colors duration-150 hover:border-amber-400/25"
          >
            <span className="text-white/70">{profile.email}</span>
            <span className="text-[10px] text-amber-400/60">{copied ? "copied" : "copy"}</span>
          </button>
          {channels.map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border border-white/[0.07] bg-white/[0.02] px-2.5 py-2 transition-colors duration-150 hover:border-amber-400/25"
            >
              <span className="text-white/70">{label}</span>
              <span className="text-[10px] text-white/25">↗</span>
            </a>
          ))}
        </div>
      </div>

      <form
        onSubmit={onSubmit}
        className="space-y-2 rounded-lg border border-white/[0.07] bg-white/[0.02] p-3"
      >
        <div className="flex items-baseline justify-between text-[10px] text-white/30">
          <span>Send a message</span>
          <a href={profile.links.hinew} className="text-amber-200/70 hover:text-amber-200">
            hi.new/hakimo
          </a>
        </div>
        <div className="flex gap-2 max-sm:flex-col">
          <input
            name="subject"
            required
            placeholder="Subject"
            className="w-full rounded-md bg-white/5 px-2 py-1.5 text-xs text-white/80 outline-none ring-amber-400/40 placeholder:text-white/25 focus:ring-1"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Your email"
            autoComplete="email"
            className="w-full rounded-md bg-white/5 px-2 py-1.5 text-xs text-white/80 outline-none ring-amber-400/40 placeholder:text-white/25 focus:ring-1"
          />
        </div>
        <textarea
          name="message"
          required
          minLength={10}
          rows={4}
          placeholder="What are you building?"
          className="w-full resize-none rounded-md bg-white/5 px-2 py-1.5 text-xs text-white/80 outline-none ring-amber-400/40 placeholder:text-white/25 focus:ring-1"
        />
        <div className="flex items-center justify-between">
          <p className="text-[10px] text-white/25">
            Opens your email app. Bots use{" "}
            <a href={profile.links.hinew} className="text-white/45 hover:text-amber-300">
              hi.new/hakimo
            </a>
            .
          </p>
          <div className="flex items-center gap-2">
            {status === "sent" && <span className="text-[10px] text-amber-300">Email draft opened.</span>}
            {status === "error" && (
              <span className="text-[10px] text-white/45">Add a subject, email, and a short note.</span>
            )}
            <button
              type="submit"
              className="rounded-md bg-amber-400/15 px-3 py-1 text-xs text-amber-200 transition-colors duration-150 hover:bg-amber-400/25"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
