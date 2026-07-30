import { useEffect, useState } from "react";

// Cali, Colombia — 3.4516° N, 76.5320° W
const CALI_COORDS = { lat: 3.4516, lon: -76.532 };

// Real orbital inclinations from aerospace work — each meteor's path angle
// is derived from one of these instead of being arbitrary
const ORBITAL_PATHS = [
  { name: "ISS orbit", inclination: 51.6 },
  { name: "Sun-synchronous orbit", inclination: 98 },
  { name: "Molniya orbit", inclination: 63.4 },
  { name: "Geostationary transfer", inclination: 0 },
];

// Deterministic PRNG seeded from Cali's coordinates, so the star field is
// anchored to a real place rather than reshuffled on every load
const CALI_SEED = Math.round(
  Math.abs(CALI_COORDS.lat * 10000) + Math.abs(CALI_COORDS.lon * 10000)
);

function mulberry32(seed) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const rng = mulberry32(CALI_SEED);
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: rng() * 3 + 1,
        x: rng() * 100,
        y: rng() * 100,
        opacity: rng() * 0.5 + 0.5,
        animationDuration: rng() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const newMeteors = ORBITAL_PATHS.map((orbit, i) => ({
      id: i,
      name: orbit.name,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 20,
      delay: Math.random() * 15,
      animationDuration: Math.random() * 3 + 3,
      angle: 200 + orbit.inclination * 0.35,
    }));

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
            "--meteor-angle": meteor.angle + "deg",
          }}
        />
      ))}

      <span className="absolute bottom-3 left-3 text-[10px] tracking-widest font-mono text-white/25 select-none">
        3.4516° N, 76.5320° W — CALI
      </span>
    </div>
  );
};
