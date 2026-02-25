import Image from "next/image";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/PropertyCard";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Desert landscape"
          fill
          className="object-cover"
          priority
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-stone-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/30" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="animate-fade-in-up text-sm font-medium uppercase tracking-[0.2em] text-sand-400">
            Curated Vacation Properties
          </p>
          <h1 className="animate-fade-in-up-delay-1 mt-6 font-display text-5xl leading-tight tracking-tight text-white sm:text-7xl lg:text-8xl">
            Your Next
            <br />
            Great Escape
          </h1>
          <p className="animate-fade-in-up-delay-2 mx-auto mt-6 max-w-xl text-lg text-stone-300">
            Handpicked homes in the most inspiring destinations. Each property
            is personally managed to ensure an unforgettable stay.
          </p>
          <div className="animate-fade-in-up-delay-3 mt-10">
            <a href="#properties" className="btn-primary">
              Explore Properties
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-stone-500/50 p-1.5">
            <div className="h-2 w-1 animate-bounce rounded-full bg-sand-400" />
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section id="properties" className="relative bg-stone-950 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sand-400">
              Our Collection
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-white sm:text-5xl">
              Featured Properties
            </h2>
            <p className="mt-4 text-lg text-stone-400">
              From desert retreats to coastal escapes, each home has been
              selected for its unique character and exceptional comfort.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {properties.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-stone-800 bg-stone-950 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-sand-400">
                About Refract
              </p>
              <h2 className="mt-4 font-display text-4xl tracking-tight text-white sm:text-5xl">
                Personally Managed,
                <br />
                Thoughtfully Curated
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-stone-400">
                Every property in our collection is one we personally manage and
                care for. We believe that a great vacation starts with an
                exceptional home — one that&apos;s been thoughtfully designed,
                meticulously maintained, and stocked with everything you need for
                a perfect stay.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-stone-400">
                From the moment you arrive, you&apos;ll feel the difference that
                personal attention makes. We&apos;re not a faceless platform —
                we&apos;re the people behind every property, and we&apos;re here
                to ensure your experience exceeds expectations.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                  alt="Luxury property interior"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-sand-400/20" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
