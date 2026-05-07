import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Play, MessageSquare, MousePointer2, Layers } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingRow, PageHero } from "@/components/FloatingRow";
import hologram from "@/assets/hologram.jpg";
import vrExperience from "@/assets/vr-experience.jpg";
import { BookCallDialog } from "@/components/BookCallDialog";

export const Route = createFileRoute("/demo")({
  component: Demo,
  head: () => ({
    meta: [
      { title: "Demo RamXR Solutions" },
      { name: "description", content: "Experience immersive learning in real time. Request a guided walkthrough of our VR systems." },
      { property: "og:title", content: "Experience It Yourself RamXR Demo" },
      { property: "og:description", content: "See how interaction and visualization can transform learning experiences." },
      { property: "og:image", content: hologram },
    ],
  }),
});

function Demo() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <PageHero
        eyebrow="Demo"
        title={<>Experience it <span className="text-gradient-brand">yourself</span>.</>}
        subtitle="See how immersive learning works in real time. Explore our VR environments and understand how interaction and visualization can transform learning experiences."
      />
      <FloatingRow
        side="left"
        image={hologram}
        alt="Live VR session"
        eyebrow="Walkthrough"
        heading={<>A guided tour of <span className="text-gradient-brand">interactive VR</span>.</>}
        body={<p>Get access to a guided walkthrough of our interactive VR systems and explore how they can be applied to your needs.</p>}
        chips={[
          { title: "Walk through a 3D model", desc: "Move through a fully interactive environment at your own pace.", icon: <MousePointer2 className="h-5 w-5" /> },
          { title: "Click to learn", desc: "Tap any component to surface its name and description in real time.", icon: <Layers className="h-5 w-5" /> },
          { title: "Live Q&A", desc: "Speak with the experience team during the session.", icon: <MessageSquare className="h-5 w-5" /> },
        ]}
          // badge={{ label: "Live Session", value: "Real-time 3D" }}
      >
        <BookCallDialog>
          <button className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground hover-lift cursor-pointer">
            Book a Demo <ArrowRight className="h-4 w-4" />
          </button>
        </BookCallDialog>
      </FloatingRow>

      <FloatingRow
        side="right"
        image={vrExperience}
        alt="Immersive VR environment"
        eyebrow="Request"
        heading={<>Request a <span className="text-gradient-brand">demo</span>.</>}
        body={<p>Tell us a little about what you’d like to explore a curriculum, a training program, or a custom system and we’ll prepare a session tailored to it.</p>}
        chips={[
          { title: "Tailored to your domain", desc: "We adapt the walkthrough to match the systems you care about.", icon: <Play className="h-5 w-5" /> },
          { title: "Built for decision-makers", desc: "Designed so non-technical stakeholders can follow along easily.", icon: <MessageSquare className="h-5 w-5" /> },
        ]}
      >
        <BookCallDialog>
          <button className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground hover-lift cursor-pointer">
            Book a Demo <ArrowRight className="h-4 w-4" />
          </button>
        </BookCallDialog>
      </FloatingRow>
      <Footer />
    </div>
  );
}
