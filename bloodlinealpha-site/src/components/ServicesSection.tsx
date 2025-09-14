// Services Section — Astro/Tailwind (React Preview)
// Notes:
// - Fixed JSX syntax error caused by escaped quotes in className attributes.
// - Added data-testid hooks and a tiny exported TEST object for quick checks.
// - Styling matches the hero section (hover lift, subtle borders, cyan accents).

const SERVICES = [
  {
    name: "Automation & AI Integration",
    tagline: "Cut manual steps with LLMs and smart workflows",
    desc:
      "Design and ship AI/LLM‑assisted flows that handle repetitive tasks, summarize data, and trigger actions across tools.",
    outcomes: ["Less manual review", "Faster decisions", "Lower ops cost"],
    includes: ["LLM/agent setup", "Document processing", "OpenAi/Gemini/Claude"],
  },
  {
    name: "Internal Tools & Dashboards",
    tagline: "Clarity for teams, in one place",
    desc:
      "Custom dashboards and admin panels that centralize metrics, approvals, and workflows—built for speed and adoption.",
    outcomes: ["Single source of truth", "Less context switching", "Cleaner handoffs"],
    includes: ["Role‑based access", "Audit trails", "Exportable reports"],
  },
  {
    name: "SaaS / MVP Sprint",
    tagline: "Idea to live product in weeks",
    desc:
      "Scope, design, and build a lean first version with authentication, data models, and billing ready to grow.",
    outcomes: ["Validate faster", "Quick iterations", "Investor‑ready demo"],
    includes: ["Auth & users", "React/Node/SQL", "Cloudflare", "Stripe"],
  },
  {
    name: "Deployment & VPS Ops",
    tagline: "Stable, monitored, and repeatable",
    desc:
      "Containerized deploys on a VPS with CI/CD, SSL, logging, and backups—keep releases boring and reliable.",
    outcomes: ["Predictable releases", "Fewer incidents", "Better performance"],
    includes: ["Docker & Nginx", "CI/CD pipelines", "Monitoring & backups"],
  },
];

// Lightweight test hooks (useful for automated checks without a separate test file)
export const __TEST__ = {
  servicesCount: SERVICES.length,
  serviceNames: SERVICES.map((s) => s.name),
};

export default function ServicesSection() {
  const services = SERVICES;

  return (
    <section id="services" className="relative border-t border-white/10 bg-[#0a0c10] text-slate-200" data-testid="services-section">
      {/* Section backdrop to match hero */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(56,189,248,.18),transparent_60%)]" />
        <div className="absolute -top-24 right-[-10%] h-[32rem] w-[32rem] rounded-full blur-3xl bg-gradient-to-br from-cyan-400/15 to-blue-500/10" />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Services</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.name}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-white/[0.06]"
              data-testid="service-card"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/10 ring-1 ring-white/10">
                <div className="h-2 w-2 rounded-full bg-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">{s.name}</h3>
              <p className="mt-1 text-sm text-cyan-200">{s.tagline}</p>
              <p className="mt-3 text-sm text-slate-300">{s.desc}</p>

              <div className="mt-4">
                <div className="text-xs font-medium text-slate-400">Outcomes</div>
                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                  {s.outcomes.map((o) => (
                    <li key={o} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> {o}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <div className="text-xs font-medium text-slate-400">Includes</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {s.includes.map((i) => (
                    <span
                      key={i}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                      data-testid="service-include"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>

              {/* <div className="mt-6">
                <a
                  href="mailto:bloodlinealpha@gmail.com?subject=Workflow%2FAI%20inquiry%20%E2%80%94%20BloodLineAlpha"
                  className="inline-flex items-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-3 py-2 text-sm font-medium text-cyan-200 hover:bg-cyan-400/20"
                  data-testid="services-email-bottom"
                >
                  Email
                </a>
              </div> */}
            </article>
          ))}
        </div>

        {/* Email button below all projects */}
        <div className="mt-12 flex justify-center">
          <a
            href="mailto:bloodlinealpha@gmail.com?subject=Workflow%2FAI%20inquiry%20%E2%80%94%20BloodLineAlpha"
            className="inline-flex items-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 text-base font-semibold text-cyan-200 hover:bg-cyan-400/20 shadow-lg transition"
            data-testid="services-email-bottom"
          >
            Contact bloodlinealpha@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
