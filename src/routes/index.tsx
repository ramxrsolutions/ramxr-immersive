import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Play, Sparkles, Box, Layers, Zap, GraduationCap, Wrench, Eye, Mail, MapPin, Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/ramxr-hero.png";
import vrHeadset from "@/assets/vr-headset.jpg";
import dogAnatomy from "@/assets/dog-anatomy.jpg";
import submarine from "@/assets/submarine.jpg";
import vrExperience from "@/assets/vr-experience.jpg";
import hologram from "@/assets/hologram.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "RamXR Solutions — Step Inside Learning with Virtual Reality" },
      { name: "description", content: "Immersive VR-based learning systems for interactive, real-time 3D exploration of complex models and environments." },
      { property: "og:title", content: "RamXR Solutions — Immersive VR Learning" },
      { property: "og:description", content: "Explore, interact, and understand complex systems through fully immersive 3D environments." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Solutions />
      <Metrics />
      <Demo />
      <Contact />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 bg-hero-glow">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-gradient-brand opacity-30 blur-3xl drift" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-gradient-brand opacity-20 blur-3xl drift" style={{ animationDelay: "-6s" }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full glass gradient-border px-4 py-1.5 text-xs">
            <Sparkles className="h-3.5 w-3.5 text-gradient-brand" />
            <span className="text-muted-foreground">Immersive VR Learning Platform</span>
          </div>
        </Reveal>

        <div className="mt-6 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05]">
                Step Inside <span className="text-gradient-brand">Learning</span> with Virtual Reality
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Explore, interact, and understand complex systems through fully immersive 3D environments engineered for clarity and depth.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#demo" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground hover-lift">
                  <Play className="h-4 w-4" /> View in Action
                </a>
                <a href="#projects" className="inline-flex items-center gap-2 rounded-full glass gradient-border px-6 py-3 text-sm font-medium hover-lift">
                  Explore Projects <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-12 flex flex-wrap items-center gap-8 text-xs text-muted-foreground">
                {["Real-time 3D", "Interactive parts", "Click-to-learn", "Cross-platform VR"].map((t) => (
                  <span key={t} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand pulse-glow" /> {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 relative">
            <Reveal delay={200}>
              <div className="relative rounded-3xl overflow-hidden gradient-border glow-ring float-slow hidden dark:block">
                <img src={heroImg} alt="RamXR VR headset and controllers" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              <div className="relative rounded-3xl overflow-hidden gradient-border glow-ring float-slow dark:hidden">
                <img src={vrHeadset} alt="VR headset" className="w-full h-auto" />
              </div>
              <div className="absolute -top-6 -left-6 glass rounded-2xl px-4 py-3 float">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Module</div>
                <div className="text-sm font-medium">Anatomy · Layer 03</div>
              </div>
              <div className="absolute -bottom-6 -right-6 glass rounded-2xl px-4 py-3 float" style={{ animationDelay: "-2s" }}>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Latency</div>
                <div className="text-sm font-medium">12 ms · Real-time</div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const tags = ["Education", "Engineering", "Veterinary", "Training", "Visualization", "Simulation", "3D Models", "Interactive Learning"];
  return (
    <div className="border-y border-border/60 py-6 overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap marquee-track">
        {[...tags, ...tags, ...tags].map((t, i) => (
          <span key={i} className="text-sm text-muted-foreground tracking-widest uppercase">{t}</span>
        ))}
      </div>
    </div>
  );
}

function About() {
  const points = [
    { icon: Box, title: "Interactive Learning", desc: "Move beyond passive reading. Manipulate models, isolate parts, and learn by doing." },
    { icon: Layers, title: "Real-time Exploration", desc: "Navigate inside detailed 3D environments with instant response and depth." },
    { icon: Eye, title: "Practical Visualization", desc: "Make abstract concepts tangible through guided immersive experiences." },
  ];
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden gradient-border float">
              <img src={vrExperience} alt="Immersive VR learning" loading="lazy" width={1280} height={960} className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-8 -right-4 w-48 rounded-2xl overflow-hidden gradient-border float-slow hidden sm:block">
              <img src={hologram} alt="Holographic UI" loading="lazy" width={1280} height={960} className="w-full h-auto" />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-gradient-brand font-medium">About</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold leading-tight">
              A platform built for <span className="text-gradient-brand">immersive understanding</span>.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              RamXR Solutions delivers VR-based learning experiences for education and training—turning complex topics into environments you can step inside, interact with, and explore at your own pace.
            </p>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-1 gap-4">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="glass gradient-border rounded-2xl p-5 hover-lift flex gap-4">
                  <div className="h-11 w-11 rounded-xl bg-gradient-brand grid place-items-center shrink-0">
                    <p.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-medium">{p.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">{p.desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const items = [
    {
      img: dogAnatomy,
      title: "Dog Anatomy VR Model",
      desc: "Designed for veterinary learning. Explore internal and external structures with every part interactive and labeled with detailed descriptions.",
      tags: ["Veterinary", "Anatomy", "Educational"],
    },
    {
      img: submarine,
      title: "Submarine Interactive Model",
      desc: "An engineering-focused VR experience. Navigate inside the submarine and click components to understand their function in real time.",
      tags: ["Engineering", "Mechanical", "Training"],
    },
  ];
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 -z-10 bg-hero-glow opacity-60" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-gradient-brand font-medium">Projects</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold">Immersive models, built to be explored.</h2>
            <p className="mt-4 text-muted-foreground text-lg">A look at the interactive 3D experiences powering hands-on learning.</p>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {items.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <article className="group rounded-3xl overflow-hidden glass gradient-border hover-lift">
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 float-slow"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full glass">{t}</span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-muted-foreground">{p.desc}</p>
                  <a href="#demo" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gradient-brand">
                    View in Action <ArrowRight className="h-4 w-4 text-primary" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  const items = [
    { icon: GraduationCap, title: "Education", desc: "Immersive learning for students through interactive 3D models that bring concepts to life." },
    { icon: Wrench, title: "Training", desc: "Hands-on simulation without physical limitations—practice anywhere, repeat anytime." },
    { icon: Eye, title: "Visualization", desc: "Understand complex systems through real-time 3D interaction and spatial exploration." },
  ];
  return (
    <section id="solutions" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-gradient-brand font-medium">Solutions</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold">Use cases across disciplines.</h2>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="relative rounded-3xl p-7 glass gradient-border hover-lift h-full">
                <div className="h-12 w-12 rounded-2xl bg-gradient-brand grid place-items-center mb-5 float">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
                <Zap className="absolute top-6 right-6 h-4 w-4 text-muted-foreground/40" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  const stats = [
    { k: "Multiple", v: "Interactive learning modules in active development" },
    { k: "Expanding", v: "VR-based education use cases across disciplines" },
    { k: "Continuous", v: "Refinement of immersive 3D model experiences" },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-3xl glass gradient-border p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gradient-brand opacity-20 blur-3xl drift" />
          <div className="grid md:grid-cols-3 gap-8 relative">
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div>
                  <div className="text-4xl sm:text-5xl font-display font-semibold text-gradient-brand">{s.k}</div>
                  <div className="mt-3 text-sm text-muted-foreground max-w-xs">{s.v}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Demo() {
  return (
    <section id="demo" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden gradient-border float">
            <img src={hologram} alt="Real-time VR environment" loading="lazy" width={1280} height={960} className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/50 to-transparent" />
            <div className="absolute bottom-6 left-6 glass rounded-2xl px-4 py-3 float-slow">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Live Session</div>
              <div className="text-sm font-medium">Real-time 3D · Interactive</div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-gradient-brand font-medium">Demo</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold">Experience immersive learning in action.</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Request a live demo to explore real-time VR environments and see how interactive 3D models transform the way concepts are taught and understood.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <ul className="mt-8 space-y-3">
              {["Walk through a fully interactive 3D model", "Click components to view names and descriptions", "Live Q&A with the experience team"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gradient-brand pulse-glow" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={250}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground hover-lift">
                Book a Demo <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full glass gradient-border px-6 py-3 text-sm font-medium hover-lift">
                Explore Projects
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="rounded-3xl glass gradient-border p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-hero-glow opacity-70" />
            <div className="text-xs uppercase tracking-[0.25em] text-gradient-brand font-medium">Contact</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold">Step inside the experience.</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Reach out to schedule a session or discuss a custom immersive model for your program.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm">
              {[
                { icon: Mail, label: "hello@ramxr.solutions" },
                { icon: Phone, label: "+1 (555) 010-2049" },
                { icon: MapPin, label: "Global · Remote-first" },
              ].map((c) => (
                <div key={c.label} className="glass rounded-2xl p-4 flex items-center gap-3 justify-center hover-lift">
                  <c.icon className="h-4 w-4 text-primary" />
                  <span>{c.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a href="mailto:hello@ramxr.solutions" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground hover-lift">
                Book a Demo
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-md bg-gradient-brand grid place-items-center text-primary-foreground text-[10px] font-bold">R</span>
          <span>RamXR Solutions</span>
        </div>
        <div>© {new Date().getFullYear()} RamXR Solutions. All rights reserved.</div>
      </div>
    </footer>
  );
}
