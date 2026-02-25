import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-stone-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/" className="font-display text-xl text-white">
            Refract
          </Link>
          <p className="text-sm text-stone-500">
            &copy; {new Date().getFullYear()} Refract. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
