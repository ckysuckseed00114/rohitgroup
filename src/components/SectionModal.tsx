"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Section } from "@/app/page";

interface SectionContent {
  title: string;
  tagline: string;
  description: string;
  stats: { label: string; value: string }[];
}

interface SectionModalProps {
  section: Section;
  content: SectionContent | null;
  onClose: () => void;
}

export default function SectionModal({ section, content, onClose }: SectionModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (section) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [section, onClose]);

  return (
    <AnimatePresence>
      {section && content && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative w-full max-w-lg glass-panel rounded-2xl p-8 md:p-10 border-glow overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            data-cursor="pointer"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#dc143c] to-transparent" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center
                text-white/40 hover:text-[#dc143c] transition-colors text-lg"
              data-cursor="pointer"
              aria-label="Close"
            >
              ✕
            </button>

            <p
              className="text-[10px] tracking-[0.4em] text-[#dc143c] uppercase mb-2"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              // ENTER THE REALM
            </p>

            <h2
              className="text-3xl md:text-4xl font-black tracking-wider text-glow mb-2"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              {content.title}
            </h2>

            <p className="text-sm text-[#dc143c]/80 tracking-widest uppercase mb-6">
              {content.tagline}
            </p>

            <p className="text-sm text-white/60 leading-relaxed mb-8">
              {content.description}
            </p>

            <div className="grid grid-cols-3 gap-4">
              {content.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-3 rounded-lg bg-white/5 border border-white/5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <p
                    className="text-xl md:text-2xl font-black text-[#dc143c]"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[9px] tracking-[0.2em] text-white/40 mt-1 uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={onClose}
              className="mt-8 w-full py-3 rounded-lg bg-gradient-to-r from-[#dc143c] to-[#8b0000]
                text-sm font-bold tracking-[0.2em] uppercase
                hover:shadow-[0_0_30px_rgba(220,20,60,0.4)] transition-shadow duration-300"
              data-cursor="pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              ENTER
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
