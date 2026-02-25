export interface Property {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  description: string;
  airbnbUrl: string;
  heroImage: string;
  images: string[];
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  amenities: { category: string; items: string[] }[];
  highlights: string[];
}

export const properties: Property[] = [
  {
    slug: "palm-springs-estate",
    name: "Palm Springs Estate",
    tagline: "Mid-century modern desert retreat with mountain views",
    location: "Palm Springs, California",
    description:
      "Escape to this stunning mid-century modern estate nestled in the heart of Palm Springs. Floor-to-ceiling windows frame breathtaking views of the San Jacinto Mountains, while the open-concept living spaces flow seamlessly to the outdoor entertaining area. The resort-style pool and spa are surrounded by mature desert landscaping, creating an oasis of tranquility. Recently renovated with designer finishes throughout, this home blends iconic architecture with modern luxury.",
    airbnbUrl: "https://www.airbnb.com",
    heroImage:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80",
    ],
    guests: 8,
    bedrooms: 4,
    beds: 5,
    bathrooms: 3,
    amenities: [
      {
        category: "Outdoor",
        items: [
          "Private heated pool",
          "Hot tub",
          "Outdoor dining area",
          "Fire pit",
          "Mountain views",
          "Desert garden",
        ],
      },
      {
        category: "Kitchen & Dining",
        items: [
          "Fully equipped chef's kitchen",
          "Stainless steel appliances",
          "Wine fridge",
          "Espresso machine",
          "Dishwasher",
          "Outdoor BBQ grill",
        ],
      },
      {
        category: "Entertainment",
        items: [
          "75\" Smart TV",
          "Sonos sound system",
          "Board games",
          "Books & magazines",
        ],
      },
      {
        category: "Essentials",
        items: [
          "High-speed WiFi",
          "Central AC & heating",
          "Washer & dryer",
          "Free parking",
          "Linens & towels provided",
          "Hair dryer",
        ],
      },
    ],
    highlights: [
      "Self check-in with smart lock",
      "Free cancellation for 48 hours",
      "Sparkling clean — 5-star rating",
    ],
  },
  {
    slug: "joshua-tree-cabin",
    name: "Joshua Tree Cabin",
    tagline: "A stargazer's paradise in the high desert",
    location: "Joshua Tree, California",
    description:
      "Disconnect and recharge at this beautifully designed cabin on five private acres in Joshua Tree. Built with soaring ceilings and expansive windows, every room captures the raw beauty of the desert landscape. Spend your days hiking in the national park and your evenings soaking in the outdoor tub under a canopy of stars. The minimalist interior features curated vintage furniture, local art, and all the comforts of home.",
    airbnbUrl: "https://www.airbnb.com",
    heroImage:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1920&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1920&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80",
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1920&q=80",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1920&q=80",
    ],
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
    amenities: [
      {
        category: "Outdoor",
        items: [
          "Outdoor soaking tub",
          "Fire pit",
          "Stargazing deck",
          "Hammock",
          "Desert views",
          "Hiking trails nearby",
        ],
      },
      {
        category: "Kitchen & Dining",
        items: [
          "Full kitchen",
          "Pour-over coffee setup",
          "Gas stove",
          "Outdoor dining table",
          "Basic pantry staples",
        ],
      },
      {
        category: "Entertainment",
        items: [
          "Bluetooth speaker",
          "Vinyl record player",
          "Telescope",
          "Books & field guides",
        ],
      },
      {
        category: "Essentials",
        items: [
          "Starlink WiFi",
          "Mini-split AC & heating",
          "Washer & dryer",
          "Free parking",
          "Luxury linens",
          "Eco-friendly toiletries",
        ],
      },
    ],
    highlights: [
      "Self check-in with lockbox",
      "5 private acres of desert",
      "10 minutes to national park entrance",
    ],
  },
  {
    slug: "malibu-beach-house",
    name: "Malibu Beach House",
    tagline: "Oceanfront living on the Pacific Coast",
    location: "Malibu, California",
    description:
      "Wake up to the sound of waves at this spectacular oceanfront home on one of Malibu's most coveted stretches of coastline. The light-filled interior showcases whitewashed woods, natural textures, and panoramic ocean views from nearly every room. Step directly onto the sand from your private deck, or relax in the infinity-edge pool perched above the Pacific. This is coastal California living at its finest.",
    airbnbUrl: "https://www.airbnb.com",
    heroImage:
      "https://images.unsplash.com/photo-1499793983394-12903e570d0b?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1499793983394-12903e570d0b?w=1920&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1920&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1920&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80",
    ],
    guests: 10,
    bedrooms: 5,
    beds: 6,
    bathrooms: 4,
    amenities: [
      {
        category: "Outdoor",
        items: [
          "Private beach access",
          "Infinity pool",
          "Ocean-view deck",
          "Outdoor shower",
          "Fire pit on the sand",
          "Surfboard storage",
        ],
      },
      {
        category: "Kitchen & Dining",
        items: [
          "Professional chef's kitchen",
          "Sub-Zero refrigerator",
          "Wine cellar",
          "Espresso machine",
          "Outdoor kitchen & grill",
          "Dining for 12",
        ],
      },
      {
        category: "Entertainment",
        items: [
          "Home theater",
          "Multi-room Sonos",
          "Game room",
          "Paddleboards & kayaks",
        ],
      },
      {
        category: "Essentials",
        items: [
          "High-speed WiFi",
          "Central AC & heating",
          "Washer & dryer",
          "3-car garage",
          "Luxury bath amenities",
          "Daily housekeeping available",
        ],
      },
    ],
    highlights: [
      "Direct beach access from the property",
      "Concierge service available",
      "Featured in Architectural Digest",
    ],
  },
  {
    slug: "sedona-red-rock-villa",
    name: "Sedona Red Rock Villa",
    tagline: "Luxury hillside villa with panoramic red rock views",
    location: "Sedona, Arizona",
    description:
      "Perched on a private hillside in Sedona, this architectural masterpiece offers unobstructed 270-degree views of the iconic red rock formations. The Southwest-inspired design features natural stone, exposed beam ceilings, and walls of glass that blur the line between indoor and outdoor living. Watch the sunset paint Cathedral Rock in shades of crimson and gold from your private infinity pool, or unwind in the meditation garden surrounded by native flora.",
    airbnbUrl: "https://www.airbnb.com",
    heroImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80",
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1920&q=80",
    ],
    guests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 3,
    amenities: [
      {
        category: "Outdoor",
        items: [
          "Infinity pool with red rock views",
          "Hot tub",
          "Meditation garden",
          "Outdoor fireplace",
          "Observation deck",
          "Private hiking trail",
        ],
      },
      {
        category: "Kitchen & Dining",
        items: [
          "Gourmet kitchen",
          "Gas range",
          "Built-in espresso machine",
          "Wine fridge",
          "Al fresco dining terrace",
        ],
      },
      {
        category: "Entertainment",
        items: [
          "65\" Smart TV",
          "Yoga mats & props",
          "Telescope for stargazing",
          "Curated book collection",
        ],
      },
      {
        category: "Essentials",
        items: [
          "High-speed WiFi",
          "Radiant floor heating",
          "Central AC",
          "EV charger",
          "Spa-quality linens",
          "Organic bath products",
        ],
      },
    ],
    highlights: [
      "270-degree red rock views",
      "Private trail to national forest",
      "Voted best vacation rental in Sedona",
    ],
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}
