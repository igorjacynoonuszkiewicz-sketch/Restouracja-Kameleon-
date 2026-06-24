/**
 * Deterministic pseudo-random number generator.
 *
 * Procedural three.js scenes need varied-but-stable values (positions, speeds,
 * scales). `Math.random()` is impure and is correctly rejected by React's
 * purity rules when used during render. A seeded hash gives the same visual
 * variety while staying pure and idempotent across re-renders.
 */
export function seededRandom(seed: number, salt: number): number {
  const s = Math.sin(seed * 12.9898 + salt * 78.233) * 43758.5453
  return s - Math.floor(s)
}

/** Returns a function that yields a fresh deterministic value on each call. */
export function makeRng(seed: number): () => number {
  let salt = 1
  return () => seededRandom(seed, salt++)
}
