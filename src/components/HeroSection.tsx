"use client";

import { motion } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";
import Logo3D from "./Logo3D";
import NavButtons from "./NavButtons";
import type { Section } from "@/app/page";

interface HeroSectionProps {
  onOpenSection: (section: Section) => void;
}

export default function HeroSection({ onOpenSection }: HeroSectionProps) {
  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <AnimatedTitle />
      </motion.div>

      <motion.p
        className="mt-6 text-sm md:text-base tracking-[0.5em] text-[#aaa] uppercase"
        style={{ fontFamily: "var(--font-orbitron)" }}
        initial={{ opacity: 0, letterSpacing: "0.2em" }}
        animate={{ opacity: 1, letterSpacing: "0.5em" }}
        transition={{ delay: 0.8, duration: 1.2 }}
      >
        <span className="text-[#dc143c]">▸</span> KING OF EGOIST <span className="text-[#dc143c]">◂</span>
      </motion.p>

      <motion.div
        className="my-10 md:my-14"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8, type: "spring" }}
      >
        <Logo3D />
      </motion.div>

      <motion.div
        className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#dc143c] to-transparent mb-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <NavButtons onOpenSection={onOpenSection} />
      </motion.div>

      <motion.p
        className="mt-12 text-[10px] tracking-[0.3em] text-white/30 uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        Scroll to explore · Click to enter
      </motion.p>
    </div>
  );
}
