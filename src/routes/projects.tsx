import { createFileRoute, Link } from "@tanstack/react-router";
import { Box, Layers, MousePointer2, Workflow, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingRow, PageHero } from "@/components/FloatingRow";
import dogAnatomy from "@/assets/dog-anatomy.jpg";
import submarine from "@/assets/submarine.jpg";

export const Route = createFileRoute("/projects")({
  component: Projects,
  head: () => ({
    meta: [
      { title: "Projects RamXR Solutions" },
      { name: "description", content: "Interactive VR models including a Dog Anatomy learning model and a fully navigable Submarine engineering model." },
      { property: "og:title", content: "Interactive VR Models RamXR Projects" },
      { property: "og:description", content: "Explore how virtual environments simplify complex learning through interaction and visualization." },
      { property: "og:image", content: dogAnatomy },
    ],
  }),
});

function Projects() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <PageHero
        eyebrow="Projects"
        title={<>Interactive <span className="text-gradient-brand">VR models</span>.</>}
        subtitle="Our projects demonstrate how virtual environments can simplify complex learning through interaction and visualization."
      />
      <FloatingRow
        side="left"
        image={dogAnatomy}
        alt="Dog Anatomy VR Model"
        eyebrow="Project 01"
        heading={<>Dog Anatomy <span className="text-gradient-brand">VR learning model</span>.</>}
        body={
          <>
            <p>An interactive virtual model designed for veterinary education.</p>
            <p>Users can explore the anatomical structure of a dog in a fully immersive environment. Each part is clearly labeled and explained, helping learners understand internal and external systems with precision.</p>
          </>
        }
        chips={[
          { title: "Full 3D anatomical visualization", desc: "Examine structures from every angle in a true-to-scale environment.", icon: <Box className="h-5 w-5" /> },
          { title: "Interactive part selection", desc: "Tap or grab any organ or system to isolate and study it.", icon: <MousePointer2 className="h-5 w-5" /> },
          { title: "Real-time descriptions", desc: "Contextual information appears the moment a part is selected.", icon: <Layers className="h-5 w-5" /> },
          { title: "Structured learning", desc: "Guided flow through systems for steady, lasting understanding.", icon: <Workflow className="h-5 w-5" /> },
        ]}
          // badge={{ label: "Domain", value: "Veterinary · Anatomy" }}
      >
        <Link to="/demo" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground hover-lift">
          View in Action <ArrowRight className="h-4 w-4" />
        </Link>
      </FloatingRow>

      <FloatingRow
        side="right"
        image={submarine}
        alt="Submarine Interactive Model"
        eyebrow="Project 02"
        heading={<>Submarine <span className="text-gradient-brand">interactive engineering model</span>.</>}
        body={
          <>
            <p>A fully navigable virtual submarine designed to demonstrate engineering concepts in an interactive way.</p>
            <p>Users can move through different sections, interact with components, and understand how each system functions in real-world scenarios.</p>
          </>
        }
        chips={[
          { title: "Internal navigation system", desc: "Walk through compartments and inspect them at human scale.", icon: <Workflow className="h-5 w-5" /> },
          { title: "Component-level interaction", desc: "Engage with mechanisms to see how they actually work.", icon: <MousePointer2 className="h-5 w-5" /> },
          { title: "Functional understanding", desc: "Watch systems respond and connect in real time.", icon: <Layers className="h-5 w-5" /> },
          { title: "Immersive exploration", desc: "Free movement through every section of the vessel.", icon: <Box className="h-5 w-5" /> },
        ]}
          // badge={{ label: "Domain", value: "Engineering · Training" }}
      >
        <Link to="/demo" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground hover-lift">
          View in Action <ArrowRight className="h-4 w-4" />
        </Link>
      </FloatingRow>
      <Footer />
    </div>
  );
}
