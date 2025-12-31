"use client";

import { useState, type ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactFormInput } from "@/lib/contact";
import { company } from "@/data/site";
import { Button } from "./ui/button";

const intentOptions = [
  { value: "talent", label: "I need talent" },
  { value: "job", label: "I am a job seeker" },
  { value: "partnership", label: "Partnership inquiry" },
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      intent: "talent",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormInput) => {
    setStatus("loading");
    setServerMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error((data && data.error) || "Something went wrong.");
      }

      setStatus("success");
      setServerMessage("Thanks for reaching out! We’ll reply within one business day.");
      reset();
    } catch (error) {
      setStatus("error");
      setServerMessage((error as Error).message || "Unable to send message. Try again later.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.name?.message}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            className="w-full rounded-xl border border-[var(--color-border-muted)] bg-white px-4 py-3 text-sm text-[var(--color-brand-charcoal)] shadow-sm focus:border-[var(--color-brand-sky)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)]/40"
            placeholder="Jane Doe"
            {...register("name")}
          />
        </Field>
        <Field label="Company" error={errors.company?.message}>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            className="w-full rounded-xl border border-[var(--color-border-muted)] bg-white px-4 py-3 text-sm text-[var(--color-brand-charcoal)] shadow-sm focus:border-[var(--color-brand-sky)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)]/40"
            placeholder="Acme Corp"
            {...register("company")}
          />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" error={errors.email?.message}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className="w-full rounded-xl border border-[var(--color-border-muted)] bg-white px-4 py-3 text-sm text-[var(--color-brand-charcoal)] shadow-sm focus:border-[var(--color-brand-sky)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)]/40"
            placeholder="you@company.com"
            {...register("email")}
            required
          />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-xl border border-[var(--color-border-muted)] bg-white px-4 py-3 text-sm text-[var(--color-brand-charcoal)] shadow-sm focus:border-[var(--color-brand-sky)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)]/40"
            placeholder="+1 (555) 234-7812"
            {...register("phone")}
            required
          />
        </Field>
      </div>
      <Field label="I'm looking for" error={errors.intent?.message}>
        <div className="relative">
          <select
            id="intent"
            className="w-full appearance-none rounded-xl border border-[var(--color-border-muted)] bg-white px-4 py-3 text-sm text-[var(--color-brand-charcoal)] shadow-sm focus:border-[var(--color-brand-sky)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)]/40"
            {...register("intent")}
            required
          >
            {intentOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[var(--color-brand-sky)]">
            <svg
              aria-hidden
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M2 4l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </Field>
      <Field
        label="Message (optional)"
        error={errors.message?.message}
        hint="Include role details, timelines, or anything we should know."
      >
        <textarea
          id="message"
          rows={4}
          className="w-full rounded-xl border border-[var(--color-border-muted)] bg-white px-4 py-3 text-sm text-[var(--color-brand-charcoal)] shadow-sm focus:border-[var(--color-brand-sky)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)]/40"
          placeholder="We need a Director of Operations to start in Q1..."
          {...register("message")}
        />
      </Field>

      {serverMessage ? (
        <div
          role="status"
          className={`rounded-xl border px-4 py-3 text-sm ${
            status === "success"
              ? "border-emerald-300 bg-emerald-50 text-emerald-800"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {serverMessage}
        </div>
      ) : null}

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send message"}
      </Button>

      <p className="text-xs leading-relaxed text-[var(--color-brand-charcoal)] opacity-70">
        Prefer email? Reach us directly at {" "}
        <a className="font-semibold text-[var(--color-brand-sky)]" href={`mailto:${company.email}`}>
          {company.email}
        </a>
        .
      </p>
    </form>
  );
}

type FieldProps = {
  label: string;
  error?: string;
  hint?: string;
  children: ReactNode;
};

function Field({ label, error, hint, children }: FieldProps) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-[var(--color-brand-navy)]">
      <span>{label}</span>
      {children}
      {hint ? (
        <span className="text-xs font-normal text-[var(--color-brand-charcoal)] opacity-70">
          {hint}
        </span>
      ) : null}
      {error ? (
        <span className="text-xs font-normal text-red-600">{error}</span>
      ) : null}
    </label>
  );
}
