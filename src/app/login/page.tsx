'use client';

import { signIn, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Sparkles, Loader2, LogIn, Lock, Mail, Cpu, ChevronRight } from "lucide-react";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showCredentials, setShowCredentials] = useState(false);

  useEffect(() => {
    if (status === "authenticated" && session) {
      router.push("/");
    }
  }, [status, session, router]);

  const handleCredentialsLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Vui lòng điền đầy đủ thông tin · Please fill in all fields");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError("Email hoặc Mật khẩu không chính xác · Invalid Email or Password");
      } else {
        router.push("/");
      }
    } catch {
      setError("Đã xảy ra lỗi kết nối · Connection error");
    } finally {
      setLoading(false);
    }
  };

  const handleDevLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: "dev@istqb.app",
        password: "devpass",
      });
      if (res?.error) {
        setError("Dev login failed");
      } else {
        router.push("/");
      }
    } catch {
      setError("Dev login failed due to connection error");
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading" || (status === "authenticated" && session)) {
    return (
      <div className="flex flex-col items-center justify-center gap-4" style={{ minHeight: "100vh" }}>
        <Loader2 className="animate-spin" style={{ width: 32, height: 32, color: "var(--color-accent)" }} />
        <p className="text-sm opacity-60">Redirecting…</p>
      </div>
    );
  }

  return (
    <div className="px-5 pt-32 pb-24 flex items-center justify-center" style={{ minHeight: "100vh" }}>
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 65%)",
            filter: "blur(85px)",
            top: "-10%",
            left: "5%",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 65%)",
            filter: "blur(85px)",
            bottom: "10%",
            right: "5%",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card w-full max-w-md p-8 sm:p-10 relative overflow-hidden"
      >
        {/* Glow accent */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1"
          style={{ background: "linear-gradient(90deg, transparent, var(--color-accent), var(--color-purple), transparent)" }}
        />

        {/* Header */}
        <div className="text-center mb-8">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4"
            style={{ background: "var(--color-accent-soft)", color: "var(--color-accent)", border: "1px solid var(--color-accent-medium)" }}
          >
            <Sparkles style={{ width: 10, height: 10 }} />
            ISTQB Mastery Platform
          </div>
          <h1 className="text-3xl font-extrabold font-display mb-1 text-[var(--color-accent)]">
            Sign In / Đăng Nhập
          </h1>
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            Google-First login for secure bilingual study
          </p>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 p-4 rounded-xl text-xs font-medium border"
            style={{ background: "var(--color-danger-soft)", borderColor: "var(--color-danger)", color: "var(--color-text-primary)" }}
          >
            {error}
          </motion.div>
        )}

        <div className="flex flex-col gap-4">
          {/* Main Google Login */}
          <button
            onClick={() => signIn("google")}
            className="btn btn-primary w-full py-4 text-sm flex items-center justify-center gap-3 relative group"
            style={{ borderRadius: "var(--radius-xl)" }}
          >
            {/* Google Logo */}
            <svg style={{ width: 18, height: 18 }} viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                style={{ fill: "#4285F4" }}
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.76c-.99.66-2.27 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                style={{ fill: "#34A853" }}
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"
                style={{ fill: "#FBBC05" }}
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                style={{ fill: "#EA4335" }}
              />
            </svg>
            <span className="font-bold">Continue with Google / Đăng nhập Google</span>
          </button>

          {/* Quick Dev Bypass */}
          <button
            onClick={handleDevLogin}
            className="w-full py-2.5 rounded-2xl text-xs font-bold border border-dashed transition-all hover:bg-[var(--color-accent-soft)]"
            style={{ borderColor: "var(--color-accent)", color: "var(--color-accent)", background: "rgba(99,102,241,0.03)" }}
          >
            <Cpu className="inline shrink-0 mr-1.5" style={{ width: 12, height: 12 }} />
            Quick Dev Login / Đăng nhập Thử nghiệm
          </button>

          {/* Credentials Toggle Accordion */}
          <div className="mt-4 border-t border-[var(--color-border)] pt-5">
            <button
              onClick={() => setShowCredentials(!showCredentials)}
              className="text-xs font-semibold flex items-center justify-center gap-1.5 mx-auto transition-colors"
              style={{ color: "var(--color-text-secondary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
            >
              <span>Or log in with Password / Hoặc nhập mật khẩu</span>
              <ChevronRight style={{ width: 12, height: 12, transform: showCredentials ? "rotate(90deg)" : "none", transition: "transform 0.2s" }} />
            </button>

            {showCredentials && (
              <motion.form
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                onSubmit={handleCredentialsLogin}
                className="flex flex-col gap-3 mt-4 overflow-hidden"
              >
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 opacity-40" style={{ width: 14, height: 14 }} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border text-xs outline-none bg-[var(--color-surface-sunken)] transition-colors focus:border-[var(--color-accent)]"
                    style={{ borderColor: "var(--color-border)", color: "var(--color-text-primary)" }}
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 opacity-40" style={{ width: 14, height: 14 }} />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password / Mật khẩu"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border text-xs outline-none bg-[var(--color-surface-sunken)] transition-colors focus:border-[var(--color-accent)]"
                    style={{ borderColor: "var(--color-border)", color: "var(--color-text-primary)" }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary py-3 rounded-xl text-xs font-bold w-full"
                >
                  {loading ? (
                    <Loader2 className="animate-spin" style={{ width: 12, height: 12 }} />
                  ) : (
                    <span className="flex items-center gap-1"><LogIn style={{ width: 12, height: 12 }} /> Sign In / Đăng nhập</span>
                  )}
                </button>
              </motion.form>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
