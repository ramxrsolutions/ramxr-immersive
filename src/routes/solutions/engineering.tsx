import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Zap, Wrench, Layers, Box } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingRow, PageHero } from "@/components/FloatingRow";
import { StreamsSection, AIAssistantSection } from "@/components/SolutionLabSections";
import vrEngineer from "@/assets/vr-engineer.jpg";
import vrTraining from "@/assets/vr-training.jpg";
import vrClassroom from "@/assets/vr-classroom.jpg";

export const Route = createFileRoute("/solutions/engineering")({
  component: Engineering,
  head: () => ({
    meta: [
      { title: "Engineering Virtual Labs — RamXR Solutions" },
      {
        name: "description",
        content:
          "VR-powered engineering labs for mechanical, electrical, and civil streams—with AI-guided simulations aligned to syllabus and industry.",
      },
    ],
  }),
});

const ENGINEERING_AI_QUOTES = [
  "Do you understand why the current dropped when resistance doubled? Want me to simulate it again with a different value?",
  "Shall we explore how fluid flow changes if we alter Reynolds number in real-time?",
  "Based on your previous test, you need more practice in stress–strain analysis. Shall I launch a tensile experiment?",
  "Want to see how a synchronous motor behaves under varying load conditions?",
  "You've completed Ohm's Law. Would you like to progress to Kirchhoff's Laws?",
  "Shall I show how heat transfer changes when surface area doubles?",
];

function Engineering() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <PageHero
        eyebrow="Engineering"
        title={
          <>
            Our Engineering <span className="text-gradient-brand">Virtual Labs</span>
          </>
        }
        subtitle="Immersive VR-powered engineering education designed for practical understanding, experimentation and real-world problem solving."
        description={
          <p>
            Our Engineering VR curriculum spans Mechanical, Electrical and Civil modules, combining interactive 3D models, AI-assisted learning and
            real-time simulations. Students gain hands-on exposure in safe, repeatable environments fully aligned with academic syllabi and industry
            standards.
          </p>
        }
      />

      <StreamsSection
        heading="Engineering Streams"
        intro="Structured pathways from fundamentals to applied labs—so learners build intuition before they ever touch physical hardware."
        streams={[
          {
            title: "Electrical Engineering",
            description:
              "Get hands-on with circuit design, power systems and electronics through AI-powered Virtual Reality labs. Students safely experiment with simulations and build strong foundations in real-world electrical applications.",
            icon: <Zap className="h-5 w-5" />,
          },
          {
            title: "Mechanical Engineering",
            description:
              "Explore thermodynamics, fluid mechanics and machine design using immersive VR simulations. Students visualize complex systems, test variables and gain practical insights beyond textbooks.",
            icon: <Wrench className="h-5 w-5" />,
          },
          {
            title: "Civil Engineering",
            description:
              "From structural analysis to material testing, students experience construction and design environments inside VR. Simulate failures, analyze structures and practice safely in real-world scenarios.",
            icon: <Layers className="h-5 w-5" />,
          },
        ]}
      />

      <AIAssistantSection
        title="Immersion. The Intelligence in Learning"
        description="Our AI-powered assistant transforms every simulation into an interactive learning experience. Students explore concepts through guided conversations, adaptive feedback and real-time experimentation inside VR environments."
        quotes={ENGINEERING_AI_QUOTES}
      />

      <FloatingRow
        side="left"
        image={vrEngineer}
        alt="Engineering student using VR lab equipment"
        eyebrow="Built for depth"
        heading={
          <>
            Simulate. Measure. <span className="text-gradient-brand">Iterate.</span>
          </>
        }
        body={
          <p>
            RamXR engineering labs pair spatial clarity with instrument-grade interactions—so voltage, load, flow and stress behave the way students
            expect, while mentors retain visibility into pacing and mastery.
          </p>
        }
        chips={[
          {
            title: "Syllabus-aligned scenarios",
            desc: "Modules mirror classroom progression so faculty can slot VR labs right into the term plan.",
            icon: <GraduationCap className="h-5 w-5" />,
          },
          {
            title: "Measurable experiments",
            desc: "Capture outcomes and replay runs to reinforce cause-and-effect without repeating lab setup.",
            icon: <Box className="h-5 w-5" />,
          },
          {
            title: "Collaborative reviews",
            desc: "Walk the same virtual workspace together—ideal for tutorials, design reviews and remediation.",
            icon: <Layers className="h-5 w-5" />,
          },
        ]}
      />

      <FloatingRow
        side="right"
        image={vrTraining}
        alt="VR simulation of industrial systems"
        eyebrow="From lecture to lab"
        heading={
          <>
            Confidence that <span className="text-gradient-brand">scales</span>.
          </>
        }
        body={
          <p>
            Whether you are onboarding apprentices or levelling up senior cohorts, immersive rehearsal builds muscle memory for procedures that are
            costly or risky to repeat in the physical world.
          </p>
        }
        chips={[
          {
            title: "Repeatable trials",
            desc: "Let learners explore edge cases and failures with zero downtime between attempts.",
            icon: <Wrench className="h-5 w-5" />,
          },
          {
            title: "Industry metaphors",
            desc: "Contextual environments mirror workshop and site realities so skills transfer faster.",
            icon: <Zap className="h-5 w-5" />,
          },
        ]}
      />

      <FloatingRow
        side="left"
        image={vrClassroom}
        alt="Collaborative VR classroom"
        eyebrow="Why RamXR"
        heading={
          <>
            VR that feels <span className="text-gradient-brand">purpose-built</span>.
          </>
        }
        body={
          <p>
            Our scenes emphasize readability—clean instrumentation, deliberate pacing and cinematic lighting—so cognitive load stays on the physics,
            not the interface.
          </p>
        }
        chips={[
          {
            title: "Comfort-first sessions",
            desc: "Chunked experiences with natural breakpoints keep headsets fresh across long lab days.",
            icon: <Box className="h-5 w-5" />,
          },
          {
            title: "Future-ready stack",
            desc: "Ready for headset labs today and blended deployments tomorrow.",
            icon: <Layers className="h-5 w-5" />,
          },
        ]}
      />

      <Footer />
    </div>
  );
}
