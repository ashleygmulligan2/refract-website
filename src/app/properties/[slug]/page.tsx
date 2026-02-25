import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { properties, getPropertyBySlug } from "@/data/properties";
import { PhotoGallery } from "@/components/PhotoGallery";
import { AmenitySection } from "@/components/AmenitySection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return { title: "Property Not Found" };

  return {
    title: `${property.name} | Refract`,
    description: property.tagline,
  };
}

export default async function PropertyPage({ params }: PageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) notFound();

  return (
    <div className="pb-24 pt-24">
      {/* Back link */}
      <div className="mx-auto max-w-7xl px-6">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-stone-400 transition-colors hover:text-white"
        >
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
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          All Properties
        </Link>
      </div>

      {/* Photo Gallery */}
      <div className="mx-auto max-w-7xl px-6">
        <PhotoGallery images={property.images} propertyName={property.name} />
      </div>

      {/* Property Info */}
      <div className="mx-auto mt-10 max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content — 2 cols */}
          <div className="space-y-12 lg:col-span-2">
            {/* Title & Quick Stats */}
            <div>
              <h1 className="font-display text-4xl tracking-tight text-white sm:text-5xl">
                {property.name}
              </h1>
              <p className="mt-2 flex items-center gap-2 text-lg text-stone-400">
                <svg
                  className="h-5 w-5 text-sand-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z"
                  />
                </svg>
                {property.location}
              </p>

              {/* Quick stats bar */}
              <div className="mt-6 flex flex-wrap gap-6 border-b border-t border-stone-800 py-5">
                <Stat
                  icon={
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  }
                  label={`${property.guests} guests`}
                />
                <Stat
                  icon={
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                    </svg>
                  }
                  label={`${property.bedrooms} bedrooms`}
                />
                <Stat
                  icon={
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811Z" />
                    </svg>
                  }
                  label={`${property.beds} beds`}
                />
                <Stat
                  icon={
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  }
                  label={`${property.bathrooms} baths`}
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="section-heading">About this property</h2>
              <p className="mt-4 text-lg leading-relaxed text-stone-300">
                {property.description}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="section-heading">Highlights</h2>
              <div className="mt-6 space-y-4">
                {property.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-4 rounded-xl border border-stone-800 bg-stone-900/50 p-4"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sand-400/10">
                      <svg
                        className="h-5 w-5 text-sand-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z"
                        />
                      </svg>
                    </div>
                    <span className="pt-2 text-stone-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <AmenitySection amenities={property.amenities} />
          </div>

          {/* Sidebar — Booking CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 rounded-2xl border border-stone-800 bg-stone-900/50 p-6">
              <div className="mb-6">
                <h3 className="font-display text-2xl text-white">
                  Book Your Stay
                </h3>
                <p className="mt-2 text-sm text-stone-400">
                  Check availability and reserve this property on Airbnb.
                </p>
              </div>

              {/* Property quick stats */}
              <div className="mb-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-stone-800/50 p-3 text-center">
                  <p className="text-2xl font-semibold text-white">
                    {property.guests}
                  </p>
                  <p className="text-xs text-stone-400">Guests</p>
                </div>
                <div className="rounded-xl bg-stone-800/50 p-3 text-center">
                  <p className="text-2xl font-semibold text-white">
                    {property.bedrooms}
                  </p>
                  <p className="text-xs text-stone-400">Bedrooms</p>
                </div>
                <div className="rounded-xl bg-stone-800/50 p-3 text-center">
                  <p className="text-2xl font-semibold text-white">
                    {property.beds}
                  </p>
                  <p className="text-xs text-stone-400">Beds</p>
                </div>
                <div className="rounded-xl bg-stone-800/50 p-3 text-center">
                  <p className="text-2xl font-semibold text-white">
                    {property.bathrooms}
                  </p>
                  <p className="text-xs text-stone-400">Baths</p>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={property.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.001 18.35c-.68-.68-5.74-7.04-5.74-10.36C6.261 4.73 8.731 2 12.001 2s5.74 2.73 5.74 5.99c0 3.32-5.06 9.68-5.74 10.36zm0-8.57c1.29 0 2.34-1.05 2.34-2.34s-1.05-2.34-2.34-2.34-2.34 1.05-2.34 2.34 1.05 2.34 2.34 2.34z" />
                </svg>
                View on Airbnb
              </a>

              <p className="mt-4 text-center text-xs text-stone-500">
                You&apos;ll be redirected to Airbnb to complete your booking
              </p>

              {/* Divider */}
              <div className="my-6 border-t border-stone-800" />

              {/* Contact */}
              <div className="text-center">
                <p className="text-sm text-stone-400">
                  Questions about this property?
                </p>
                <button className="btn-outline mt-3 w-full text-sm">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-stone-300">
      <span className="text-sand-400">{icon}</span>
      <span className="text-sm">{label}</span>
    </div>
  );
}
