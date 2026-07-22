export default function ScanlineOverlay() {
  return (
    <div className="fixed inset-0 z-[2] pointer-events-none overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
        }}
      />
      <div
        className="absolute left-0 right-0 h-32 opacity-[0.04]"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(220,20,60,0.5), transparent)",
          animation: "scanline 8s linear infinite",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{ animation: "noise 0.5s steps(10) infinite" }}
      />
    </div>
  );
}
