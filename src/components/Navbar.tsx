'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { History, Home, Moon, Sun, Library, GraduationCap, Zap, Layers, Search, User } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { syllabusData } from "@/data/syllabus";
import { ctaiSyllabusData } from "@/data/syllabus-ai";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/review", label: "Syllabus", icon: Library },
  { href: "/exam", label: "Exam", icon: GraduationCap },
  { href: "/quick-quiz", label: "Quick", icon: Zap },
  { href: "/flashcards", label: "Cards", icon: Layers },
  { href: "/history", label: "History", icon: History },
];

const getNavbarRank = (progress: any) => {
  const activeChapters = [
    ...syllabusData.filter(ch => ch.quiz && ch.quiz.length > 0),
    ...ctaiSyllabusData.filter(ch => ch.quiz && ch.quiz.length > 0)
  ];
  
  let readCount = 0;
  let quizSum = 0;
  let quizCount = 0;

  activeChapters.forEach(ch => {
    const prog = progress[ch.id];
    if (prog) {
      if (prog.read) readCount++;
      if (prog.quizScore != null) {
        quizSum += prog.quizScore;
        quizCount++;
      }
    }
  });

  const avgQuizScore = quizCount > 0 ? Math.round(quizSum / quizCount) : 0;
  
  let examAttempts = 0;
  try {
    const stored = localStorage.getItem("last_attempt");
    if (stored) examAttempts = 1;
  } catch {}

  // Dynamic colors and shadows based on user level
  if (readCount >= 6 && avgQuizScore >= 85 && examAttempts >= 3) {
    return { level: 5, icon: "🏆", color: "var(--color-purple)", borderGlow: "0 0 10px rgba(168, 85, 247, 0.5)" };
  }
  if (readCount >= 6 && avgQuizScore >= 65 && examAttempts >= 1) {
    return { level: 4, icon: "⚡", color: "var(--color-success)", borderGlow: "0 0 8px rgba(34, 197, 94, 0.4)" };
  }
  if (readCount >= 4 && avgQuizScore >= 60) {
    return { level: 3, icon: "🛡️", color: "var(--color-accent)", borderGlow: "0 0 8px rgba(59, 130, 246, 0.4)" };
  }
  if (readCount >= 2 && quizCount > 0) {
    return { level: 2, icon: "🌱", color: "var(--color-accent)", borderGlow: "none" };
  }
  return { level: 1, icon: "📖", color: "var(--color-text-muted)", borderGlow: "none" };
};

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  const { progress } = useChapterProgress();
  const rank = getNavbarRank(progress);

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
    <>
      {/* Desktop & Tablet Header (Visible on screen widths >= 640px) */}
      <header className="hidden sm:flex fixed top-0 left-0 right-0 z-50 justify-center px-4 pt-3">
        <nav
          className="flex items-center justify-between w-full max-w-3xl px-3 py-2 rounded-2xl relative"
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
          <Link href="/" className="pl-1.5 text-sm font-bold tracking-tight shrink-0" style={{ color: "var(--color-text-primary)" }}>
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
                  <span className="hidden md:inline">{label}</span>
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

          {/* Scientific Utility Group (Search, Theme, Profile) */}
          <div className="flex items-center gap-1 shrink-0 pl-1 border-l border-[var(--color-border)] ml-1">
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
              <span
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[9px] font-bold whitespace-nowrap rounded px-1.5 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: "var(--color-surface-raised)", color: "var(--color-text-muted)", border: "1px solid var(--color-border)" }}
              >
                ⌘K
              </span>
            </Link>

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

            {mounted && (
              status === "authenticated" && session ? (
                <Link
                  href="/profile"
                  aria-label="Profile"
                  className="flex items-center justify-center rounded-full transition-all duration-300 group relative border-2 hover:scale-105 shrink-0"
                  style={{
                    width: 34,
                    height: 34,
                    borderColor: rank.color,
                    boxShadow: rank.borderGlow,
                    marginLeft: 4,
                  }}
                >
                  {session.user?.image && !avatarError ? (
                    <img
                      src={session.user.image}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover"
                      onError={() => setAvatarError(true)}
                    />
                  ) : (
                    <div 
                      className="w-full h-full rounded-full flex items-center justify-center bg-[var(--color-accent-soft)]"
                      style={{ color: "var(--color-accent)" }}
                    >
                      <User style={{ width: 15, height: 15 }} />
                    </div>
                  )}
                  <div 
                    className="absolute -bottom-1 -right-1 w-4.5 h-4.5 rounded-full flex items-center justify-center text-[9px] shadow-md border"
                    style={{ 
                      background: dark ? "rgba(20, 20, 35, 0.9)" : "rgba(255, 255, 255, 0.95)",
                      borderColor: rank.color,
                      lineHeight: 1,
                      fontSize: 8,
                    }}
                  >
                    {rank.icon}
                  </div>
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="flex items-center justify-center rounded-xl text-xs font-bold transition-all duration-200 group relative px-3 py-1.5"
                  style={{
                    marginLeft: 4,
                    color: pathname === "/login" ? "var(--color-accent)" : "var(--color-text-muted)",
                    background: pathname === "/login" ? "var(--color-accent-soft)" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "var(--color-accent-soft)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-accent)";
                  }}
                  onMouseLeave={(e) => {
                    if (pathname !== "/login") {
                      (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-muted)";
                    }
                  }}
                >
                  <User style={{ width: 14, height: 14, marginRight: 4 }} />
                  <span>Login</span>
                </Link>
              )
            )}
          </div>
        </nav>
      </header>

      {/* Mobile Top Header Capsule (Visible on screen widths < 640px) */}
      <header className="sm:hidden fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3">
        <nav
          className="flex items-center justify-between w-full px-3 py-1.5 rounded-2xl relative"
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
            borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="pl-1 text-sm font-bold tracking-tight shrink-0" style={{ color: "var(--color-text-primary)" }}>
            <span
              className="font-display text-base"
              style={{
                backgroundImage: "linear-gradient(135deg, var(--color-accent), var(--color-purple))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 900,
              }}
            >
              ISTQB
            </span>
            <span style={{ color: "var(--color-text-muted)", marginLeft: 3 }}>Mastery</span>
          </Link>

          {/* Mobile Utility Group (Search, Theme, Avatar) */}
          <div className="flex items-center gap-1 shrink-0">
            <Link
              href="/search"
              aria-label="Search"
              className="flex items-center justify-center rounded-xl transition-all duration-200"
              style={{
                width: 48, height: 48,
                color: pathname === "/search" ? "var(--color-accent)" : "var(--color-text-muted)",
              }}
            >
              <Search style={{ width: 18, height: 18 }} />
            </Link>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex items-center justify-center rounded-xl transition-all duration-200"
              style={{
                width: 48,
                height: 48,
                color: "var(--color-text-muted)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              {mounted && (dark ? <Sun style={{ width: 18, height: 18 }} /> : <Moon style={{ width: 18, height: 18 }} />)}
            </button>

            {mounted && (
              status === "authenticated" && session ? (
                <Link
                  href="/profile"
                  aria-label="Profile"
                  className="flex items-center justify-center rounded-full transition-all duration-200 relative border hover:scale-105 shrink-0"
                  style={{
                    width: 44,
                    height: 44,
                    borderColor: rank.color,
                    boxShadow: rank.borderGlow,
                    marginRight: 4,
                  }}
                >
                  {session.user?.image && !avatarError ? (
                    <img
                      src={session.user.image}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover"
                      onError={() => setAvatarError(true)}
                    />
                  ) : (
                    <div 
                      className="w-full h-full rounded-full flex items-center justify-center bg-[var(--color-accent-soft)]"
                      style={{ color: "var(--color-accent)" }}
                    >
                      <User style={{ width: 16, height: 16 }} />
                    </div>
                  )}
                  <div 
                    className="absolute -bottom-1 -right-1 w-4.5 h-4.5 rounded-full flex items-center justify-center text-[9px] shadow-sm border"
                    style={{ 
                      background: dark ? "rgba(20, 20, 35, 0.9)" : "rgba(255, 255, 255, 0.95)",
                      borderColor: rank.color,
                      lineHeight: 1,
                      fontSize: 8,
                    }}
                  >
                    {rank.icon}
                  </div>
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="flex items-center justify-center rounded-xl text-xs font-bold transition-all duration-200 px-3"
                  style={{
                    width: 48,
                    height: 48,
                    color: pathname === "/login" ? "var(--color-accent)" : "var(--color-text-muted)",
                    background: pathname === "/login" ? "var(--color-accent-soft)" : "transparent",
                  }}
                >
                  <User style={{ width: 18, height: 18 }} />
                </Link>
              )
            )}
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Navigation Bar (Visible on screen widths < 640px) */}
      <nav
        className="sm:hidden fixed bottom-4 left-4 right-4 z-50 flex items-center justify-around rounded-2xl border"
        style={{
          height: 64,
          backgroundColor: dark
            ? "rgba(10, 10, 20, 0.8)"
            : "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          boxShadow: dark
            ? "0 -4px 20px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.06)"
            : "0 -4px 20px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(0,0,0,0.06)",
          borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
        }}
      >
        {navLinks.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className="flex-1 flex flex-col items-center justify-center gap-0.5 rounded-xl transition-all duration-200"
              style={{
                height: "100%",
                color: active ? "var(--color-accent)" : "var(--color-text-muted)",
              }}
            >
              <Icon style={{ width: 18, height: 18 }} />
              <span className="text-[9px] font-bold tracking-tight">{label}</span>
              {/* Active dot indicator */}
              {active && (
                <span 
                  className="w-1.5 h-1.5 rounded-full mt-0.5" 
                  style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-purple))" }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
