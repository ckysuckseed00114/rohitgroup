import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center">
      <p
        className="text-8xl font-black text-[#dc143c] mb-4"
        style={{ fontFamily: "var(--font-orbitron)" }}
      >
        404
      </p>
      <h1 className="text-xl tracking-[0.3em] uppercase mb-6">Page Not Found</h1>
      <p className="text-white/50 mb-10 max-w-md">
        The realm you seek does not exist. Return to the King.
      </p>
      <Link
        href="/"
        className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#dc143c] to-[#8b0000] text-sm font-bold tracking-[0.2em] uppercase"
      >
        Back to ROHIT
      </Link>
    </main>
  );
}
