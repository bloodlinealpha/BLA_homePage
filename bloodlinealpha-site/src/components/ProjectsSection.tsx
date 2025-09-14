export default function ProjectsSection() {
  const projects = [
    {
      title: "NHL GPT - Stats & Analysis",
      summary:
        "Domain GPT + API for NHL game logs with prediction visualizer and clean UI.",
      stack: ["Astro", "Node", "Python"],
      image: "https://placehold.co/600x400?text=NHL+GPT",
      links: [
        { label: "View GPT", href: "https://chat.openai.com/g/g-h1JcfZzg8-hockey-stats-and-analysis-expert" },
        { label: "GitHub Repo", href: "https://github.com/bloodlinealpha/NHL-Stats-and-Analysis-Expert" },
      ],
    },
    {
      title: "Canadian Petroleum Registry",
      summary:
        "A web-based platform that simplifies exploration and visualization of oil and gas production data in Western Canada by aggregating public data with interactive graphs, node-based explorers, and insight reports.",
      stack: ["React", "C#/.NET", "MS SQL", "Docker"],
      image: "https://placehold.co/600x400?text=Canadian+Petroleum+Registry",
      links: [
        { label: "App", href: "https://app.westerncanadaenergydatabase.ca/" },
      ],
    },
    {
      title: "scikit-learn for NHL stats",
      summary: "ML models predicting NHL points with scikit-learn.",
      stack: ["Python", "scikit-learn"],
      image: "https://placehold.co/600x400?text=Scikit+NHL+Stats",
      links: [
        { label: "GitHub Repo", href: "https://github.com/bloodlinealpha/scikit-learn-nhl/tree/master/examples/points" },
        { label: "Visualizer", href: "https://bloodlinealpha.com/nhl/points-prediction/" },
      ],
    },
    {
      title: "API Wrapper for NHL game logs",
      summary: "API wrapper and GPT for NHL game logs.",
      stack: ["Node", "Express", "OpenAI GPT"],
      image: "https://placehold.co/600x400?text=API+Wrapper",
      links: [
        { label: "GitHub Repo", href: "https://github.com/bloodlinealpha/NHL-Stats-and-Analysis-Expert-API" },
        { label: "Hockey GPT", href: "https://chat.openai.com/g/g-h1JcfZzg8-hockey-stats-and-analysis-expert" },
      ],
    },
    {
      title: "scikit-learn for NHL Game Prediction",
      summary: "ML-based NHL game outcome predictions.",
      stack: ["Python", "scikit-learn"],
      image: "https://placehold.co/600x400?text=Scikit+NHL+Game+Prediction",
      links: [
        { label: "GitHub Repo", href: "https://github.com/bloodlinealpha/scikit-learn-nhl/tree/master/examples/teams" },
      ],
    },
    {
      title: "Canvas Magic Grab",
      summary:
        "On-canvas element detection + export tools for designers.",
      stack: ["React", "Canvas", "Tailwind"],
      image: "https://placehold.co/600x400?text=Canvas+Magic+Grab",
      links: [
        { label: "Logo Example", href: "https://www.canva.com/design/DAF2oNUImwk/AYlXIoCw0ynuyOW7zzldig/edit" },
        { label: "Header Example", href: "https://www.canva.com/design/DAF2oLqIWSs/PUhG1zlnEcG0dzqVkCWTAA/edit" },
      ],
    },
    {
      title: "Checkers",
      summary: "Browser-based checkers game with simple UI and gameplay.",
      stack: ["HTML", "CSS", "JavaScript"],
      image: "https://placehold.co/600x400?text=Checkers",
      links: [
        { label: "Play", href: "checkers/checkers_2.html" },
      ],
    },
    {
      title: "AI Doc Navigator",
      summary: "Custom GPT for navigating and querying documents.",
      stack: ["OpenAI GPT", "Custom Prompt"],
      image: "https://placehold.co/600x400?text=AI+Doc+Navigator",
      links: [
        { label: "Use GPT", href: "https://chat.openai.com/g/g-Yhux0PqZA-ai-doc-navigator" },
      ],
    },
    {
      title: "GitBook Docs",
      summary: "Documentation platforms: GitBook and BlogeaAI.",
      stack: ["GitBook"],
      image: "https://placehold.co/600x400?text=GitBook+Docs",
      links: [
        { label: "GitBook Docs", href: "https://docs.gitbook.com/" },
        { label: "BlogeaAI Docs", href: "https://docs.blogeaai.com/" },
      ],
    },
    {
      title: "Runway ML Gen 3 Alpha",
      summary: "Experimenting with Runway ML’s Gen 3 Alpha text-to-video model.",
      stack: ["Runway ML", "AI Video"],
      image: "https://placehold.co/600x400?text=Runway+ML+Gen+3+Alpha",
      links: [
        { label: "Runway Gen 3 Alpha", href: "https://blog.bloodlinealpha.com/syntax-sunday-runway-mls-gen-3-alpha-text-to-video-model" },
      ],
    },
  ];

  return (
    <section id="work" className="relative border-t border-white/10 bg-[#0a0c10] text-slate-200" data-testid="projects-section">
      {/* Section backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(56,189,248,.18),transparent_60%)]" />
        <div className="absolute -top-24 left-[-10%] h-[32rem] w-[32rem] rounded-full blur-3xl bg-gradient-to-br from-cyan-400/15 to-blue-500/10" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Projects</h2>
          <p className="mt-2 text-sm text-slate-400">
            Check out more thoughts and experiments on my blog: {" "}
            <a
              href="https://blog.bloodlinealpha.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:text-cyan-200"
            >
              blog.bloodlinealpha.com
            </a>
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-white/[0.06]"
              data-testid="project-card"
            >
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  className="mb-4 h-40 w-full rounded-xl object-cover ring-1 ring-inset ring-white/10"
                />
              ) : (
                <div className="mb-4 h-40 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 ring-1 ring-inset ring-white/10 group-hover:from-slate-700" />
              )}
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.summary}</p>
              <div className="mt-3 text-sm text-slate-400">{p.stack.join(" · ")}</div>
              {p.links && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-3 py-2 text-sm font-medium text-cyan-200 hover:bg-cyan-400/20"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
