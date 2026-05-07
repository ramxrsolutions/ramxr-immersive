import { createFileRoute } from "@tanstack/react-router";
import { Bone, ScanSearch, Syringe, PawPrint, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingRow, PageHero } from "@/components/FloatingRow";
import { StreamsSection, AIAssistantSection } from "@/components/SolutionLabSections";
import vrClassroom from "@/assets/vr-classroom.jpg";
import vrTraining from "@/assets/vr-training.jpg";
import vrEngineer from "@/assets/vr-engineer.jpg";

export const Route = createFileRoute("/solutions/veterinary")({
  component: Veterinary,
  head: () => ({
    meta: [
      { title: "Veterinary Virtual Labs — RamXR Solutions" },
      {
        name: "description",
        content:
          "Veterinary VR education for comparative anatomy, diagnostics and surgical rehearsal—with adaptive AI coaching.",
      },
    ],
  }),
});

const VETERINARY_AI_QUOTES = [
  "Would you like to examine the canine heart structure in 3D again?",
  "Shall I simulate respiratory disease symptoms for comparison?",
  "You performed well in anatomy identification. Ready for a diagnostic challenge?",
  "Would you like to repeat the surgical stitching procedure?",
  "Want to compare healthy and infected tissue samples in VR?",
];

function Veterinary() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <PageHero
        eyebrow="Veterinary"
        title={
          <>
            Our Veterinary <span className="text-gradient-brand">Virtual Labs</span>
          </>
        }
        subtitle="Advanced VR-based veterinary education designed for animal anatomy, diagnostics and clinical training."
        description={
          <p>
            Our Veterinary VR labs help students explore animal anatomy, pathology and treatment procedures through interactive 3D simulations and
            AI-guided practical learning tailored for multispecies curricula.
          </p>
        }
      />

      <StreamsSection
        heading="Veterinary Streams"
        intro="From comparative morphology to crisis drills—give trainees repetition they cannot always access in live animal rotations."
        streams={[
          {
            title: "Animal Anatomy",
            description:
              "Study skeletal systems, muscular structures and internal organs of multiple animal species using highly detailed immersive 3D models.",
            icon: <Bone className="h-5 w-5" />,
          },
          {
            title: "Veterinary Diagnostics",
            description:
              "Practice disease identification, pathology analysis and diagnostic procedures in realistic virtual clinical environments.",
            icon: <ScanSearch className="h-5 w-5" />,
          },
          {
            title: "Surgical & Clinical Training",
            description:
              "Experience virtual veterinary procedures, surgical simulations and emergency care scenarios designed for safe skill development.",
            icon: <Syringe className="h-5 w-5" />,
          },
        ]}
      />

      <AIAssistantSection
        title="Immersion. The Intelligence in Veterinary Learning"
        description="Students interact with virtual animal cases and receive adaptive AI guidance, helping them understand diagnosis, treatment and clinical procedures more effectively."
        quotes={VETERINARY_AI_QUOTES}
      />

      <FloatingRow
        side="left"
        image={vrClassroom}
        alt="Veterinary students reviewing anatomy in VR"
        eyebrow="Comparative mastery"
        heading={
          <>
            Species-aware learning, <span className="text-gradient-brand">single headset</span>.
          </>
        }
        body={
          <p>
            Toggle specimen scale, fur-less muscular views and radiographic overlays to connect lecture diagrams with living biomechanics—without
            losing classroom momentum.
          </p>
        }
        chips={[
          {
            title: "Multispecies libraries",
            desc: "Curated assets spanning companion and production animals with consistent interaction grammar.",
            icon: <PawPrint className="h-5 w-5" />,
          },
          {
            title: "Ethical rehearsal",
            desc: "Practice invasive sequences digitally before operating room or field placements.",
            icon: <Sparkles className="h-5 w-5" />,
          },
        ]}
      />

      <FloatingRow
        side="right"
        image={vrTraining}
        alt="Veterinary diagnostics simulation"
        eyebrow="Clinical judgement"
        heading={
          <>
            Train recognition under <span className="text-gradient-brand">pressure</span>.
          </>
        }
        body={
          <p>
            Diagnostic arcs blend history-taking prompts with imaging and lab correlations—mirroring how veterinarians actually synthesize evidence
            when owners are waiting bedside.
          </p>
        }
        chips={[
          {
            title: "Signal-rich cases",
            desc: "Layer audio, gait and vitals cues so learners weigh multimodal data.",
            icon: <ScanSearch className="h-5 w-5" />,
          },
          {
            title: "Coachable moments",
            desc: "AI surfaces alternate hypotheses when learners anchor too early on a single diagnosis.",
            icon: <Bone className="h-5 w-5" />,
          },
        ]}
      />

      <FloatingRow
        side="left"
        image={vrEngineer}
        alt="Technical veterinary VR simulation environment"
        eyebrow="Operational fit"
        heading={
          <>
            Deploy where your cohort <span className="text-gradient-brand">actually trains</span>.
          </>
        }
        body={
          <p>
            Lightweight session packaging keeps broadband variance manageable for satellite campuses. Dark-mode polish preserves contrast when reviewing
            hematology slides at night.
          </p>
        }
        chips={[
          {
            title: "Faculty presets",
            desc: "Lock difficulty, timers or bilingual overlays per cohort with a few clicks.",
            icon: <Syringe className="h-5 w-5" />,
          },
          {
            title: "Continuity with wet labs",
            desc: "Bridge VR rehearsal to cadaver or clinical rounds with shared learning objectives.",
            icon: <PawPrint className="h-5 w-5" />,
          },
        ]}
      />

      <Footer />
    </div>
  );
}
