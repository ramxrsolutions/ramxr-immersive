import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export type Chip = { title: string; desc: string; icon?: ReactNode };

export function FloatingRow({
  image,
  alt,
  side = "left",
  eyebrow,
  heading,
  body,
  chips,
  children,
}: {
  image: string;
  alt: string;
  side?: "left" | "right";
  eyebrow?: string;
  heading: ReactNode;
  body?: ReactNode;
  chips?: Chip[];
  children?: ReactNode;
}) {
  const imgFirst = side === "left";
  const ImageBlock = (
    <Reveal>
      <div className="relative">
        <div className="relative rounded-[2rem] overflow-hidden gradient-border float-slow shadow-glow">
          <img src={image} alt={alt} loading="lazy" width={1280} height={896} className="w-full h-auto object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/30 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </Reveal>
  );

  const TextBlock = (
    <div>
      {eyebrow && (
        <Reveal>
          <div className="text-xs uppercase tracking-[0.25em] text-gradient-brand font-medium">{eyebrow}</div>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">{heading}</h2>
      </Reveal>
      {body && (
        <Reveal delay={160}>
          <div className="mt-5 text-muted-foreground text-base sm:text-lg space-y-4">{body}</div>
        </Reveal>
      )}
      {chips && (
        <div className="mt-8 space-y-4">
          {chips.map((c, i) => (
            <Reveal key={c.title} delay={200 + i * 90}>
              <div className="glass gradient-border rounded-2xl p-4 sm:p-5 flex gap-4 hover-lift">
                <div className="h-11 w-11 rounded-xl bg-gradient-brand grid place-items-center shrink-0 text-primary-foreground">
                  {c.icon}
                </div>
                <div>
                  <div className="font-medium">{c.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{c.desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      )}
      {children && <div className="mt-8">{children}</div>}
    </div>
  );

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-10 gap-10 lg:gap-14 items-center">
        <div className={`lg:col-span-6 ${imgFirst ? "" : "lg:order-2"}`}>{ImageBlock}</div>
        <div className={`lg:col-span-4 ${imgFirst ? "" : "lg:order-1"}`}>{TextBlock}</div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="relative pt-36 pb-12 sm:pt-44 sm:pb-16 bg-hero-glow">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-gradient-brand opacity-20 blur-3xl drift" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-brand opacity-15 blur-3xl drift" style={{ animationDelay: "-6s" }} />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full glass gradient-border px-4 py-1.5 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand pulse-glow" />
            <span className="text-muted-foreground">{eyebrow}</span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-5 font-display text-4xl sm:text-6xl font-semibold leading-[1.05] max-w-4xl">{title}</h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={160}>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
