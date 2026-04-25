'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, History, Home, Moon, Sun, Library, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/review", label: "Syllabus", icon: Library },
  { href: "/exam", label: "Exam", icon: GraduationCap },
  { href: "/history", label: "History", icon: History },
];

export default function Navbar() {
  const pathname = usePathname();
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

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3">
      <nav
        className="flex items-center justify-between w-full max-w-2xl px-2 py-1.5 rounded-2xl"
        style={{
          background: dark ? "rgba(24, 24, 27, 0.8)" : "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
          boxShadow: dark ? "0 4px 20px rgba(0,0,0,0.4)" : "0 4px 20px rgba(0,0,0,0.05)",
        }}
      >
        {/* Logo */}
        <Link href="/" className="pl-2.5 text-sm font-bold tracking-tight" style={{ color: "var(--color-text-primary)" }}>
          <span className="gradient-text">ISTQB</span>
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
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200"
                style={{
                  background: active ? "var(--color-accent-soft)" : "transparent",
                  color: active ? "var(--color-accent)" : "var(--color-text-muted)",
                }}
              >
                <Icon style={{ width: 14, height: 14 }} />
                <span className="hidden sm:inline">{label}</span>
              </Link>
            );
          })}
        </div>

        {/* Theme */}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center rounded-xl transition-all duration-200"
          style={{
            width: 34,
            height: 34,
            color: "var(--color-text-muted)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.background = "var(--color-accent-soft)";
            (e.target as HTMLElement).style.color = "var(--color-accent)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.background = "transparent";
            (e.target as HTMLElement).style.color = "var(--color-text-muted)";
          }}
        >
          {dark ? <Sun style={{ width: 15, height: 15 }} /> : <Moon style={{ width: 15, height: 15 }} />}
        </button>
      </nav>
    </header>
  );
}
