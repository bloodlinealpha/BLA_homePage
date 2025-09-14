export default function HeaderHero() {
  return (
    <div className="min-h-[100vh] bg-[#0a0c10] text-slate-200 antialiased">
      {/* Background gradients (lightweight, no images) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(56,189,248,.25),transparent_60%)]" />
        <div className="absolute -top-40 right-[-10%] h-[40rem] w-[40rem] rounded-full blur-3xl bg-gradient-to-br from-cyan-400/20 to-blue-500/10" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-40 border-b border-white/10 bg-black/60 backdrop-blur-lg shadow-2xl">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between relative">
          <a href="#home" className="flex items-center gap-3">
            <span className="inline-grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-black font-bold shadow-lg overflow-hidden">
              <img
                src="/img/Alpha2023-2.png"
                alt="BloodLineAlpha Logo"
                className="h-9 w-9 object-cover rounded-xl"
              />
            </span>
            <span className="font-semibold tracking-tight">BloodLineAlpha Development</span>
          </a>
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#work" className="hover:text-white">Projects</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a
              href="mailto:bloodlinealpha@gmail.com?subject=Workflow%2FAI%20inquiry%20%E2%80%94%20BloodLineAlpha"
              className="inline-flex items-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-3 py-2 font-medium text-cyan-200 hover:bg-cyan-400/20"
            >Email</a>
          </nav>

          {/* Mobile nav (CSS-only), positioned so it doesn't change header height */}
          <details className="md:hidden group" id="mobile-menu">
            <summary className="list-none flex items-center p-2 cursor-pointer" aria-label="Toggle menu">
              <svg className="h-7 w-7 text-cyan-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path className="group-open:hidden" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                <path className="hidden group-open:block" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </summary>

            <nav
                className="
                  absolute left-0 right-0 top-[calc(100%+0rem)] z-40
                  border-t border-white/10 bg-black/80 backdrop-blur
                  max-h-0 opacity-0 overflow-hidden translate-y-[-4px]
                  transition-all duration-200
                  group-open:max-h-96 group-open:opacity-100 group-open:translate-y-0
                  px-4 pb-4 pt-0 flex flex-col gap-2
                "
              >
              <a href="#work" className="py-2 px-2 rounded hover:bg-white/10" data-close-menu>Work</a>
              <a href="#services" className="py-2 px-2 rounded hover:bg-white/10" data-close-menu>Services</a>
              <a href="#about" className="py-2 px-2 rounded hover:bg-white/10" data-close-menu>About</a>
              <a href="mailto:bloodlinealpha@gmail.com?subject=Workflow%2FAI%20inquiry%20%E2%80%94%20BloodLineAlpha"
                className="py-2 px-2 rounded border border-cyan-400/40 bg-cyan-400/10 text-cyan-200 hover:bg-cyan-400/20"
                data-close-menu>Email
              </a>
            </nav>
          </details>
        </div>
      </header>



      {/* Hero */}
      <section id="home">
        <div className="mx-auto max-w-6xl px-4 py-28 md:py-56">
          <div className="max-w-2xl">
            {/* Tagline pill */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Automate · Ship · Scale
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">Automate workflows with AI.</h1>
            <p className="mt-5 text-lg sm:text-xl text-slate-300 max-w-xl">
              Modernize your business with intelligent automation. From the first spark of an idea to seamless deployment, I can simplify your workflows using AI—eliminating repetitive tasks, reducing costs, and saving time!
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:bloodlinealpha@gmail.com?subject=Workflow%2FAI%20inquiry%20%E2%80%94%20BloodLineAlpha"
                className="rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 px-5 py-3 font-semibold text-black shadow-lg shadow-cyan-500/20 hover:opacity-95"
              >Email</a>
              <a href="#work" className="rounded-2xl border border-white/15 px-5 py-3 font-semibold text-white/90 hover:bg-white/5">See my work</a>
            </div>
          </div>

          {/* Proof chips */}
          <div className="mt-24 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {["Workflow automation","AI/LLM integrations","Dashboards & internal tools","Deployment & VPS ops"].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-sm text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
