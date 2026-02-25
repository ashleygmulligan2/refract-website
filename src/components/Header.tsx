"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link
          href="/"
          className="relative z-10 font-display text-2xl tracking-tight text-white"
        >
          Refract
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm text-stone-300 transition-colors hover:text-white"
          >
            Properties
          </Link>
          <Link
            href="/#about"
            className="text-sm text-stone-300 transition-colors hover:text-white"
          >
            About
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-10 flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="fixed inset-0 z-0 flex items-center justify-center bg-stone-950/98 md:hidden">
            <nav className="flex flex-col items-center gap-8">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="font-display text-3xl text-white"
              >
                Properties
              </Link>
              <Link
                href="/#about"
                onClick={() => setMobileOpen(false)}
                className="font-display text-3xl text-white"
              >
                About
              </Link>
            </nav>
          </div>
        )}
      </div>

      {/* Gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-stone-950 via-stone-950/80 to-transparent" />
    </header>
  );
}
