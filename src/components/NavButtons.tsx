"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import type { Section } from "@/app/page";

interface NavButtonsProps {
  onOpenSection: (section: Section) => void;
}

const buttons = [
  { id: "family" as const, label: "ROHIT FAMILY", icon: "◆" },
  { id: "gang" as const, label: "ROHIT GANG", icon: "★" },
];

function MagneticButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden glass-panel px-8 py-4 rounded-lg
        text-sm font-bold tracking-[0.15em] uppercase
        transition-all duration-300 border-glow
        hover:border-[#dc143c]/60 hover:shadow-[0_0_30px_rgba(220,20,60,0.3)]"
      data-cursor="pointer"
      whileTap={{ scale: 0.95 }}
    >
      <span
        className="absolute inset-0 bg-gradient-to-r from-[#dc143c]/0 via-[#dc143c]/10 to-[#dc143c]/0
          translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
      />
      <span className="relative flex items-center gap-3">
        {children}
      </span>
    </motion.button>
  );
}

export default function NavButtons({ onOpenSection }: NavButtonsProps) {
  return (
    <nav className="flex flex-wrap gap-4 justify-center">
      {buttons.map((btn, i) => (
        <motion.div
          key={btn.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 + i * 0.15 }}
        >
          <MagneticButton onClick={() => onOpenSection(btn.id)}>
            <span className="text-[#dc143c] text-xs">{btn.icon}</span>
            {btn.label}
          </MagneticButton>
        </motion.div>
      ))}
    </nav>
  );
}
