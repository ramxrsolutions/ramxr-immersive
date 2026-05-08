import { Link } from "@tanstack/react-router";

const links = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Solutions", to: "/solutions" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-12 ramxr-gradient-theme ramxr-footer-theme">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2">
            {/*
            <span className="h-8 w-8 rounded-lg bg-gradient-brand ramxr-footer-logo grid place-items-center text-primary-foreground font-bold">R</span>
            */}
            <span className="font-display text-lg sm:text-xl font-semibold tracking-tight">RamXR <span className="text-gradient-brand">Solutions</span></span>
          </div>
          <p className="mt-4 text-base sm:text-[1.05rem] leading-7 text-muted-foreground max-w-sm">
            Immersive VR-based learning and training systems designed for interactive understanding and real-world exploration.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Explore</div>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-base sm:text-lg leading-7">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-foreground ramxr-footer-link transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Reach us</div>
          <ul className="mt-4 space-y-2 text-base sm:text-lg leading-7 text-muted-foreground">
            <li>info@ramxrsolutions.com</li>
            <li>+91 97665 25043</li>
            <li>pune,India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 ramxr-footer-divider py-5 text-center text-sm sm:text-base text-muted-foreground">
        © {new Date().getFullYear()} RamXR Solutions. Crafted for immersive learning.
      </div>
    </footer>
  );
}
