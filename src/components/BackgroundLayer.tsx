"use client";

import Image from "next/image";

export default function BackgroundLayer() {
  return (
    <div className="fixed inset-0 z-0">
      <Image
        src="/picture/bg.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,20,60,0.15)_0%,transparent_50%)]" />
    </div>
  );
}
