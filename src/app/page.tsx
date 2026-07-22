"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BackgroundLayer from "@/components/BackgroundLayer";
import ParticleField from "@/components/ParticleField";
import CustomCursor from "@/components/CustomCursor";
import ScanlineOverlay from "@/components/ScanlineOverlay";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/HeroSection";
import FooterBar from "@/components/FooterBar";
import SectionModal from "@/components/SectionModal";

export type Section = "family" | "gang" | null;

const sectionContent = {
  family: {
    title: "ROHIT FAMILY",
    tagline: "Blood runs thicker. Loyalty runs deepest.",
    description:
      "The inner circle. Those who stand beside the King through every battle, every rise, every fall. Family is not given — it is earned.",
    stats: [
      { label: "MEMBERS", value: "∞" },
      { label: "LOYALTY", value: "100%" },
      { label: "STATUS", value: "ELITE" },
    ],
  },
  gang: {
    title: "ROHIT GANG",
    tagline: "We don't follow rules. We set them.",
    description:
      "The street empire. Fearless, relentless, untouchable. When ROHIT moves, the world watches. Join the movement or get out of the way.",
    stats: [
      { label: "TERRITORY", value: "GLOBAL" },
      { label: "POWER", value: "MAX" },
      { label: "FEAR", value: "TOTAL" },
    ],
  },
};

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      <ScanlineOverlay />

      <AnimatePresence mode="wait">
        {!loaded && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative min-h-screen flex flex-col"
      >
        <BackgroundLayer />
        <ParticleField />

        <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-12">
          <HeroSection onOpenSection={setActiveSection} />
        </main>

        <FooterBar />
      </motion.div>

      <SectionModal
        section={activeSection}
        content={activeSection ? sectionContent[activeSection] : null}
        onClose={() => setActiveSection(null)}
      />
    </>
  );
}
