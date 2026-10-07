import { useEffect, useRef } from "react";

/*
  The sky.

  Night (dark mode)   Pale blue-white stars — engineering blue — with a few cream
                      and, rarely, earthy-green ones: capability warmed by humanity.
                      They twinkle slowly, at three depths, in a new random pattern
                      on every load. Now and then a fine meteor streaks across, and
                      every so often a single point of light crosses like a
                      satellite on orbit: a quiet pass.

  Day (light mode)    The stars give way to slow, warm specks of light drifting up
                      through a soft glow in the corner, like sun through a window.

  Switching the theme crossfades between the two. With reduced motion enabled the
  sky is drawn once and holds still.
*/

const TAU = Math.PI * 2;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (e0, e1, x) => {
  const t = clamp((x - e0) / (e1 - e0));
  return t * t * (3 - 2 * t);
};
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

// Seeded generator, fed a fresh random seed on every load: a new sky each visit.
const mulberry32 = (seed) => {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const TINTS = {
  blue: "205,222,255",
  cream: "255,238,208",
  green: "198,226,188",
};
const ORBIT_TINT = "226,236,255";
const MOTE_TINT = "255,198,98";

const MAX_STARS = 700;
const MAX_MOTES = 140;

const makeStars = (rng) =>
  Array.from({ length: MAX_STARS }, () => {
    const zr = rng();
    const z = zr < 0.62 ? 0 : zr < 0.92 ? 1 : 2; // far, mid, near
    const cr = rng();
    const tint =
      z === 2
        ? cr < 0.7
          ? "blue"
          : "cream"
        : cr < 0.86
        ? "blue"
        : cr < 0.97
        ? "cream"
        : "green";
    return {
      x: rng(),
      y: rng(),
      z,
      tint,
      r: z === 0 ? 0.45 + rng() * 0.25 : z === 1 ? 0.7 + rng() * 0.4 : 1.1 + rng() * 0.6,
      base: z === 0 ? 0.32 + rng() * 0.22 : z === 1 ? 0.5 + rng() * 0.25 : 0.78 + rng() * 0.22,
      depth: 0.22 + rng() * 0.3, // how far the twinkle dips
      period: 5 + rng() * 8, // seconds per twinkle
      phase: rng() * TAU,
      delay: rng() * 1.6, // staggered arrival on load
    };
  });

const makeMotes = (rng) =>
  Array.from({ length: MAX_MOTES }, () => ({
    x: rng(),
    y: rng(),
    z: rng(), // 0 far … 1 near
    phase: rng() * TAU,
    breathe: 6 + rng() * 8,
  }));

// A soft round light, pre-rendered once and stamped many times.
const makeSprite = (rgb, stops) => {
  const size = 64;
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const g = c.getContext("2d");
  const grad = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  stops.forEach(([at, a]) => grad.addColorStop(at, `rgba(${rgb},${a})`));
  g.fillStyle = grad;
  g.fillRect(0, 0, size, size);
  return c;
};

export const StarBackground = ({
  fixed = true,
  density = 6500,
  className = "",
  orbit = true,
  meteors = true,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const root = document.documentElement;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const rng = mulberry32((Math.random() * 4294967296) >>> 0);
    const stars = makeStars(rng);
    const motes = makeMotes(rng);

    const starStops = [[0, 1], [0.25, 0.5], [0.6, 0.1], [1, 0]];
    const starSprites = {
      blue: makeSprite(TINTS.blue, starStops),
      cream: makeSprite(TINTS.cream, starStops),
      green: makeSprite(TINTS.green, starStops),
    };
    const orbitSprite = makeSprite(ORBIT_TINT, [[0, 1], [0.2, 0.55], [0.55, 0.12], [1, 0]]);
    const moteSprite = makeSprite(MOTE_TINT, [[0, 0.9], [0.4, 0.4], [1, 0]]);

    let w = 0;
    let h = 0;
    let starCount = 0;
    let moteCount = 0;
    let reduce = motion.matches;
    let inView = true;
    let raf = 0;
    let last = 0;
    let time = 0;

    // 0 = night, 1 = day. Eases toward the theme so toggling never cuts.
    let target = root.classList.contains("dark") ? 0 : 1;
    let mix = target;

    const pass = { active: false, nextAt: 3 + Math.random() * 3 };
    const setOrbitFlag = (state) => {
      canvas.dataset.orbit = state;
    };
    setOrbitFlag("idle");

    const startPass = () => {
      const dir = Math.random() < 0.5 ? 1 : -1;
      const y0 = 0.1 + Math.random() * 0.4;
      pass.active = true;
      pass.start = time;
      pass.dur = 17 + Math.random() * 6;
      pass.dir = dir;
      pass.y0 = y0;
      pass.y1 = clamp(y0 + (Math.random() - 0.5) * 0.14, 0.06, 0.6);
      pass.arc = 0.04 + Math.random() * 0.05;
      pass.phase = Math.random() * TAU;
      setOrbitFlag("active");
    };

    // Fine meteors: a thin head with a tapering tail, brief and unhurried.
    const streaks = [];
    let nextStreakAt = 2 + Math.random() * 3;
    let streakCount = 0;

    const spawnStreak = () => {
      const dir = Math.random() < 0.5 ? 1 : -1;
      const angle = ((18 + Math.random() * 24) * Math.PI) / 180;
      const speed = 560 + Math.random() * 380; // px per second
      const dist = Math.min(w, 1400) * (0.32 + Math.random() * 0.28);
      streaks.push({
        x0: dir > 0 ? w * (-0.05 + Math.random() * 0.65) : w * (0.4 + Math.random() * 0.65),
        y0: h * (0.02 + Math.random() * 0.42),
        dx: Math.cos(angle) * dir,
        dy: Math.sin(angle),
        dist,
        dur: dist / speed,
        start: time,
        len: 110 + Math.random() * 90,
        peak: 0.55 + Math.random() * 0.25,
      });
      streakCount += 1;
      canvas.dataset.meteors = String(streakCount);
    };

    const drawStreaks = (alpha) => {
      for (let i = streaks.length - 1; i >= 0; i -= 1) {
        const m = streaks[i];
        const p = (time - m.start) / m.dur;
        if (p >= 1) {
          streaks.splice(i, 1);
          continue;
        }
        const hx = m.x0 + m.dx * m.dist * p;
        const hy = m.y0 + m.dy * m.dist * p;
        const tail = m.len * smooth(0, 0.25, p) * (1 - 0.5 * smooth(0.6, 1, p));
        const a = m.peak * smooth(0, 0.12, p) * (1 - smooth(0.55, 1, p)) * alpha;
        if (a <= 0.01) continue;

        const tx = hx - m.dx * tail;
        const ty = hy - m.dy * tail;
        const g = ctx.createLinearGradient(hx, hy, tx, ty);
        g.addColorStop(0, `rgba(255,255,255,${a})`);
        g.addColorStop(0.35, `rgba(205,222,255,${a * 0.4})`);
        g.addColorStop(1, "rgba(205,222,255,0)");
        ctx.globalAlpha = 1;
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.2;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(hx, hy);
        ctx.lineTo(tx, ty);
        ctx.stroke();

        ctx.globalAlpha = a * 0.5;
        ctx.drawImage(orbitSprite, hx - 6, hy - 6, 12, 12);
        ctx.globalAlpha = a;
        ctx.fillStyle = "rgb(255,255,255)";
        ctx.beginPath();
        ctx.arc(hx, hy, 0.9, 0, TAU);
        ctx.fill();
      }
    };

    const drawStars = (alpha, still) => {
      for (let i = 0; i < starCount; i += 1) {
        const s = stars[i];
        const reveal = easeOutCubic(clamp((time - s.delay) / 1.4));
        if (reveal <= 0) continue;
        const tw = still ? 0 : 0.5 + 0.5 * Math.sin((TAU * time) / s.period + s.phase);
        const a = s.base * (1 - s.depth * tw) * reveal * alpha;
        const x = s.x * w;
        const y = s.y * h;

        if (s.z === 2) {
          const halo = s.r * 9;
          ctx.globalAlpha = a * 0.32;
          ctx.drawImage(starSprites[s.tint], x - halo / 2, y - halo / 2, halo, halo);
        }
        ctx.globalAlpha = a;
        ctx.fillStyle = `rgb(${TINTS[s.tint]})`;
        ctx.beginPath();
        ctx.arc(x, y, s.r, 0, TAU);
        ctx.fill();
      }
    };

    const drawOrbit = (alpha) => {
      if (!pass.active) return;
      const p = (time - pass.start) / pass.dur;
      if (p >= 1) {
        pass.active = false;
        pass.nextAt = time + 12 + Math.random() * 10;
        setOrbitFlag("idle");
        return;
      }
      const from = pass.dir > 0 ? -0.03 : 1.03;
      const to = pass.dir > 0 ? 1.03 : -0.03;
      const x = lerp(from, to, p) * w;
      const y = (lerp(pass.y0, pass.y1, p) - pass.arc * Math.sin(Math.PI * p)) * h;
      const envelope = smooth(0, 0.1, p) * (1 - smooth(0.9, 1, p));
      const glint = 0.78 + 0.22 * Math.sin(TAU * p * 2.5 + pass.phase);
      const a = envelope * glint * alpha;
      if (a <= 0.002) return;

      ctx.globalAlpha = a * 0.45;
      ctx.drawImage(orbitSprite, x - 9, y - 9, 18, 18);
      ctx.globalAlpha = a * 0.95;
      ctx.fillStyle = `rgb(${ORBIT_TINT})`;
      ctx.beginPath();
      ctx.arc(x, y, 1.25, 0, TAU);
      ctx.fill();
    };

    const drawDay = (alpha, dt, still) => {
      // soft sun in the upper-right corner
      const cx = w * 0.9;
      const cy = -h * 0.1;
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 0.75);
      glow.addColorStop(0, `rgba(255,214,140,${0.16 * alpha})`);
      glow.addColorStop(1, "rgba(255,214,140,0)");
      ctx.globalAlpha = 1;
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < moteCount; i += 1) {
        const m = motes[i];
        if (!still) {
          m.x += ((3 + m.z * 9) / w) * dt;
          m.y -= ((2 + m.z * 7) / h) * dt;
          if (m.x > 1.04) m.x -= 1.08;
          if (m.y < -0.04) m.y += 1.08;
        }
        const sway = still ? 0 : Math.sin(time * 0.35 + m.phase) * (6 + m.z * 8);
        const x = m.x * w + sway;
        const y = m.y * h;
        const edge =
          smooth(0, 0.07, m.x) * (1 - smooth(0.93, 1, m.x)) *
          smooth(0, 0.07, m.y) * (1 - smooth(0.93, 1, m.y));
        const breathe = still ? 1 : 0.72 + 0.28 * Math.sin((TAU * time) / m.breathe + m.phase);
        const a = (0.1 + m.z * 0.16) * edge * breathe * alpha;
        if (a <= 0.003) continue;
        const size = (1.2 + m.z * 3.2) * 4;
        ctx.globalAlpha = a;
        ctx.drawImage(moteSprite, x - size / 2, y - size / 2, size, size);
      }
    };

    const frame = (dt, still) => {
      ctx.clearRect(0, 0, w, h);
      const intro = still ? 1 : easeOutCubic(clamp(time / 1.8));
      const night = (1 - mix) * intro;
      const day = mix * intro;

      if (night > 0.003) {
        drawStars(night, still);
        if (orbit && !still) {
          if (!pass.active && time >= pass.nextAt) startPass();
          drawOrbit(night);
        }
        if (meteors && !still) {
          if (night > 0.6 && time >= nextStreakAt) {
            spawnStreak();
            nextStreakAt = time + 5 + Math.random() * 8;
          }
          drawStreaks(night);
        }
      }
      if (day > 0.003) drawDay(day, dt, still);
      ctx.globalAlpha = 1;
    };

    const tick = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      time += dt;
      mix += (target - mix) * (1 - Math.exp(-dt * 5));
      if (Math.abs(target - mix) < 0.002) mix = target;
      frame(dt, false);
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (raf || reduce || document.hidden || !inView) return;
      last = performance.now();
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    // Reduced motion: draw one still frame and leave it alone.
    const drawStill = () => {
      time = 10;
      mix = target;
      frame(0, true);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // a floor keeps small screens from feeling empty
      starCount = clamp(Math.floor((w * h) / density), 40, MAX_STARS);
      moteCount = clamp(Math.floor((w * h) / (fixed ? 26000 : 35000)), 12, MAX_MOTES);
      if (reduce) drawStill();
    };

    const onTheme = () => {
      target = root.classList.contains("dark") ? 0 : 1;
      if (reduce) drawStill();
    };
    const onMotion = () => {
      reduce = motion.matches;
      stop();
      if (reduce) drawStill();
      else start();
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const themeObserver = new MutationObserver(onTheme);
    themeObserver.observe(root, { attributes: true, attributeFilter: ["class"] });

    let viewObserver;
    if (!fixed) {
      viewObserver = new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting;
        if (inView) start();
        else stop();
      });
      viewObserver.observe(canvas);
    }

    motion.addEventListener("change", onMotion);
    document.addEventListener("visibilitychange", onVisibility);

    resize();
    if (reduce) drawStill();
    else start();

    return () => {
      stop();
      resizeObserver.disconnect();
      themeObserver.disconnect();
      if (viewObserver) viewObserver.disconnect();
      motion.removeEventListener("change", onMotion);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [fixed, density, orbit, meteors]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`${fixed ? "fixed" : "absolute"} inset-0 w-full h-full pointer-events-none ${
        className || "z-0"
      }`}
    />
  );
};
