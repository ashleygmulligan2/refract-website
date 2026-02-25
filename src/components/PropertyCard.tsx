import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/data/properties";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/properties/${property.slug}`} className="property-card block">
      <div className="relative overflow-hidden">
        <Image
          src={property.heroImage}
          alt={property.name}
          width={800}
          height={600}
          className="property-card-image"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />

        {/* Location badge */}
        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-950/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
            <svg
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
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
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-xl text-white">{property.name}</h3>
        <p className="mt-1 text-sm text-stone-400">{property.tagline}</p>

        <div className="mt-4 flex items-center gap-4 text-xs text-stone-500">
          <span>{property.guests} guests</span>
          <span className="h-1 w-1 rounded-full bg-stone-600" />
          <span>{property.bedrooms} bedrooms</span>
          <span className="h-1 w-1 rounded-full bg-stone-600" />
          <span>{property.bathrooms} baths</span>
        </div>
      </div>
    </Link>
  );
}
