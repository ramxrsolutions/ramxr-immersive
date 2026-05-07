import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Wrench, Eye, Layers, MousePointer2, Box } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingRow, PageHero } from "@/components/FloatingRow";
import vrClassroom from "@/assets/vr-classroom.jpg";
import vrTraining from "@/assets/vr-training.jpg";
import vrEngineer from "@/assets/vr-engineer.jpg";

export const Route = createFileRoute("/solutions/")({
  component: SolutionsIndex,
  head: () => ({
    meta: [
      { title: "Solutions RamXR Solutions" },
      { name: "description", content: "Applications of immersive VR across education, training, and visualization." },
      { property: "og:title", content: "Solutions Immersive VR for Education & Training" },
      {
        property: "og:description",
        content: "Virtual reality systems designed to enhance understanding, improve training, and simplify visualization.",
      },
      { property: "og:image", content: vrClassroom },
    ],
  }),
});

function SolutionsIndex() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            Applications of <span className="text-gradient-brand">immersive VR</span>.
          </>
        }
        subtitle="RamXR Solutions provides virtual reality systems designed to enhance understanding, improve training, and simplify visualization."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-4">
        <div className="glass gradient-border rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-muted-foreground max-w-xl">
            Explore discipline-specific virtual labs—each with its own curriculum streams, AI coaching and VR scenarios.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link
              to="/solutions/engineering"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-gradient-brand text-primary-foreground hover-lift"
            >
              Engineering <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/solutions/medical"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border border-border bg-background/60 hover:bg-muted transition-colors"
            >
              Medical <ArrowRight className="h-4 w-4 opacity-70" />
            </Link>
            <Link
              to="/solutions/veterinary"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border border-border bg-background/60 hover:bg-muted transition-colors"
            >
              Veterinary <ArrowRight className="h-4 w-4 opacity-70" />
            </Link>
          </div>
        </div>
      </section>

      <FloatingRow
        side="left"
        image={vrClassroom}
        alt="VR education"
        eyebrow="Education"
        heading={
          <>
            Theory becomes <span className="text-gradient-brand">experience</span>.
          </>
        }
        body={
          <p>
            Transform theoretical learning into interactive experiences. Students can explore subjects visually and interactively, making it easier to
            understand concepts that are otherwise difficult to visualize.
          </p>
        }
        chips={[
          {
            title: "Concept-first design",
            desc: "Each module is shaped around what students actually struggle to picture.",
            icon: <GraduationCap className="h-5 w-5" />,
          },
          {
            title: "Hands-on exploration",
            desc: "Learners can examine, rotate, and disassemble virtual models freely.",
            icon: <MousePointer2 className="h-5 w-5" />,
          },
          {
            title: "Visual clarity",
            desc: "Spatial layouts make abstract relationships obvious.",
            icon: <Eye className="h-5 w-5" />,
          },
        ]}
      />
      <FloatingRow
        side="right"
        image={vrTraining}
        alt="VR training simulation"
        eyebrow="Training"
        heading={
          <>
            Practice without <span className="text-gradient-brand">limits</span>.
          </>
        }
        body={
          <p>
            Enable hands-on learning without physical limitations. Virtual simulations allow users to practice, explore, and understand systems in a
            controlled environment.
          </p>
        }
        chips={[
          {
            title: "Safe to repeat",
            desc: "Try, fail, and refine without consequence or cost.",
            icon: <Wrench className="h-5 w-5" />,
          },
          {
            title: "Realistic systems",
            desc: "Behaviour mirrors what trainees will encounter in the field.",
            icon: <Layers className="h-5 w-5" />,
          },
          {
            title: "Measurable progress",
            desc: "Built so instructors can observe and guide.",
            icon: <Box className="h-5 w-5" />,
          },
        ]}
      />
      <FloatingRow
        side="left"
        image={vrEngineer}
        alt="Visualization"
        eyebrow="Visualization"
        heading={
          <>
            Complexity, made <span className="text-gradient-brand">approachable</span>.
          </>
        }
        body={
          <p>
            Simplify complex systems through 3D representation. Users can break down complicated structures into understandable components and explore
            them in detail.
          </p>
        }
        chips={[
          {
            title: "Layered breakdowns",
            desc: "Peel away outer parts to reveal what's underneath.",
            icon: <Layers className="h-5 w-5" />,
          },
          {
            title: "Interactive context",
            desc: "Information surfaces exactly where the eye is already focused.",
            icon: <MousePointer2 className="h-5 w-5" />,
          },
          {
            title: "Spatial understanding",
            desc: "Build a mental model that text and diagrams can't deliver.",
            icon: <Eye className="h-5 w-5" />,
          },
        ]}
      />
      <Footer />
    </div>
  );
}
