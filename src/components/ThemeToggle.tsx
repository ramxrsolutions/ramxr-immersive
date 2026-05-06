import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const isDark = stored ? stored === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative h-10 w-10 rounded-full glass gradient-border flex items-center justify-center hover-lift"
    >
      <Sun className={`h-4 w-4 absolute transition-all duration-500 ${dark ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`} />
      <Moon className={`h-4 w-4 absolute transition-all duration-500 ${dark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"}`} />
    </button>
  );
}
