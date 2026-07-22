"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Logo3D() {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <div
      ref={ref}
      className="relative perspective-[1000px]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      data-cursor="pointer"
    >
      <motion.div
        className={`relative ${!isHovered ? "animate-spin-3d" : ""}`}
        style={
          isHovered
            ? { rotateX, rotateY, transformStyle: "preserve-3d" }
            : { transformStyle: "preserve-3d" }
        }
      >
        <div
          className={`absolute inset-0 rounded-full blur-3xl transition-opacity duration-500 ${
            isHovered ? "opacity-60" : "opacity-30"
          }`}
          style={{
            background: "radial-gradient(circle, rgba(220,20,60,0.6) 0%, transparent 70%)",
            transform: "translateZ(-50px)",
          }}
        />

        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 animate-float">
          <Image
            src="/picture/logo.png"
            alt="ROHIT Logo"
            fill
            className="object-contain drop-shadow-[0_0_30px_rgba(220,20,60,0.5)]"
            priority
            sizes="(max-width: 768px) 192px, 256px"
          />
        </div>
      </motion.div>

      <div className="absolute -inset-4 rounded-full border border-[#dc143c]/20 animate-pulse-ring pointer-events-none" />
    </div>
  );
}
