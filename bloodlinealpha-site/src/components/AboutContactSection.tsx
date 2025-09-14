export default function AboutContactSection() {
  const bullets = [
    "Workflow automation & AI/LLM/Agent integrations",
    "Full‑stack builds: React · Node · C#/.NET · Docker",
    "Deployments: VPS (Docker/Nginx), SSL, CI/CD",
    "Dashboards, admin tools, and APIs",
    "Fast iterations (1–4 week sprints) — contract friendly",
  ];

  return (
    <section
      id="about"
      className="relative border-t border-white/10 bg-[#0a0c10] text-slate-200"
      data-testid="about-contact-section"
    >
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_100%,rgba(56,189,248,.15),transparent_70%)]" />
        <div className="absolute top-[-6rem] left-[-10%] h-[28rem] w-[28rem] rounded-full blur-3xl bg-gradient-to-br from-cyan-400/15 to-blue-500/10" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-white">About & Contact</h2>

        <div className="mt-8 grid items-center gap-8 md:grid-cols-[220px_1fr]">
          {/* Avatar */}
          <div className="mx-auto md:mx-0">
            <a
              href="https://www.linkedin.com/in/kade-halabuza-936416a2/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kade Halabuza LinkedIn"
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQEMUMSma4eE0g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1695616508821?e=1760572800&v=beta&t=ROxnEeu4EnZbJ9L8LSijReVby0_5y44BB8kHHH-gYBk"
                alt="KP — LinkedIn headshot"
                className="h-44 w-44 rounded-2xl object-cover ring-1 ring-white/10 shadow-xl shadow-black/30"
                loading="lazy"
              />
            </a>
          </div>

          {/* Copy + bullets */}
          <div>
            <p className="text-slate-300 leading-relaxed">
              Contract full‑stack development focused on removing busywork, shipping clean UIs, and
              running reliable deployments.
            </p>
            <ul className="mt-5 space-y-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-slate-200">
                  <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                  <span className="text-sm sm:text-base text-slate-300">{b}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="mailto:bloodlinealpha@gmail.com"
                className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 font-medium text-cyan-200 hover:bg-cyan-400/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M14 4H2a2 2 0 0 0-2 2v.217l8 4.8 8-4.8V6a2 2 0 0 0-2-2z"/>
                  <path d="M0 8.383V12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.383l-7.555 4.533a.5.5 0 0 1-.89 0L0 8.383z"/>
                </svg>
                bloodlinealpha@gmail.com
              </a>
              <a
                href="https://github.com/bloodlinealpha/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 font-medium text-cyan-200 hover:bg-cyan-400/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49C3.99 14.4 3.48 13.2 3.48 13.2c-.36-.91-.88-1.15-.88-1.15-.72-.5.05-.49.05-.49.79.06 1.2.82 1.2.82.71 1.22 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.62-.17 1.29-.26 1.95-.26.66 0 1.33.09 1.95.26 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.06-1.87 3.75-3.65 3.95.29.25.56.74.56 1.49 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/kade-halabuza-936416a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 font-medium text-cyan-200 hover:bg-cyan-400/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zM4.943 13.394V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
