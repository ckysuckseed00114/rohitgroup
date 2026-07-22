"use client";

import { useEffect, useState } from "react";

const LETTERS = ["R", "O", "H", "I", "T"];
const DELAYS = [0, 0.2, 0.4, 0.6, 0.8];

export default function AnimatedTitle() {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[0.3em] md:tracking-[0.5em] select-none ${
        glitchActive ? "animate-glitch" : ""
      }`}
      style={{ fontFamily: "var(--font-orbitron)" }}
    >
      {LETTERS.map((letter, i) => (
        <span
          key={letter}
          className="inline-block animate-sink text-glow"
          style={{ animationDelay: `${DELAYS[i]}s`, verticalAlign: "bottom" }}
        >
          {letter}
        </span>
      ))}
    </h1>
  );
}
