export default function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0a0c10] text-slate-300">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_120%,rgba(56,189,248,.12),transparent_70%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          {/* Brand + short line */}
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-black font-bold shadow-lg">BA</span>
              <span className="font-semibold text-white tracking-tight">BloodLineAlpha Development</span>
            </div>
            <p className="mt-3 text-sm text-slate-400 max-w-xl">
              Automate workflows, ship faster, and keep deploys boring and reliable.
            </p>

            {/* Footer nav */}
            <nav className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <a href="#work" className="hover:text-white">Projects</a>
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="https://blog.bloodlinealpha.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Blog</a>
            </nav>
          </div>

          {/* CTA + socials */}
          <div className="flex flex-col items-start gap-4 md:items-end">
            <a
              href="mailto:bloodlinealpha@gmail.com"
              className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 hover:bg-cyan-400/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M14 4H2a2 2 0 0 0-2 2v.217l8 4.8 8-4.8V6a2 2 0 0 0-2-2z"/>
                <path d="M0 8.383V12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.383l-7.555 4.533a.5.5 0 0 1-.89 0L0 8.383z"/>
              </svg>
              bloodlinealpha@gmail.com
            </a>
            <div className="flex items-center gap-3 text-slate-400">
              <a href="https://github.com/bloodlinealpha/" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/10 bg-white/5 p-2 hover:text-cyan-300 hover:bg-white/10" aria-label="BloodLineAlpha GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49C3.99 14.4 3.48 13.2 3.48 13.2c-.36-.91-.88-1.15-.88-1.15-.72-.5.05-.49.05-.49.79.06 1.2.82 1.2.82.71 1.22 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.62-.17 1.29-.26 1.95-.26.66 0 1.33.09 1.95.26 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.06-1.87 3.75-3.65 3.95.29.25.56.74.56 1.49 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/kade-halabuza-936416a2/" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/10 bg-white/5 p-2 hover:text-cyan-300 hover:bg-white/10" aria-label="Kade Halabuza LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zM4.943 13.394V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} BloodLineAlpha Development. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-white">Back to top</a>
            <a href="/sitemap-index.xml" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
