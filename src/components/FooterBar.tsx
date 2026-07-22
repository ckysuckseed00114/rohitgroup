"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MusicPlayer from "./MusicPlayer";

export default function FooterBar() {
  const [adminHover, setAdminHover] = useState(false);

  return (
    <footer className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-4 px-6 sm:px-10 py-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
      <motion.button
        className="glass-panel px-4 py-2 rounded-full text-[10px] tracking-[0.3em] uppercase font-bold
          hover:border-[#dc143c]/50 transition-all duration-300"
        data-cursor="pointer"
        onMouseEnter={() => setAdminHover(true)}
        onMouseLeave={() => setAdminHover(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className={adminHover ? "text-[#dc143c]" : "text-white/70"}>
          {adminHover ? "▸ ACCESS GRANTED" : "ADMIN"}
        </span>
      </motion.button>

      <p className="text-[10px] tracking-[0.25em] text-white/40 uppercase order-last sm:order-none">
        SYSTEM DESIGN BY <strong className="text-[#dc143c]/70">ROHIT</strong>
      </p>

      <MusicPlayer />
    </footer>
  );
}
