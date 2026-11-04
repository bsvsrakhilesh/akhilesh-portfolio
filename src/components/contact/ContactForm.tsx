"use client";

import { FormEvent, useState } from "react";

const emailAddress = "bsvsrakhilesh01@gmail.com";
const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID?.trim();
const formEndpoint = formId && /^[a-zA-Z0-9]+$/.test(formId)
  ? `https://formspree.io/f/${formId}`
  : null;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);

  function openDraft() {
    const body = `Hi Akhilesh,\n\n${message.trim()}\n\nFrom: ${name.trim()}\nEmail: ${email.trim()}`;
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject.trim())}&body=${encodeURIComponent(body)}`;
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formEndpoint) {
      openDraft();
      return;
    }

    setSending(true);
    setStatus("");
    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), subject: subject.trim(), message: message.trim() }),
      });
      if (!response.ok) {
        throw new Error(response.status === 429 ? "Too many messages were sent recently. Please try again later or use your email app." : "The message could not be sent. Please try again or use your email app.");
      }
      setStatus("Message sent. Thank you for reaching out!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "The message could not be sent. Please use your email app.");
    } finally {
      setSending(false);
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
    } catch {
      setStatus(`Copy failed. You can email ${emailAddress} directly.`);
    }
  }

  const fieldClass = "rounded-3xl border border-slate-200 bg-white/75 px-5 py-4 text-sm text-slate-900 outline-none transition duration-300 placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white";

  return (
    <form className="mt-6 grid gap-4" onSubmit={submit}>
      <div className="grid gap-4 md:grid-cols-2">
        <input aria-label="Your name" name="name" type="text" required maxLength={100} autoComplete="name" placeholder="Your name" value={name} onChange={(event) => setName(event.target.value)} className={fieldClass} />
        <input aria-label="Your email" name="email" type="email" required maxLength={200} autoComplete="email" placeholder="Your email" value={email} onChange={(event) => setEmail(event.target.value)} className={fieldClass} />
      </div>
      <input aria-label="Subject" name="subject" type="text" required maxLength={200} placeholder="Subject" value={subject} onChange={(event) => setSubject(event.target.value)} className={fieldClass} />
      <textarea aria-label="Message" name="message" required maxLength={5000} placeholder="Tell me about the opportunity or collaboration..." rows={7} value={message} onChange={(event) => setMessage(event.target.value)} className={`${fieldClass} resize-none`} />
      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" disabled={sending} className="shine-mask inline-flex w-fit rounded-full border border-cyan-300 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-900 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/15 disabled:cursor-wait disabled:opacity-60">
          {sending ? "Sending..." : formEndpoint ? "Send Message" : "Open Email Draft"}
        </button>
        {formEndpoint && <button type="button" onClick={openDraft} className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">Use email app</button>}
        <button type="button" onClick={copyEmail} className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">{copied ? "Email copied" : "Copy email address"}</button>
      </div>
      <p role="status" aria-live="polite" className="text-sm text-slate-700">{status}</p>
      {!formEndpoint && <p className="text-xs leading-6 text-slate-500">This opens your email app with your message ready to send.</p>}
    </form>
  );
}
