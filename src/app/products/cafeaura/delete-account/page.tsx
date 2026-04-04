"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Smartphone,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  User,
  Trash2,
  ShieldAlert,
  Copy,
  Check,
} from "lucide-react";
import { motion, type Transition, AnimatePresence } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const A = "#f97316";
const EMAIL = "helpdesk@viruzverse.in";

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 20, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.55, delay, ease: EASE } satisfies Transition,
});

const WHAT_GETS_DELETED = [
  "Your profile, name, and account credentials",
  "Wallet balance (any remaining balance will be forfeited)",
  "Saved preferences, wishlist, and feedback",
  "Push notification subscription and device tokens",
  "All personally identifiable information linked to your account",
];

const WHAT_IS_RETAINED = [
  "Order and payment records, anonymised — your name is removed but transaction amounts and timestamps are kept for accounting compliance",
  "Wallet transaction history in anonymised form (required for tax and audit purposes)",
  "Fraud prevention and security audit logs",
  "Records involved in active disputes or legal proceedings",
];

const IN_APP_STEPS = [
  {
    step: "1",
    label: "Open the Cafeaura app",
    detail: "Make sure you're signed in to the account you wish to delete.",
  },
  {
    step: "2",
    label: "Go to your Profile",
    detail:
      'Tap the profile icon or navigate to the "Profile" tab at the bottom of the screen.',
  },
  {
    step: "3",
    label: 'Scroll to "Danger Zone"',
    detail:
      'Below Help & Support, Terms of Service, and Privacy Policy, you will find a red "Delete Account" option.',
  },
  {
    step: "4",
    label: "Tap Delete Account",
    detail:
      "Read the confirmation prompt carefully. This action is permanent and irreversible.",
  },
  {
    step: "5",
    label: "Confirm deletion",
    detail:
      'Enter your registered email address to confirm, then tap "Permanently Delete My Account".',
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-mono
                 transition-all duration-200 hover:opacity-80 active:scale-95"
      style={{
        background: copied ? "#10b98115" : "rgba(255,255,255,0.06)",
        border: `1px solid ${copied ? "#10b98130" : "rgba(255,255,255,0.08)"}`,
        color: copied ? "#10b981" : "rgba(255,255,255,0.45)",
      }}
      aria-label="Copy email address"
    >
      {copied ? <Check size={11} /> : <Copy size={11} />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export default function DeleteAccountPage() {
  const [activeMethod, setActiveMethod] = useState<"email" | "app" | null>(
    null,
  );

  return (
    <main style={{ background: "#07060f", minHeight: "100vh", color: "white" }}>
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-12">
        {/* Back */}
        <Link
          href="/products/cafeaura"
          className="inline-flex items-center gap-2 text-[12px] font-mono mb-8
                     transition-opacity duration-200 hover:opacity-60"
          style={{ color: "#6b7280" }}
        >
          <ArrowLeft size={13} />
          Back to CafeAura
        </Link>

        {/* Header */}
        <motion.div {...rise(0)} className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
              style={{
                background: "rgba(239,68,68,0.1)",
                border: "1px solid rgba(239,68,68,0.2)",
              }}
            >
              <Trash2
                size={18}
                style={{ color: "#ef4444" }}
                strokeWidth={1.7}
              />
            </div>
            <span
              className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold"
              style={{
                background: `${A}10`,
                color: A,
                border: `1px solid ${A}25`,
              }}
            >
              CafeAura · Account
            </span>
          </div>
          <h1
            className="font-black tracking-[-0.04em] leading-tight mb-2"
            style={{ fontSize: "clamp(26px,5vw,42px)" }}
          >
            Delete Your <span style={{ color: "#ef4444" }}>Account</span>
          </h1>
          <p
            className="text-[13.5px] leading-[1.85]"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Permanently remove your Cafeaura account and all associated personal
            data. This action is{" "}
            <strong style={{ color: "rgba(255,255,255,0.65)" }}>
              irreversible
            </strong>
            .
          </p>
        </motion.div>

        {/* Warning banner */}
        <motion.div
          {...rise(0.06)}
          className="flex items-start gap-3 px-4 py-4 rounded-2xl mb-8"
          style={{
            background: "rgba(239,68,68,0.06)",
            border: "1px solid rgba(239,68,68,0.15)",
          }}
        >
          <AlertTriangle
            size={16}
            style={{ color: "#ef4444" }}
            className="mt-0.5 shrink-0"
          />
          <p
            className="text-[13px] leading-[1.75]"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Deleting your account will permanently erase your profile, order
            history, wallet balance, and all personal data. This cannot be
            undone. Make sure you have used or resolved any remaining wallet
            balance before proceeding.
          </p>
        </motion.div>

        {/* What gets deleted / retained */}
        <motion.div
          {...rise(0.1)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
        >
          {/* Deleted */}
          <div
            className="p-4 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <p
              className="text-[11px] font-mono font-semibold mb-3 flex items-center gap-1.5"
              style={{ color: "#ef4444" }}
            >
              <Trash2 size={11} /> WHAT GETS DELETED
            </p>
            <ul className="flex flex-col gap-2">
              {WHAT_GETS_DELETED.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[12.5px] leading-[1.7]"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  <span
                    className="mt-[7px] w-1 h-1 rounded-full shrink-0"
                    style={{ background: "#ef4444" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Retained */}
          <div
            className="p-4 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <p
              className="text-[11px] font-mono font-semibold mb-3 flex items-center gap-1.5"
              style={{ color: "#f59e0b" }}
            >
              <ShieldAlert size={11} /> WHAT MAY BE RETAINED
            </p>
            <ul className="flex flex-col gap-2">
              {WHAT_IS_RETAINED.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[12.5px] leading-[1.7]"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  <span
                    className="mt-[7px] w-1 h-1 rounded-full shrink-0"
                    style={{ background: "#f59e0b" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          {...rise(0.14)}
          className="h-px mb-8"
          style={{
            background:
              "linear-gradient(90deg,rgba(255,255,255,0.07),transparent)",
          }}
        />

        {/* Choose method */}
        <motion.div {...rise(0.16)} className="mb-6">
          <p
            className="text-[13px] font-semibold mb-1"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Choose how to delete your account
          </p>
          <p
            className="text-[12px] font-mono"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Both methods are fully supported and processed within 45 days.
          </p>
        </motion.div>

        {/* Method cards */}
        <div className="flex flex-col gap-3 mb-10">
          {/* Option 1 — Email */}
          <motion.div {...rise(0.2)}>
            <button
              onClick={() =>
                setActiveMethod(activeMethod === "email" ? null : "email")
              }
              className="w-full text-left"
            >
              <div
                className="flex items-center justify-between px-5 py-4 rounded-2xl
                           transition-all duration-300"
                style={{
                  background:
                    activeMethod === "email"
                      ? `${A}0c`
                      : "rgba(255,255,255,0.03)",
                  border:
                    activeMethod === "email"
                      ? `1px solid ${A}30`
                      : "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background:
                        activeMethod === "email"
                          ? `${A}15`
                          : "rgba(255,255,255,0.05)",
                      border: `1px solid ${activeMethod === "email" ? `${A}25` : "rgba(255,255,255,0.08)"}`,
                    }}
                  >
                    <Mail
                      size={15}
                      style={{
                        color:
                          activeMethod === "email"
                            ? A
                            : "rgba(255,255,255,0.4)",
                      }}
                      strokeWidth={1.7}
                    />
                  </div>
                  <div>
                    <p className="text-[13.5px] font-bold text-white leading-tight">
                      Request via Email
                    </p>
                    <p
                      className="text-[11px] font-mono mt-0.5"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                    >
                      Send a deletion request to our support team
                    </p>
                  </div>
                </div>
                <ChevronRight
                  size={16}
                  style={{
                    color: "rgba(255,255,255,0.3)",
                    transform:
                      activeMethod === "email"
                        ? "rotate(90deg)"
                        : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </div>
            </button>

            <AnimatePresence>
              {activeMethod === "email" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div
                    className="px-5 py-5 rounded-b-2xl -mt-2 pt-6"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: `1px solid ${A}20`,
                      borderTop: "none",
                    }}
                  >
                    <p
                      className="text-[13px] leading-[1.8] mb-4"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      Send an email to our support team from your{" "}
                      <strong style={{ color: "rgba(255,255,255,0.75)" }}>
                        registered email address
                      </strong>{" "}
                      with the following details:
                    </p>

                    {/* Email details card */}
                    <div
                      className="rounded-2xl overflow-hidden mb-4"
                      style={{
                        background: "#0d0a1a",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      {/* Card chrome */}
                      <div
                        className="flex items-center justify-between px-4 py-2.5"
                        style={{
                          background: "#110d1f",
                          borderBottom: "1px solid rgba(255,255,255,0.05)",
                        }}
                      >
                        <span
                          className="text-[10px] font-mono"
                          style={{ color: "#2e1f4a" }}
                        >
                          New Email Draft
                        </span>
                        <div className="flex items-center gap-1.5">
                          {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
                            <div
                              key={i}
                              className="w-2 h-2 rounded-full"
                              style={{ background: c }}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="p-4 flex flex-col gap-3">
                        {/* To */}
                        <div>
                          <p
                            className="text-[10px] font-mono mb-1"
                            style={{ color: "rgba(255,255,255,0.25)" }}
                          >
                            TO
                          </p>
                          <div className="flex items-center justify-between gap-2">
                            <span
                              className="text-[13px] font-mono"
                              style={{ color: A }}
                            >
                              {EMAIL}
                            </span>
                            <CopyButton text={EMAIL} />
                          </div>
                        </div>

                        <div
                          className="h-px"
                          style={{ background: "rgba(255,255,255,0.05)" }}
                        />

                        {/* Subject */}
                        <div>
                          <p
                            className="text-[10px] font-mono mb-1"
                            style={{ color: "rgba(255,255,255,0.25)" }}
                          >
                            SUBJECT
                          </p>
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[13px] font-mono text-white">
                              Account Deletion Request – Cafeaura
                            </span>
                            <CopyButton text="Account Deletion Request – Cafeaura" />
                          </div>
                        </div>

                        <div
                          className="h-px"
                          style={{ background: "rgba(255,255,255,0.05)" }}
                        />

                        {/* Body */}
                        <div>
                          <p
                            className="text-[10px] font-mono mb-2"
                            style={{ color: "rgba(255,255,255,0.25)" }}
                          >
                            INCLUDE IN YOUR MESSAGE
                          </p>
                          <ul className="flex flex-col gap-1.5">
                            {[
                              "Your full name",
                              "Registered email address on your Cafeaura account",
                              "Institution or campus name",
                              "Reason for deletion (optional)",
                              'Confirmation: "I confirm I want to permanently delete my account."',
                            ].map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-[12.5px] leading-[1.7]"
                                style={{ color: "rgba(255,255,255,0.45)" }}
                              >
                                <CheckCircle2
                                  size={12}
                                  style={{ color: "#10b981" }}
                                  className="mt-[3px] shrink-0"
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <a
                      href={`mailto:${EMAIL}?subject=Account%20Deletion%20Request%20%E2%80%93%20Cafeaura`}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl
                                 text-[13px] font-bold text-white transition-all duration-300
                                 hover:-translate-y-0.5 active:scale-95"
                      style={{
                        background: `linear-gradient(135deg,${A},#ea580c)`,
                        boxShadow: `0 8px 24px ${A}35`,
                      }}
                    >
                      <Mail size={14} />
                      Open Email Client
                    </a>

                    <p
                      className="text-[11px] font-mono mt-3"
                      style={{ color: "rgba(255,255,255,0.25)" }}
                    >
                      Requests are processed within 45 days. You will receive a
                      confirmation email once your account has been deleted.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Option 2 — In-App */}
          <motion.div {...rise(0.24)}>
            <button
              onClick={() =>
                setActiveMethod(activeMethod === "app" ? null : "app")
              }
              className="w-full text-left"
            >
              <div
                className="flex items-center justify-between px-5 py-4 rounded-2xl
                           transition-all duration-300"
                style={{
                  background:
                    activeMethod === "app"
                      ? "rgba(239,68,68,0.07)"
                      : "rgba(255,255,255,0.03)",
                  border:
                    activeMethod === "app"
                      ? "1px solid rgba(239,68,68,0.25)"
                      : "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background:
                        activeMethod === "app"
                          ? "rgba(239,68,68,0.12)"
                          : "rgba(255,255,255,0.05)",
                      border: `1px solid ${
                        activeMethod === "app"
                          ? "rgba(239,68,68,0.22)"
                          : "rgba(255,255,255,0.08)"
                      }`,
                    }}
                  >
                    <Smartphone
                      size={15}
                      style={{
                        color:
                          activeMethod === "app"
                            ? "#ef4444"
                            : "rgba(255,255,255,0.4)",
                      }}
                      strokeWidth={1.7}
                    />
                  </div>
                  <div>
                    <p className="text-[13.5px] font-bold text-white leading-tight">
                      Delete Inside the App
                    </p>
                    <p
                      className="text-[11px] font-mono mt-0.5"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                    >
                      Follow the steps directly in Cafeaura
                    </p>
                  </div>
                </div>
                <ChevronRight
                  size={16}
                  style={{
                    color: "rgba(255,255,255,0.3)",
                    transform:
                      activeMethod === "app" ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </div>
            </button>

            <AnimatePresence>
              {activeMethod === "app" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div
                    className="px-5 py-5 rounded-b-2xl -mt-2 pt-6"
                    style={{
                      background: "rgba(239,68,68,0.03)",
                      border: "1px solid rgba(239,68,68,0.15)",
                      borderTop: "none",
                    }}
                  >
                    <p
                      className="text-[13px] leading-[1.8] mb-5"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      Follow these steps inside the Cafeaura mobile app:
                    </p>

                    {/* Steps */}
                    <div className="flex flex-col gap-0">
                      {IN_APP_STEPS.map((item, i) => (
                        <div key={item.step} className="flex gap-4">
                          {/* Step indicator + connector */}
                          <div className="flex flex-col items-center">
                            <div
                              className="w-7 h-7 rounded-full flex items-center justify-center
                                         text-[11px] font-black shrink-0"
                              style={{
                                background:
                                  i === 2
                                    ? "rgba(239,68,68,0.15)"
                                    : "rgba(255,255,255,0.06)",
                                border:
                                  i === 2
                                    ? "1px solid rgba(239,68,68,0.3)"
                                    : "1px solid rgba(255,255,255,0.08)",
                                color:
                                  i === 2 ? "#ef4444" : "rgba(255,255,255,0.5)",
                              }}
                            >
                              {item.step}
                            </div>
                            {i < IN_APP_STEPS.length - 1 && (
                              <div
                                className="w-px flex-1 my-1"
                                style={{
                                  background: "rgba(255,255,255,0.06)",
                                  minHeight: "16px",
                                }}
                              />
                            )}
                          </div>

                          {/* Content */}
                          <div className="pb-5">
                            <p
                              className="text-[13px] font-semibold leading-tight mb-1"
                              style={{
                                color:
                                  i === 2 ? "#ef4444" : "rgba(255,255,255,0.8)",
                              }}
                            >
                              {item.label}
                            </p>
                            <p
                              className="text-[12.5px] leading-[1.75]"
                              style={{ color: "rgba(255,255,255,0.4)" }}
                            >
                              {item.detail}
                            </p>

                            {/* Profile page map — shown on step 3 */}
                            {i === 2 && (
                              <div
                                className="mt-3 rounded-xl overflow-hidden"
                                style={{
                                  background: "#0d0a1a",
                                  border: "1px solid rgba(255,255,255,0.06)",
                                }}
                              >
                                {/* Mock profile page items */}
                                {[
                                  { label: "Help & Support", muted: false },
                                  { label: "Terms of Service", muted: false },
                                  { label: "Privacy Policy", muted: false },
                                  {
                                    label: "Delete Account",
                                    muted: false,
                                    danger: true,
                                  },
                                ].map((row, ri, arr) => (
                                  <div
                                    key={row.label}
                                    className="flex items-center justify-between px-4 py-3"
                                    style={{
                                      borderBottom:
                                        ri < arr.length - 1
                                          ? "1px solid rgba(255,255,255,0.05)"
                                          : "none",
                                      background: row.danger
                                        ? "rgba(239,68,68,0.07)"
                                        : "transparent",
                                    }}
                                  >
                                    <div className="flex items-center gap-2.5">
                                      {row.danger && (
                                        <Trash2
                                          size={13}
                                          style={{ color: "#ef4444" }}
                                          strokeWidth={1.7}
                                        />
                                      )}
                                      {!row.danger && (
                                        <User
                                          size={13}
                                          style={{
                                            color: "rgba(255,255,255,0.2)",
                                          }}
                                          strokeWidth={1.7}
                                        />
                                      )}
                                      <span
                                        className="text-[12.5px] font-semibold"
                                        style={{
                                          color: row.danger
                                            ? "#ef4444"
                                            : "rgba(255,255,255,0.55)",
                                        }}
                                      >
                                        {row.label}
                                      </span>
                                    </div>
                                    <ChevronRight
                                      size={13}
                                      style={{
                                        color: row.danger
                                          ? "rgba(239,68,68,0.5)"
                                          : "rgba(255,255,255,0.15)",
                                      }}
                                    />
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <p
                      className="text-[11px] font-mono mt-1"
                      style={{ color: "rgba(255,255,255,0.25)" }}
                    >
                      Deletion is permanent. Your account and data will be
                      removed within 45 days.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
