"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  const letters = ["R", "O", "H", "I", "T"];

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative mb-8">
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[#dc143c]/30"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ width: 120, height: 120, margin: "auto", top: -30, left: -30 }}
        />
        <div className="flex gap-2">
          {letters.map((letter, i) => (
            <motion.span
              key={letter}
              className="text-5xl md:text-7xl font-black tracking-widest text-glow"
              style={{ fontFamily: "var(--font-orbitron)" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>

      <motion.div
        className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-[#dc143c] to-[#ff0040] rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.p
        className="mt-6 text-xs tracking-[0.4em] text-[#888] uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.5, 1] }}
        transition={{ delay: 0.8, duration: 1.5 }}
      >
        Initializing...
      </motion.p>
    </motion.div>
  );
}
