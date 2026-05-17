import type { ReactNode } from "react";
import { MessageSquare } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BookCallDialog } from "@/components/BookCallDialog";

export type SolutionStreamItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

export function StreamsSection({
  heading,
  intro,
  streams,
}: {
  heading: string;
  intro: string;
  streams: SolutionStreamItem[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
      <Reveal>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{heading}</h2>
      </Reveal>
      <Reveal delay={80}>
        <p className="text-muted-foreground mt-4 max-w-3xl text-base sm:text-lg leading-relaxed">{intro}</p>
      </Reveal>
      <div className="mt-12 grid md:grid-cols-3 gap-6 lg:gap-8">
        {streams.map((s, i) => (
          <Reveal key={s.title} delay={120 + i * 90}>
            <article className="h-full glass gradient-border rounded-2xl p-6 sm:p-7 hover-lift">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-brand grid place-items-center text-primary-foreground shadow-glow">{s.icon}</div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-lg leading-snug">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.description}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function AIAssistantSection({
  title,
  description,
  quotes,
}: {
  title: string;
  description: string;
  quotes: string[];
}) {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="glass gradient-border rounded-4xl p-8 md:p-12 lg:p-14 relative overflow-hidden hover-lift transition-shadow duration-300">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.5]"
            aria-hidden
            style={{
              backgroundImage: `
                linear-gradient(90deg, color-mix(in oklab, var(--foreground) 6%, transparent) 1px, transparent 1px),
                linear-gradient(color-mix(in oklab, var(--foreground) 6%, transparent) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
              maskImage: "linear-gradient(to bottom, black 40%, transparent)",
            }}
          />
          <div className="relative">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight max-w-3xl">{title}</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-muted-foreground mt-4 max-w-3xl text-base sm:text-lg leading-relaxed">{description}</p>
            </Reveal>

            <div className="mt-10 grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {quotes.map((q, i) => (
                <Reveal key={q} delay={140 + i * 60}>
                  <blockquote className="h-full rounded-xl border border-border/60 bg-background/50 dark:bg-background/30 p-4 sm:p-5 flex gap-3 shadow-sm transition-colors hover:border-primary/35 hover:bg-background/70">
                    <MessageSquare className="h-5 w-5 shrink-0 text-primary mt-0.5 opacity-90" strokeWidth={1.75} />
                    <p className="text-sm sm:text-[15px] text-foreground/90 leading-relaxed">&ldquo;{q}&rdquo;</p>
                  </blockquote>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <BookCallDialog>
                  <button
                    type="button"
                    className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold bg-gradient-brand text-primary-foreground hover:opacity-95 transition-opacity cursor-pointer shadow-glow"
                  >
                    Book A Demo
                  </button>
                </BookCallDialog>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
