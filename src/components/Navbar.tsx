import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { BookCallDialog } from "./BookCallDialog";
import { cn } from "@/lib/utils";

const solutionLinks = [
  { label: "Engineering", to: "/solutions/engineering" as const },
  { label: "Medical", to: "/solutions/medical" as const },
];

const items = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Solutions", to: "/solutions" as const, dropdown: solutionLinks },
  { label: "Contact", to: "/contact" as const },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const { location } = useRouterState();

  const solutionsActive = location.pathname.startsWith("/solutions");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSolutionsOpen(false);
    setMobileSolutionsOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${scrolled ? "glass shadow-glow" : ""}`}
        >
          <Link to="/" className="flex items-center gap-2">
            {/*
            <span className="relative h-8 w-8 rounded-lg bg-gradient-brand grid place-items-center">
              <span className="absolute inset-0 rounded-lg bg-gradient-brand blur-md opacity-60 pulse-glow" />
              <span className="relative text-primary-foreground font-bold text-sm">R</span>
            </span>
            */}
            <span className="font-display font-semibold tracking-tight">
              RamXR <span className="text-gradient-brand">Solutions</span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {items.map((item) =>
              !item.dropdown ? (
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
              ) : (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setSolutionsOpen((v) => !v)}
                    aria-expanded={solutionsOpen}
                    aria-haspopup="menu"
                    className={cn(
                      "relative px-3 py-2 text-sm transition-colors group flex items-center gap-1.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      solutionsActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn("h-4 w-4 opacity-70 transition-transform duration-300", solutionsOpen && "rotate-180")}
                      aria-hidden
                    />
                    <span
                      className={cn(
                        "absolute left-3 right-3 -bottom-0.5 h-px origin-left transition-transform duration-300 bg-gradient-brand",
                        solutionsActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      "absolute right-0 top-full z-50 min-w-[13.5rem] pt-2 transition-all duration-300 ease-out",
                      solutionsOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
                    )}
                    role="menu"
                    aria-label="Solutions"
                  >
                    <div className="rounded-xl glass shadow-glow border border-border/50 py-2 overflow-hidden">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.to}
                          to={sub.to}
                          role="menuitem"
                          className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-background/60 transition-colors duration-200 mx-1 rounded-lg"
                          activeProps={{
                            className:
                              "block px-4 py-2.5 text-sm text-foreground bg-background/50 transition-colors duration-200 mx-1 rounded-lg font-medium",
                          }}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              )
            )}
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <BookCallDialog>
              <button className="hidden sm:inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-gradient-brand text-primary-foreground hover-lift cursor-pointer">
                Book a Demo
              </button>
            </BookCallDialog>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden h-10 w-10 rounded-full glass grid place-items-center"
              aria-label="Menu"
              aria-expanded={open}
            >
              <span className="block h-0.5 w-4 bg-foreground" />
            </button>
          </div>
        </nav>

        <div
          className={cn(
            "md:hidden grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(.2,.7,.2,1)]",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="min-h-0 overflow-hidden">
            <div className={cn("mt-2 glass rounded-2xl p-3 border border-border/40", open && "reveal")}>
              {items.map((i) =>
                !i.dropdown ? (
                  <Link key={i.to} to={i.to} className="block px-3 py-2 text-sm rounded-lg hover:bg-muted transition-colors">
                    {i.label}
                  </Link>
                ) : (
                  <div key={i.label}>
                    <button
                      type="button"
                      onClick={() => setMobileSolutionsOpen((v) => !v)}
                      className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-muted flex items-center justify-between gap-2 transition-colors"
                      aria-expanded={mobileSolutionsOpen}
                    >
                      <span className={cn(solutionsActive && "font-medium text-foreground")}>{i.label}</span>
                      <ChevronDown
                        className={cn("h-4 w-4 shrink-0 opacity-70 transition-transform duration-300", mobileSolutionsOpen && "rotate-180")}
                        aria-hidden
                      />
                    </button>
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(.2,.7,.2,1)]",
                        mobileSolutionsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      )}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <div className="mt-1 ml-2 pl-3 border-l border-border/70 space-y-0.5 pb-1">
                          {i.dropdown.map((sub) => (
                            <Link
                              key={sub.to}
                              to={sub.to}
                              className="block px-3 py-2 text-sm rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                              activeProps={{ className: "block px-3 py-2 text-sm rounded-lg bg-muted font-medium text-foreground transition-colors" }}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
