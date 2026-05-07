import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";
import { BookCallDialog } from "./BookCallDialog";
const items = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Projects", to: "/projects" as const },
  { label: "Solutions", to: "/solutions" as const },
  { label: "Demo", to: "/demo" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${scrolled ? "glass shadow-glow" : ""}`}>
          <Link to="/" className="flex items-center gap-2">
            <span className="relative h-8 w-8 rounded-lg bg-gradient-brand grid place-items-center">
              <span className="absolute inset-0 rounded-lg bg-gradient-brand blur-md opacity-60 pulse-glow" />
              <span className="relative text-primary-foreground font-bold text-sm">R</span>
            </span>
            <span className="font-display font-semibold tracking-tight">
              RamXR <span className="text-gradient-brand">Solutions</span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {items.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                  activeProps={{ className: "text-foreground" }}
                  activeOptions={{ exact: true }}
                >
                  {item.label}
                  <span className="absolute left-3 right-3 -bottom-0.5 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 bg-gradient-brand" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <BookCallDialog>
              <button className="hidden sm:inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-gradient-brand text-primary-foreground hover-lift cursor-pointer">
                Book a Demo
              </button>
            </BookCallDialog>
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
              <Link key={i.to} to={i.to} className="block px-3 py-2 text-sm rounded-lg hover:bg-muted">
                {i.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
