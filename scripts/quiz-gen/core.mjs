/** Deterministic PRNG for reproducible option order */
export function mulberry32(a) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function shuffleDeterministic(seed, arr) {
  const rnd = mulberry32(seed >>> 0);
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Pick k distinct wrong options (never includes `correct`) */
export function pickWrong(pool, seed, k = 3, correct = null) {
  let filtered = pool.filter((p) => !correct || p.en !== correct.en);
  if (filtered.length < k) filtered = [...pool];
  const idx = shuffleDeterministic(seed, filtered.map((_, i) => i)).slice(
    0,
    Math.min(k, filtered.length)
  );
  return idx.map((i) => filtered[i]);
}

export function opt(en, vi) {
  return { en, vi };
}

export function buildQ(seed, stemEn, stemVi, correct, wrongPool, explanation) {
  const wrong = pickWrong(wrongPool, seed, 3, correct);
  const options = shuffleDeterministic(seed + 17, [...wrong, correct]);
  return {
    questionEn: stemEn,
    questionVi: stemVi,
    options,
    correctEn: correct.en,
    correctVi: correct.vi,
    explanation,
  };
}

export function validate(q, i) {
  const errs = [];
  if (!q.options || q.options.length !== 4) errs.push(`#${i} options`);
  if (!q.options.some((o) => o.en === q.correctEn)) errs.push(`#${i} correctEn`);
  if (!q.options.some((o) => o.vi === q.correctVi)) errs.push(`#${i} correctVi`);
  return errs;
}
