"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if ("ontouchstart" in window) {
      setIsTouch(true);
      document.body.style.cursor = "auto";
    }
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const enter = () => setVisible(true);
    const leave = () => setVisible(false);
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-cursor='pointer'], input, .music-player");
      setHovering(!!interactive);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousemove", checkHover);
    document.addEventListener("mouseenter", enter);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", checkHover);
      document.removeEventListener("mouseenter", enter);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup", up);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        animate={{
          x: pos.x - 6,
          y: pos.y - 6,
          scale: clicking ? 0.6 : hovering ? 2.5 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div
          className={`w-3 h-3 rounded-full border-2 transition-colors duration-200 ${
            hovering ? "border-white bg-white/20" : "border-[#dc143c] bg-[#dc143c]/30"
          }`}
        />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          opacity: visible ? 0.4 : 0,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8 }}
      >
        <div className="w-10 h-10 rounded-full border border-[#dc143c]/50" />
      </motion.div>
    </>
  );
}
