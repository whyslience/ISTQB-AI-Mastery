export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] gap-4">
      <div className="w-12 h-12 border-4 border-[var(--color-surface-raised)] border-t-[var(--color-accent)] rounded-full animate-spin"></div>
      <p className="text-sm text-[var(--color-text-muted)] animate-pulse">Loading exam environment...</p>
    </div>
  );
}
