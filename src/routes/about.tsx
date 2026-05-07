import { createFileRoute } from "@tanstack/react-router";
import { Compass, Layers, MousePointer2, Workflow } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingRow, PageHero } from "@/components/FloatingRow";
import vrTeam from "@/assets/vr-team.jpg";
import vrBrain from "@/assets/vr-brain.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About RamXR Solutions" },
      { name: "description", content: "RamXR Solutions is focused on transforming education and training through immersive virtual reality experiences." },
      { property: "og:title", content: "About RamXR Solutions" },
      { property: "og:description", content: "Replacing passive learning with interactive exploration through immersive VR." },
      { property: "og:image", content: vrTeam },
    ],
  }),
});

function About() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <PageHero
        eyebrow="About"
        title={<>Redefining learning through <span className="text-gradient-brand">immersion</span>.</>}
        subtitle="Our approach replaces passive learning with interactive exploration. Instead of imagining how systems work, users can step inside them, observe details closely, and interact with every part."
      />
      <FloatingRow
        side="left"
        image={vrTeam}
        alt="Team collaborating around a holographic display"
        eyebrow="Who we are"
        heading={<>A platform built for <span className="text-gradient-brand">deeper understanding</span>.</>}
        body={
          <p>RamXR Solutions is focused on transforming education and training through immersive virtual reality experiences. This creates a more intuitive and engaging way to understand complex subjects one where curiosity leads, and the environment responds.</p>
        }
          // badge={{ label: "Studio", value: "Experience Design" }}
      />
      <FloatingRow
        side="right"
        image={vrBrain}
        alt="Glowing 3D brain model"
        eyebrow="Vision"
        heading={<>Our <span className="text-gradient-brand">vision</span>.</>}
        body={<p>To make learning more intuitive, accessible, and engaging by enabling users to experience knowledge in a fully interactive virtual environment.</p>}
        chips={[
          { title: "Intuitive", desc: "Concepts you can reach out and touch.", icon: <Layers className="h-5 w-5" /> },
          { title: "Accessible", desc: "Hands-on learning without physical limitations.", icon: <Compass className="h-5 w-5" /> },
          { title: "Engaging", desc: "Designed to hold attention and reward exploration.", icon: <Workflow className="h-5 w-5" /> },
        ]}
          // badge={{ label: "Mission", value: "Experience knowledge" }}
      />
      {/* 'How we build experiences' moved to Home; original image removed per task instructions */}
      <Footer />
    </div>
  );
}
