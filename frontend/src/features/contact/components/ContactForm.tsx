"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/common/card";
import { cn } from "@/lib/utils";
import { CONTACT_SCHEMA, CONTACT_ANIMATION } from "../constants";
import type { ContactFormData } from "../types";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(CONTACT_SCHEMA),
  });

  function onSubmit(_data: ContactFormData) {
    // No backend integration yet — simulate a short delay then show success
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setSubmitted(true);
        reset();
        resolve();
      }, 600);
    });
  }

  return (
    <motion.div variants={CONTACT_ANIMATION.item} className="h-full">
      <GlassCard backdropBlur="sm" hoverEffect="none" className="p-7 h-full">
        {submitted ? (
          <SuccessMessage onReset={() => setSubmitted(false)} />
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-5"
            aria-label="Contact form"
          >
            {/* Name */}
            <Field
              id="contact-name"
              label="Name"
              error={errors.name?.message}
            >
              <input
                id="contact-name"
                type="text"
                placeholder="Ismail Lamraoui"
                autoComplete="name"
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                aria-invalid={!!errors.name}
                {...register("name")}
                className={inputClass(!!errors.name)}
              />
            </Field>

            {/* Email */}
            <Field
              id="contact-email"
              label="Email"
              error={errors.email?.message}
            >
              <input
                id="contact-email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                aria-invalid={!!errors.email}
                {...register("email")}
                className={inputClass(!!errors.email)}
              />
            </Field>

            {/* Message */}
            <Field
              id="contact-message"
              label="Message"
              error={errors.message?.message}
            >
              <textarea
                id="contact-message"
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                aria-invalid={!!errors.message}
                {...register("message")}
                className={cn(inputClass(!!errors.message), "resize-none")}
              />
            </Field>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "mt-1 inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-3",
                "bg-blue-600 text-sm font-semibold text-white",
                "transition-all duration-200 hover:bg-blue-500 active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50",
                "disabled:cursor-not-allowed disabled:opacity-50"
              )}
            >
              {isSubmitting ? (
                <span className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              ) : (
                <Send className="size-4" aria-hidden="true" />
              )}
              {isSubmitting ? "Sending…" : "Send Message"}
            </button>
          </form>
        )}
      </GlassCard>
    </motion.div>
  );
}

/* ── Helpers ─────────────────────────────────────────────────────────────── */

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white",
    "placeholder:text-slate-600 transition-colors duration-150",
    "focus:outline-none focus:ring-2",
    hasError
      ? "border-red-500/40 focus:border-red-500/40 focus:ring-red-500/20"
      : "border-white/10 focus:border-blue-500/40 focus:ring-blue-500/20"
  );
}

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-widest text-slate-500"
      >
        {label}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-xs text-red-400"
        >
          {error}
        </p>
      )}
    </div>
  );
}

interface SuccessMessageProps {
  onReset: () => void;
}

function SuccessMessage({ onReset }: SuccessMessageProps) {
  return (
    <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-5 text-center">
      <div className="inline-flex size-14 items-center justify-center rounded-full bg-blue-500/10 ring-1 ring-blue-500/20">
        <CheckCircle className="size-7 text-blue-400" aria-hidden="true" />
      </div>
      <div className="space-y-2">
        <p className="text-base font-semibold text-white">Message sent!</p>
        <p className="text-sm text-slate-500">
          Thanks for reaching out. I'll get back to you soon.
        </p>
      </div>
      <button
        onClick={onReset}
        className="text-sm text-slate-500 underline-offset-4 hover:text-slate-300 hover:underline transition-colors"
      >
        Send another message
      </button>
    </div>
  );
}
