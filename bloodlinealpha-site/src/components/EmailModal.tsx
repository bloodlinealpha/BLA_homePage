import React, { useState } from "react";

const EMAIL = "bloodlinealpha@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=Workflow%2FAI%20inquiry%20%E2%80%94%20BloodLineAlpha`;

export default function EmailModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-[#10131a] rounded-2xl p-8 shadow-2xl border border-white/10 min-w-[320px] max-w-[90vw] relative">
        {/* X close button */}
        <button
          className="absolute top-3 right-3 text-slate-400 hover:text-white text-xl font-bold rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400"
          onClick={onClose}
          aria-label="Close"
          title="Close"
          type="button"
        >
          ×
        </button>
        <h2 className="text-lg font-semibold text-white mb-2">Contact BloodLineAlpha</h2>
        <p className="text-slate-300 text-sm mb-4">Choose how you'd like to get in touch:</p>
        <div className="flex flex-col gap-3">
          <a
            href={MAILTO}
            className="inline-flex items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-base font-medium text-cyan-200 hover:bg-cyan-400/20 transition"
            target="_blank"
            rel="noopener noreferrer"
            data-bypass-email-modal
          >
            Open in Email App
          </a>
          <button
            className="inline-flex items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-base font-medium text-cyan-200 hover:bg-cyan-400/20 transition"
            onClick={handleCopy}
            type="button"
          >
            {copied ? "Copied!" : "Copy Email Address"}
          </button>
        </div>
      </div>
    </div>
  );
}
