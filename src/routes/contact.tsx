import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/FloatingRow";
import vrGear from "@/assets/vr-gear.jpg";
import { BookCallDialog } from "@/components/BookCallDialog";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — RamXR Solutions" },
      { name: "description", content: "Reach out to learn more about our immersive VR learning solutions, request a demo, or discuss collaborations." },
      { property: "og:title", content: "Get in Touch — RamXR Solutions" },
      { property: "og:description", content: "Interested in immersive learning solutions? Reach out to RamXR Solutions." },
      { property: "og:image", content: vrGear },
    ],
  }),
});

function Contact() {
  const items = [
    { icon: Mail, label: "Email", value: "contact@ramxrsolutions.com" },
    { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX" },
    { icon: MapPin, label: "Location", value: "India" },
  ];
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <PageHero
        eyebrow="Contact"
        title={<>Get in <span className="text-gradient-brand">touch</span>.</>}
        subtitle="Interested in immersive learning solutions or want to explore our projects? Reach out to learn more, request a demo, or discuss potential collaborations."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-10 gap-10 lg:gap-14 items-center">
          <Reveal className="lg:col-span-6">
            <div className="relative rounded-[2rem] overflow-hidden gradient-border float-slow shadow-glow">
              <img src={vrGear} alt="VR gear" loading="lazy" width={1280} height={896} className="w-full h-auto object-cover" />
            </div>
          </Reveal>

          <div className="lg:col-span-4 space-y-4">
            {items.map((c, i) => (
              <Reveal key={c.label} delay={i * 100}>
                <div className="glass gradient-border rounded-2xl p-5 flex items-center gap-4 hover-lift">
                  <div className="h-11 w-11 rounded-xl bg-gradient-brand grid place-items-center shrink-0 text-primary-foreground">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                    <div className="text-sm font-medium mt-0.5">{c.value}</div>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={400}>
              <BookCallDialog>
                <button
                  className="mt-2 inline-flex items-center justify-center w-full gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground hover-lift cursor-pointer"
                >
                  Start a Conversation
                </button>
              </BookCallDialog>
            </Reveal>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
