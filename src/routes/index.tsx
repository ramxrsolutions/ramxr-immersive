import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Play, Sparkles, Box, Layers, Eye, GraduationCap, MessageSquare, MousePointer2, Workflow, Compass, Move3D } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { FloatingRow } from "@/components/FloatingRow";
import heroImg from "@/assets/ramxr-hero.png";
import hologram from "@/assets/hologram.jpg";
import vrHeadset from "@/assets/Ima.jpg";
import vrClassroom from "@/assets/vr-classroom.jpg";
import vrEngineer from "@/assets/vr-engineer.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "RamXR Solutions Step Inside Learning with Virtual Reality" },
      { name: "description", content: "RamXR Solutions transforms how knowledge is experienced through fully interactive 3D VR environments." },
      { property: "og:title", content: "RamXR Solutions Immersive VR Learning" },
      { property: "og:description", content: "Explore complex systems through fully interactive 3D environments where every component can be seen, understood, and experienced in real time." },
    ],
  }),
});

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <Marquee />
      <FloatingRow
        side="left"
        image={vrClassroom}
        alt="Immersive VR learning"
        eyebrow="Intro"
        heading={<>Learning <span className="text-gradient-brand">beyond screens</span>.</>}
        body={
          <p>Traditional learning limits understanding to text and static visuals. RamXR Solutions introduces an interactive approach where users can step inside virtual environments, explore objects from every angle, and understand how systems truly work. By combining virtual reality with structured educational design, we enable deeper comprehension and long-term retention.</p>
        }
        chips={[
          { title: "Interactive Learning", desc: "Move beyond passive reading. Manipulate models, isolate parts, and learn by doing.", icon: <Box className="h-5 w-5" /> },
          { title: "Real-time Exploration", desc: "Navigate inside detailed 3D environments with instant response and depth.", icon: <Layers className="h-5 w-5" /> },
          { title: "Practical Visualization", desc: "Make abstract concepts tangible through guided immersive experiences.", icon: <Eye className="h-5 w-5" /> },
        ]}
          // badge={{ label: "Module", value: "Anatomy · Layer 03" }}
      />
      <FloatingRow
        side="right"
        image={vrEngineer}
        alt="VR engineer interacting with 3D model"
        eyebrow="Experience"
        heading={<>Explore. Interact. <span className="text-gradient-brand">Understand.</span></>}
        body={<p>Our VR environments simulate real-world systems with high accuracy and interactivity. Users are not just observers they become active participants.</p>}
        chips={[
          { title: "Move inside virtual models", desc: "Walk around and look from any angle as if it were physically in front of you.", icon: <GraduationCap className="h-5 w-5" /> },
          { title: "Interact with components", desc: "Pick up, rotate, and isolate individual parts to study them closely.", icon: <Box className="h-5 w-5" /> },
          { title: "Learn by doing", desc: "Real-time descriptions and explanations appear as you explore.", icon: <Eye className="h-5 w-5" /> },
        ]}
          // badge={{ label: "Latency", value: "12 ms · Real-time" }}
      />

      <div style={{ maxWidth: "70%", margin: "0 auto" }}>
        <FloatingRow
          side="left"
          image={hologram}
          alt="Holographic UI"
          eyebrow="Approach"
          heading={<>How we <span className="text-gradient-brand">build experiences</span>.</>}
          body={<p>Every VR module is designed with clarity and interaction in mind. The goal is simple make complex concepts easy to explore.</p>}
          chips={[
            { title: "Structured 3D modeling", desc: "Accurate geometry and clean topology, ready for interaction.", icon: <Layers className="h-5 w-5" /> },
            { title: "3DOF and 6DOF Techniques", desc: "Supports both 3 Degrees of Freedom and 6 Degrees of Freedom interactions for immersive and realistic VR experiences.", icon: <Move3D className="h-5 w-5" /> },
            { title: "Component-level interaction", desc: "Every meaningful part can be selected and studied.", icon: <MousePointer2 className="h-5 w-5" /> },
            { title: "Real-time information", desc: "Context appears in the moment it's needed.", icon: <Workflow className="h-5 w-5" /> },
            { title: "Smooth navigation", desc: "Move through environments without friction.", icon: <Compass className="h-5 w-5" /> },
          ]}
        />
      </div>

      <FloatingRow
        side="right"
        image={vrHeadset}
        alt="Layered understanding of complex systems"
        eyebrow="Layered Understanding"
        heading={<>Layered Understanding</>}
        body={
          <p>Complex systems aren’t meant to be understood all at once. We break models into layers so users can progressively reveal complexity from basic structure to deep technical details. • Toggle between beginner and advanced views • Hide or isolate subsystems instantly • Understand relationships between components clearly</p>
        }
        chips={[
          { title: "Toggle views", desc: "Switch between beginner and advanced perspectives", icon: <Box className="h-5 w-5" /> },
          { title: "Isolate subsystems", desc: "Hide or isolate subsystems instantly", icon: <Layers className="h-5 w-5" /> },
        ]}
      />
      <Metrics />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-hero-glow">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-gradient-brand opacity-25 blur-3xl drift" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-gradient-brand opacity-20 blur-3xl drift" style={{ animationDelay: "-6s" }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full glass gradient-border px-4 py-1.5 text-xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="text-muted-foreground">Immersive VR Learning Platform</span>
          </div>
        </Reveal>

        <div className="mt-6 grid lg:grid-cols-10 gap-10 items-center">
          <div className="lg:col-span-4 lg:order-2">
            <Reveal delay={80}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]">
                Step Inside <span className="text-gradient-brand">Learning</span> with Virtual Reality
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 text-lg text-muted-foreground">
                RamXR Solutions transforms how knowledge is experienced. Explore complex systems through fully interactive 3D environments where every component can be seen, understood, and experienced in real time.
              </p>
            </Reveal>
            
          </div>

          <div className="lg:col-span-6 lg:order-1 relative">
            <Reveal delay={200}>
              <div className="relative rounded-[2rem] overflow-hidden gradient-border shadow-glow float-slow">
                <img src={heroImg} alt="RamXR VR headset and controllers" className="w-full h-auto" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const tags = ["Immersive 3D Learning", "Real-Time Interaction", "Explore Every Detail", "Built for Education & Training"];
  return (
    <div className="border-y border-border/60 py-6 overflow-hidden bg-card/30">
      <div className="flex gap-12 whitespace-nowrap marquee-track">
        {[...tags, ...tags, ...tags].map((t, i) => (
          <span key={i} className="text-sm text-muted-foreground tracking-widest uppercase">{t}</span>
        ))}
      </div>
    </div>
  );
}

function Metrics() {
  const stats = [
    { k: "Expanding", v: "Immersive learning modules across new domains" },
    { k: "Continuous", v: "Development of interactive 3D models" },
    { k: "Real-world", v: "Focused on practical, applied understanding" },
  ];
  return (
    <section className="py-20 ramxr-gradient-theme ramxr-metrics-theme">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl mb-10">
            <div className="text-xs uppercase tracking-[0.25em] text-gradient-brand font-medium">Growth</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">Growing through innovation.</h2>
          </div>
        </Reveal>
        <div className="rounded-3xl glass gradient-border ramxr-metrics-shell p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gradient-brand opacity-18 blur-3xl drift" />
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
