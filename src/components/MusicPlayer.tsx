"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [showVolume, setShowVolume] = useState(false);

  const toggleMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch {
      setIsPlaying(false);
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) audio.volume = volume;
  }, [volume]);

  return (
    <div className="flex items-center gap-3">
      <AnimatePresence>
        {showVolume && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            className="overflow-hidden"
          >
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-20 h-1 accent-[#dc143c] cursor-none"
              data-cursor="pointer"
              aria-label="Volume"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setShowVolume(!showVolume)}
        className="text-white/50 hover:text-[#dc143c] transition-colors text-xs"
        data-cursor="pointer"
        aria-label="Toggle volume slider"
      >
        {volume === 0 ? "🔇" : volume < 0.5 ? "🔉" : "🔊"}
      </button>

      <button
        onClick={toggleMusic}
        className="music-player group flex items-center gap-2 glass-panel px-4 py-2 rounded-full
          hover:border-[#dc143c]/40 transition-all duration-300"
        data-cursor="pointer"
      >
        {isPlaying && (
          <div className="flex items-end gap-[2px] h-4">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="w-[3px] bg-[#dc143c] rounded-full origin-bottom"
                style={{
                  animation: `bar-bounce 0.${6 + i}s ease-in-out infinite`,
                  height: `${8 + i * 3}px`,
                }}
              />
            ))}
          </div>
        )}

        <span className="text-sm">{isPlaying ? "🎶" : "🎵"}</span>
        <span className="text-[10px] tracking-[0.2em] uppercase font-bold">
          {isPlaying ? "NOW PLAYING" : "PLAY MUSIC"}
        </span>

        <audio ref={audioRef} loop preload="none">
          <source src="/picture/bg.mp3" type="audio/mpeg" />
        </audio>
      </button>
    </div>
  );
}
