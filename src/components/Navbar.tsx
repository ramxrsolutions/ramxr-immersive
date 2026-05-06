import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const items = ["Home", "About", "Projects", "Solutions", "Demo", "Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${scrolled ? "glass shadow-glow" : ""}`}>
          <a href="#home" className="flex items-center gap-2">
            <span className="relative h-8 w-8 rounded-lg bg-gradient-brand grid place-items-center">
              <span className="absolute inset-0 rounded-lg bg-gradient-brand blur-md opacity-60 pulse-glow" />
              <span className="relative text-primary-foreground font-bold text-sm">R</span>
            </span>
            <span className="font-display font-semibold tracking-tight">
              RamXR <span className="text-gradient-brand">Solutions</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {items.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  {item}
                  <span className="absolute left-3 right-3 -bottom-0.5 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 bg-gradient-brand" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#demo"
              className="hidden sm:inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-gradient-brand text-primary-foreground hover-lift"
            >
              Book a Demo
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden h-10 w-10 rounded-full glass grid place-items-center"
              aria-label="Menu"
            >
              <span className="block h-0.5 w-4 bg-foreground" />
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-3 reveal">
            {items.map((i) => (
              <a key={i} href={`#${i.toLowerCase()}`} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm rounded-lg hover:bg-muted">
                {i}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
