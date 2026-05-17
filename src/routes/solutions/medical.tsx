import React from 'react'
import { Microscope, Stethoscope, Activity, HeartPulse, Brain } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingRow, PageHero } from "@/components/FloatingRow";
import { StreamsSection, AIAssistantSection } from "@/components/SolutionLabSections";
import phar1 from "@/assets/phar1.jpg";
import phar2 from "@/assets/phar2.jpeg";
import phar3 from "@/assets/phar3.jpg";

const MEDICAL_AI_QUOTES = [
  "Would you like me to show blood flow through the heart again from another angle?",
  "You've mastered muscle groups. Shall we test skeletal landmarks next?",
  "Do you want to simulate this drug interaction in a patient case?",
  "You need more practice in suturing. Shall I restart the simulation?",
  "Would you like to compare healthy vs pathological tissue samples in VR?",
];

export default function Medical() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <PageHero
        eyebrow="Medical"
        title={
          <>
            Our Medical <span className="text-gradient-brand">Virtual Labs</span>
          </>
        }
        subtitle="Immersive medical education powered by advanced VR simulations and AI-assisted clinical learning."
        description={
          <p>
            Our Medical VR labs cover Pre-Clinical, Para-Clinical and Clinical streams, helping students practice anatomy, pathology and real-world
            procedures in safe virtual environments using interactive 3D simulations.
          </p>
        }
      />

      <StreamsSection
        heading="Medical Streams"
        intro="Progressive fidelity—from foundational morphology to ward-ready judgement—so learners grow spatial skill and clinical reasoning together."
        streams={[
          {
            title: "Pre-Clinical",
            description:
              "Build strong foundations in Anatomy, Physiology and Biochemistry through immersive 3D visualization and interactive learning modules.",
            icon: <Brain className="h-5 w-5" />,
          },
          {
            title: "Para-Clinical",
            description:
              "Practice Pathology, Pharmacology, Microbiology and Forensic Medicine through virtual diagnostic workflows and medical simulations.",
            icon: <Microscope className="h-5 w-5" />,
          },
          {
            title: "Clinical",
            description:
              "Gain practical exposure to Medicine, Surgery, Pediatrics and OBG through realistic VR simulations that improve confidence and patient-care readiness.",
            icon: <Stethoscope className="h-5 w-5" />,
          },
        ]}
      />

      <AIAssistantSection
        title="Immersion. The Intelligence in Medical Learning"
        description="Students interact directly with anatomy models and clinical simulations while receiving real-time AI guidance, adaptive learning support and performance feedback."
        quotes={MEDICAL_AI_QUOTES}
      />

      <FloatingRow
        side="right"
        image={phar1}
        alt="Medical holographic anatomy visualization"
        eyebrow="Spatial medicine"
        heading={
          <>
            See structure. Trace <span className="text-gradient-brand">function.</span>
          </>
        }
        body={
          <p>
            Layer vasculature, innervation and organ relationships in true depth. RamXR keeps landmark navigation intuitive so learners spend mental
            energy on diagnosis—not wrestling the UI.
          </p>
        }
        chips={[
          {
            title: "High-fidelity anatomy",
            desc: "Models tuned for teaching clarity with inspectable regions and guided tours.",
            icon: <HeartPulse className="h-5 w-5" />,
          },
          {
            title: "Scenario branching",
            desc: "Patient narratives evolve with learner choices to rehearse clinical judgement safely.",
            icon: <Activity className="h-5 w-5" />,
          },
        ]}
      />

      <FloatingRow
        side="left"
        image={phar2}
        alt="Clinical skills training in VR"
        eyebrow="Hands & habits"
        heading={
          <>
            Rehearse procedures with <span className="text-gradient-brand">presence</span>.
          </>
        }
        body={
          <p>
            Instrument handling, communication cues and time-critical sequences become embodied practice. Faculty get structured observability into
            repetition quality—not just completion ticks.
          </p>
        }
        chips={[
          {
            title: "Skills telemetry",
            desc: "Surface hesitation points and automate targeted remediation drills.",
            icon: <Stethoscope className="h-5 w-5" />,
          },
          {
            title: "Team-ready debriefs",
            desc: "Export-friendly summaries align cohort discussions after each VR session.",
            icon: <Microscope className="h-5 w-5" />,
          },
        ]}
      />

      <FloatingRow
        side="right"
        image={phar3}
        alt="Medical students in collaborative VR review"
        eyebrow="Programs that adopt faster"
        heading={
          <>
            Designed around your <span className="text-gradient-brand">academic calendar</span>.
          </>
        }
        body={
          <p>
            Modular packs slot beside didactics and bedside rotations. Light-dark parity keeps readability during marathon study blocks—whether you
            prefer luminous studios or focused night modes.
          </p>
        }
        chips={[
          {
            title: "Faculty dashboards",
            desc: "Snapshot cohort progress without micromanaging each headset minute-by-minute.",
            icon: <Brain className="h-5 w-5" />,
          },
          {
            title: "Ethical boundaries",
            desc: "Sensitive imagery handled with discrete prompts and trauma-informed pacing cues.",
            icon: <HeartPulse className="h-5 w-5" />,
          },
        ]}
      />

      <Footer />
    </div>
  );
}
