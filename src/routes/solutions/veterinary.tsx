import { createFileRoute } from "@tanstack/react-router";
import { Heart, Box, Layers } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingRow, PageHero } from "@/components/FloatingRow";
import vrAnimals from "@/assets/hologram.jpg";
import vrTraining from "@/assets/vr-training.jpg";
import { BookCallDialog } from "@/components/BookCallDialog";

export const Route = createFileRoute("/solutions/veterinary")({
  component: Veterinary,
  head: () => ({
    meta: [
      { title: "Veterinary Virtual Labs — RamXR Solutions" },
      { name: "description", content: "Advanced VR-based veterinary education for anatomy, diagnostics and clinical training." },
    ],
  }),
});

function Veterinary() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <PageHero
        eyebrow="Veterinary"
        title={<>Our Veterinary <span className="text-gradient-brand">Virtual Labs</span></>}
        subtitle="Advanced VR-based veterinary education designed for animal anatomy, diagnostics and clinical training."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <h3 className="text-2xl font-semibold">Veterinary Streams</h3>
        <p className="text-muted-foreground mt-2 max-w-2xl">Animal anatomy, diagnostics and surgical training modules built for veterinary education.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="glass rounded-2xl p-6 hover-lift">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-gradient-brand grid place-items-center text-primary-foreground"><Layers className="h-5 w-5" /></div>
              <div>
                <div className="font-medium">Animal Anatomy</div>
                <div className="text-sm text-muted-foreground mt-1">High-detail 3D models across species for comparative anatomy study.</div>
              </div>
            </div>
            <div className="mt-6">
              <button className="rounded-full px-4 py-2 bg-gradient-brand text-primary-foreground">Download Brochure</button>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 hover-lift">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-gradient-brand grid place-items-center text-primary-foreground"><Box className="h-5 w-5" /></div>
              <div>
                <div className="font-medium">Veterinary Diagnostics</div>
                <div className="text-sm text-muted-foreground mt-1">Practice disease identification and diagnostic workflows in virtual clinics.</div>
              </div>
            </div>
            <div className="mt-6">
              <button className="rounded-full px-4 py-2 bg-gradient-brand text-primary-foreground">Download Brochure</button>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 hover-lift">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-gradient-brand grid place-items-center text-primary-foreground"><Heart className="h-5 w-5" /></div>
              <div>
                <div className="font-medium">Surgical & Clinical Training</div>
                <div className="text-sm text-muted-foreground mt-1">Surgical procedures and emergency care scenarios for veterinary practice.</div>
              </div>
            </div>
            <div className="mt-6">
              <button className="rounded-full px-4 py-2 bg-gradient-brand text-primary-foreground">Download Brochure</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="glass rounded-2xl p-8 md:p-12 hover-lift">
            <h3 className="text-2xl font-semibold">Immersion. The Intelligence in Veterinary Learning</h3>
            <p className="text-muted-foreground mt-3 max-w-2xl">Students interact with virtual animal cases and receive AI-guided feedback to improve diagnosis and treatment planning.</p>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {["Would you like to examine the canine heart structure in 3D again?",
                "Shall I simulate respiratory disease symptoms for comparison?",
                "You performed well in anatomy identification. Ready for a diagnostic challenge?"].map((q) => (
                <div key={q} className="p-4 rounded-xl bg-background/40">“{q}”</div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <BookCallDialog>
                <button className="rounded-full px-4 py-2 bg-gradient-brand text-primary-foreground">Book A Demo</button>
              </BookCallDialog>
            </div>
          </div>
        </div>
      </section>

      <FloatingRow
        side="left"
        image={vrAnimals}
        alt="Veterinary VR"
        eyebrow="Virtual Cases"
        heading={<>Practice animal care with <span className="text-gradient-brand">clarity</span>.</>}
        body={<p>Simulated clinical workflows and case-based learning for veterinary students.</p>}
        chips={[
          { title: "Comparative anatomy", desc: "Study multiple species side-by-side.", icon: <Layers className="h-5 w-5" /> },
          { title: "Procedure practice", desc: "Surgical technique simulations with replay and analysis.", icon: <Heart className="h-5 w-5" /> },
        ]}
      />

      <Footer />
    </div>
  );
}

export default Veterinary;
