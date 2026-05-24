'use client';

import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Loader2, Lock, User, Mail, ShieldAlert, CheckCircle2, Trophy, BarChart2, BookOpen, KeyRound, LogOut } from "lucide-react";
import Link from "next/link";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { syllabusData } from "@/data/syllabus";
import { ctaiSyllabusData } from "@/data/syllabus-ai";

interface RankInfo {
  level: number;
  nameEn: string;
  nameVi: string;
  color: string;
  bgColor: string;
  descriptionEn: string;
  descriptionVi: string;
  icon: string;
  nextMilestone: string;
}

const getRankInfo = (stats: { readCount: number; quizCount: number; avgQuizScore: number; examAttempts: number }): RankInfo => {
  const { readCount, quizCount, avgQuizScore, examAttempts } = stats;

  if (readCount >= 6 && avgQuizScore >= 85 && examAttempts >= 3) {
    return {
      level: 5,
      nameEn: "ISTQB Master",
      nameVi: "Bậc Thầy ISTQB",
      color: "var(--color-purple)",
      bgColor: "var(--color-purple-soft)",
      descriptionEn: "Outstanding scores across all quizzes and exams. You have fully mastered the syllabus!",
      descriptionVi: "Đạt điểm số xuất sắc ở mọi bài Quiz và Exam. Bạn đã hoàn toàn làm chủ kiến thức syllabus!",
      icon: "🏆",
      nextMilestone: "Tối đa cấp độ · Maximum level reached! 🎉",
    };
  }

  if (readCount >= 6 && avgQuizScore >= 65 && examAttempts >= 1) {
    return {
      level: 4,
      nameEn: "Exam-Ready Candidate",
      nameVi: "Ứng Viên Sẵn Sàng",
      color: "var(--color-success)",
      bgColor: "var(--color-success-soft)",
      descriptionEn: "Completed full syllabus with safe passing scores. Confidently step into the real exam!",
      descriptionVi: "Đã hoàn thành toàn bộ syllabus và đạt điểm số an toàn. Tự tin bước vào kỳ thi thật!",
      icon: "⚡",
      nextMilestone: "Luyện thi thử đạt >= 85% & làm ít nhất 3 đề thi thử để lên Bậc Thầy ISTQB (Level 5) · Reach >= 85% quiz avg & 3 exam attempts for ISTQB Master (Level 5)",
    };
  }

  if (readCount >= 4 && avgQuizScore >= 60) {
    return {
      level: 3,
      nameEn: "Competent Practitioner",
      nameVi: "Chuyên Viên Vững Vàng",
      color: "var(--color-accent)",
      bgColor: "var(--color-accent-soft)",
      descriptionEn: "Solid foundation. Ready to try simulated Mock Exams!",
      descriptionVi: "Kiến thức nền tảng tương đối tốt. Đã sẵn sàng thử sức với các đề thi thử (Mock Exams)!",
      icon: "🛡️",
      nextMilestone: "Đọc hết 6 chương và làm ít nhất 1 đề thi thử để lên Ứng Viên Sẵn Sàng (Level 4) · Read all 6 chapters & do 1 exam attempt for Exam-Ready (Level 4)",
    };
  }

  if (readCount >= 2 && quizCount > 0) {
    return {
      level: 2,
      nameEn: "Apprentice Tester",
      nameVi: "Kiểm Thử Viên Tập Sự",
      color: "var(--color-accent)",
      bgColor: "var(--color-accent-soft)",
      descriptionEn: "Understand basic concepts. Continue reading and improve your Quiz scores!",
      descriptionVi: "Đã nắm được các khái niệm cơ bản. Tiếp tục đọc và cải thiện điểm số Quiz!",
      icon: "🌱",
      nextMilestone: "Đọc ít nhất 4 chương & điểm thi thử/quiz trung bình đạt >= 60% để lên Chuyên Viên (Level 3) · Read >= 4 chapters & average score >= 60% for Competent Practitioner (Level 3)",
    };
  }

  return {
    level: 1,
    nameEn: "Novice Initiate",
    nameVi: "Học Viên Sơ Cấp",
    color: "var(--color-text-muted)",
    bgColor: "var(--color-surface-sunken)",
    descriptionEn: "Just started your journey. Read more chapters and take your first Mini Quizzes!",
    descriptionVi: "Mới bắt đầu hành trình. Cần đọc thêm tài liệu và làm các bài Mini Quiz đầu tiên!",
    icon: "📖",
    nextMilestone: "Đọc ít nhất 2 chương & hoàn thành 1 Mini Quiz để lên Kiểm Thử Viên Tập Sự (Level 2) · Read >= 2 chapters & complete 1 quiz for Apprentice Tester (Level 2)",
  };
};

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { progress, isLoaded: progressLoaded } = useChapterProgress();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  // Stats
  const [stats, setStats] = useState({
    readCount: 0,
    quizCount: 0,
    avgQuizScore: 0,
    examAttempts: 0,
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (!progressLoaded) return;
    
    // Calculate stats
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

    // Attempts from local storage as well
    let attemptsCount = 0;
    try {
      const stored = localStorage.getItem("last_attempt");
      if (stored) {
        attemptsCount = 1; // Basic count if last exists, or can query history DB
      }
    } catch {
      // ignore
    }

    setStats({
      readCount,
      quizCount,
      avgQuizScore: quizCount > 0 ? Math.round(quizSum / quizCount) : 0,
      examAttempts: attemptsCount,
    });
  }, [progress, progressLoaded]);

  const handleSetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      setError("Vui lòng điền đầy đủ các trường · Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      setError("Mật khẩu phải chứa ít nhất 6 ký tự · Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Mật khẩu xác nhận không trùng khớp · Passwords do not match");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("/api/auth/set-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Không thể đặt mật khẩu · Failed to set password");
      } else {
        setSuccess("Đặt mật khẩu thành công! Giờ bạn có thể đăng nhập bằng mật khẩu này · Password set successfully!");
        setPassword("");
        setConfirmPassword("");
      }
    } catch {
      setError("Lỗi kết nối máy chủ · Connection error");
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading" || !session) {
    return (
      <div className="flex flex-col items-center justify-center gap-4" style={{ minHeight: "100vh" }}>
        <Loader2 className="animate-spin" style={{ width: 32, height: 32, color: "var(--color-accent)" }} />
        <p className="text-sm opacity-60">Loading profile…</p>
      </div>
    );
  }

  const u = session.user;
  const avatar = u?.image || "https://lh3.googleusercontent.com/a/default-user=s96-c";
  const rank = getRankInfo(stats);

  return (
    <div className="px-5 pt-32 pb-24 flex items-center justify-center" style={{ minHeight: "100vh" }}>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-5 gap-6">
        
        {/* Left Column — Google Card & Stats */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 flex flex-col gap-6"
        >
          {/* User profile card */}
          <div className="glass-card p-6 flex flex-col items-center text-center relative overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
              style={{ background: "linear-gradient(135deg, var(--color-accent-soft), var(--color-purple-soft))" }}
            />
            {u?.image && !avatarError ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={u.image}
                alt="Avatar"
                className="w-20 h-20 rounded-full border-4 shadow-lg mb-4 mt-6 relative z-10 object-cover"
                style={{ borderColor: "var(--color-surface-raised)" }}
                onError={() => setAvatarError(true)}
              />
            ) : (
              <div 
                className="w-20 h-20 rounded-full border-4 shadow-lg mb-4 mt-6 relative z-10 flex items-center justify-center bg-[var(--color-accent-soft)] text-[var(--color-accent)]"
                style={{ borderColor: "var(--color-surface-raised)" }}
              >
                <User style={{ width: 32, height: 32 }} />
              </div>
            )}
            <h2 className="text-xl font-bold font-display leading-tight">{u?.name || "ISTQB Student"}</h2>
            <p className="text-xs opacity-60 mt-1 flex items-center gap-1">
              <Mail style={{ width: 12, height: 12 }} /> {u?.email}
            </p>
            <div
              className="mt-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
              style={{ background: "var(--color-success-soft)", color: "var(--color-success)" }}
            >
              Google Auth Account
            </div>
            
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="mt-6 text-xs font-semibold flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity"
              style={{ color: "var(--color-danger)" }}
            >
              <LogOut style={{ width: 12, height: 12 }} /> Sign Out / Đăng xuất
            </button>
          </div>

          {/* ISTQB Mastery Rank Card */}
          <div className="glass-card p-6 relative overflow-hidden">
            <div 
              className="absolute top-0 right-0 w-20 h-20 opacity-15 pointer-events-none text-5xl flex items-center justify-center"
              style={{ transform: "rotate(15deg) translate(10px, -10px)" }}
            >
              {rank.icon}
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: "var(--color-text-secondary)" }}>
              <Trophy style={{ width: 14, height: 14, color: "var(--color-purple)" }} />
              ISTQB Rank / Danh hiệu
            </h3>
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl shadow-inner shrink-0" 
                style={{ background: rank.bgColor }}
              >
                {rank.icon}
              </div>
              <div>
                <div className="text-[9px] font-bold opacity-60 uppercase tracking-widest">Level {rank.level}</div>
                <h4 className="text-sm font-extrabold font-display leading-tight" style={{ color: rank.color }}>
                  {rank.nameEn}
                </h4>
                <p className="text-[10px] font-semibold opacity-70 leading-none mt-0.5">{rank.nameVi}</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed opacity-85 mb-3 italic">
              "{rank.descriptionVi}"
              <span className="block not-italic text-[10px] opacity-60 mt-1">{rank.descriptionEn}</span>
            </p>
            <div className="h-px bg-[var(--color-border)] my-2" />
            <div>
              <div className="text-[9px] font-bold uppercase tracking-wider opacity-55 mb-1">Mục tiêu tiếp theo · Next Goal:</div>
              <p className="text-[10px] font-medium leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                {rank.nextMilestone}
              </p>
            </div>
          </div>

          {/* Quick learning progress statistics */}
          <div className="glass-card p-6">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: "var(--color-text-secondary)" }}>
              <BarChart2 style={{ width: 16, height: 16, color: "var(--color-accent)" }} />
              Progress / Tiến trình
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium opacity-70">Chapters Read / Đã đọc</span>
                <span className="text-xs font-bold flex items-center gap-1"><BookOpen style={{ width: 12, height: 12 }} /> {stats.readCount} chapters</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium opacity-70">Avg Quiz Score / Điểm TB</span>
                <span className="text-xs font-bold flex items-center gap-1"><Trophy style={{ width: 12, height: 12 }} /> {stats.avgQuizScore}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium opacity-70">Quizzes Taken / Làm Quiz</span>
                <span className="text-xs font-bold">{stats.quizCount} times</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column — Password setup form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-3 flex flex-col gap-6"
        >
          <div className="glass-card p-8 sm:p-10 relative overflow-hidden h-full flex flex-col justify-center">
            {/* Header info */}
            <div className="mb-6">
              <h3 className="text-2xl font-extrabold font-display mb-1 flex items-center gap-2 text-[var(--color-accent)]">
                <KeyRound style={{ width: 22, height: 22 }} />
                Set Password / Thiết Lập Mật Khẩu
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Google-authenticated accounts do not have a local password by default. Create a secure password below to allow logging in directly using your Email in the future.
                <br /><br />
                <span className="italic opacity-85">
                  Tài khoản đăng nhập qua Google mặc định không có mật khẩu. Thiết lập mật khẩu riêng tại đây để có thể đăng nhập trực tiếp bằng Email của bạn trong tương lai.
                </span>
              </p>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-5 p-4 rounded-xl text-xs font-medium border flex items-start gap-2"
                style={{ background: "var(--color-danger-soft)", borderColor: "var(--color-danger)", color: "var(--color-text-primary)" }}
              >
                <ShieldAlert className="shrink-0 mt-0.5" style={{ width: 14, height: 14, color: "var(--color-danger)" }} />
                <span>{error}</span>
              </motion.div>
            )}

            {success && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-5 p-4 rounded-xl text-xs font-medium border flex items-start gap-2"
                style={{ background: "var(--color-success-soft)", borderColor: "var(--color-success)", color: "var(--color-text-primary)" }}
              >
                <CheckCircle2 className="shrink-0 mt-0.5" style={{ width: 14, height: 14, color: "var(--color-success)" }} />
                <span>{success}</span>
              </motion.div>
            )}

            <form onSubmit={handleSetPassword} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold" style={{ color: "var(--color-text-secondary)" }}>
                  New Password / Mật khẩu Mới
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 opacity-40" style={{ width: 14, height: 14 }} />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Tối thiểu 6 ký tự · Min 6 characters"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border text-xs outline-none bg-[var(--color-surface-sunken)] transition-all duration-200 focus:border-[var(--color-accent)]"
                    style={{ 
                      borderColor: !password 
                        ? "var(--color-border)" 
                        : password.length >= 6 
                          ? "var(--color-success)" 
                          : "var(--color-danger)", 
                      color: "var(--color-text-primary)" 
                    }}
                  />
                </div>
                {password && (
                  <div className="mt-1 flex items-center gap-1.5 text-[10px] font-medium transition-all duration-200">
                    {password.length >= 6 ? (
                      <>
                        <CheckCircle2 style={{ width: 11, height: 11, color: "var(--color-success)" }} />
                        <span style={{ color: "var(--color-success)" }}>Độ dài hợp lệ · Valid password length</span>
                      </>
                    ) : (
                      <>
                        <ShieldAlert style={{ width: 11, height: 11, color: "var(--color-danger)" }} />
                        <span style={{ color: "var(--color-danger)" }}>Mật khẩu phải tối thiểu 6 ký tự · Minimum 6 characters required</span>
                      </>
                    )}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold" style={{ color: "var(--color-text-secondary)" }}>
                  Confirm Password / Xác nhận Mật khẩu
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 opacity-40" style={{ width: 14, height: 14 }} />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Nhập lại mật khẩu mới"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border text-xs outline-none bg-[var(--color-surface-sunken)] transition-all duration-200 focus:border-[var(--color-accent)]"
                    style={{ 
                      borderColor: !confirmPassword 
                        ? "var(--color-border)" 
                        : password === confirmPassword 
                          ? "var(--color-success)" 
                          : "var(--color-danger)", 
                      color: "var(--color-text-primary)" 
                    }}
                  />
                </div>
                {confirmPassword && (
                  <div className="mt-1 flex items-center gap-1.5 text-[10px] font-medium transition-all duration-200">
                    {password === confirmPassword ? (
                      <>
                        <CheckCircle2 style={{ width: 11, height: 11, color: "var(--color-success)" }} />
                        <span style={{ color: "var(--color-success)" }}>Mật khẩu trùng khớp · Passwords match</span>
                      </>
                    ) : (
                      <>
                        <ShieldAlert style={{ width: 11, height: 11, color: "var(--color-danger)" }} />
                        <span style={{ color: "var(--color-danger)" }}>Mật khẩu chưa trùng khớp · Passwords do not match</span>
                      </>
                    )}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={loading || password.length < 6 || password !== confirmPassword}
                className="btn btn-primary py-3.5 text-xs font-bold mt-4"
                style={{ 
                  borderRadius: "var(--radius-xl)",
                  opacity: (loading || password.length < 6 || password !== confirmPassword) ? 0.6 : 1,
                  cursor: (loading || password.length < 6 || password !== confirmPassword) ? "not-allowed" : "pointer"
                }}
              >
                {loading ? (
                  <Loader2 className="animate-spin" style={{ width: 12, height: 12 }} />
                ) : (
                  <span>Set Password / Lưu Mật Khẩu</span>
                )}
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
