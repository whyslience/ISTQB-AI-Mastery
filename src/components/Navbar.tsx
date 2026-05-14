'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { History, Home, Moon, Sun, Library, GraduationCap, Zap, Layers, Search } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/review", label: "Syllabus", icon: Library },
  { href: "/exam", label: "Exam", icon: GraduationCap },
  { href: "/quick-quiz", label: "Quick", icon: Zap },
  { href: "/flashcards", label: "Cards", icon: Layers },
  { href: "/history", label: "History", icon: History },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  // Cmd/Ctrl+K shortcut for search
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      router.push("/search");
    }
  }, [router]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3">
      {/* Gradient border strip at bottom of navbar */}
      <nav
        className="flex items-center justify-between w-full max-w-2xl px-2 py-1.5 rounded-2xl relative"
        style={{
          backgroundColor: dark
            ? "rgba(10, 10, 20, 0.6)"
            : "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          boxShadow: dark
            ? "0 4px 20px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.06)"
            : "0 4px 20px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(0,0,0,0.06)",
          border: "1px solid transparent",
        }}
      >
        {/* Bottom gradient border */}
        <div
          className="absolute bottom-0 left-4 right-4 h-px rounded-full pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent, var(--color-accent), var(--color-purple), transparent)",
            opacity: dark ? 0.5 : 0.25,
          }}
        />

        {/* Logo */}
        <Link href="/" className="pl-2.5 text-sm font-bold tracking-tight" style={{ color: "var(--color-text-primary)" }}>
          <span
            className="font-display"
            style={{
              backgroundImage: "linear-gradient(135deg, var(--color-accent), var(--color-purple))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 800,
            }}
          >
            ISTQB
          </span>
          <span style={{ color: "var(--color-text-muted)", marginLeft: 4 }}>Mastery</span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-0.5">
          {navLinks.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 relative group"
                style={{
                  background: active ? "var(--color-accent-soft)" : "transparent",
                  color: active ? "var(--color-accent)" : "var(--color-text-muted)",
                }}
              >
                <Icon style={{ width: 14, height: 14 }} />
                <span className="hidden sm:inline">{label}</span>
                {/* Animated underline slide */}
                <span
                  className="absolute bottom-0.5 left-3 right-3 h-px rounded-full transition-all duration-200 origin-left"
                  style={{
                    background: "linear-gradient(90deg, var(--color-accent), var(--color-purple))",
                    transform: active ? "scaleX(1)" : "scaleX(0)",
                    opacity: active ? 1 : 0,
                  }}
                />
              </Link>
            );
          })}
        </div>

        {/* Search icon + Cmd+K hint */}
        <Link
          href="/search"
          aria-label="Search (Ctrl+K)"
          className="flex items-center justify-center rounded-xl transition-all duration-200 group relative"
          style={{
            width: 34, height: 34,
            color: pathname === "/search" ? "var(--color-accent)" : "var(--color-text-muted)",
            background: pathname === "/search" ? "var(--color-accent-soft)" : "transparent",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "var(--color-accent-soft)";
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-accent)";
          }}
          onMouseLeave={(e) => {
            if (pathname !== "/search") {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-muted)";
            }
          }}
        >
          <Search style={{ width: 15, height: 15 }} />
          {/* Tooltip */}
          <span
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[9px] font-bold whitespace-nowrap rounded px-1.5 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            style={{ background: "var(--color-surface-raised)", color: "var(--color-text-muted)", border: "1px solid var(--color-border)" }}
          >
            ⌘K
          </span>
        </Link>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="flex items-center justify-center rounded-xl transition-all duration-200 relative overflow-hidden"
          style={{
            width: 34,
            height: 34,
            color: "var(--color-text-muted)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = "var(--color-accent-soft)";
            el.style.color = "var(--color-accent)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = "transparent";
            el.style.color = "var(--color-text-muted)";
          }}
        >
          {mounted
            ? dark
              ? <Sun style={{ width: 15, height: 15 }} />
              : <Moon style={{ width: 15, height: 15 }} />
            : <div style={{ width: 15, height: 15 }} suppressHydrationWarning />}
        </button>
      </nav>
    </header>
  );
}
