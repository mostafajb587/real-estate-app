import { Heart, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const properties = [
  {
    id: 1,
    title: "Brick Lane Realty",
    location: "210 Montreal Road, Canada",
    price: 4934,
    type: "Commercial",
    status: "For Sale",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    description:
      "Spacious commercial building ideal for offices or retail, located in the heart of Montreal.",
    bedrooms: 0,
    bathrooms: 2,
    area: 2500,
    yearBuilt: 2010,
    amenities: ["Parking", "Security System", "Elevator"],
    agent: {
      name: "Alice Johnson",
      phone: "+1 514-555-0192",
      email: "alice.johnson@example.com",
    },
  },
  {
    id: 2,
    title: "Sunny Apartment",
    location: "105 Sunrise Blvd, Florida",
    price: 2850,
    type: "Apartment",
    status: "For Rent",
    image:
      "https://images.openai.com/thumbnails/374bfa593a45bb151b36a6c03bcf261e.jpeg",
    description:
      "Modern apartment with lots of sunlight and open space, close to public transport and amenities.",
    bedrooms: 2,
    bathrooms: 1,
    area: 850,
    yearBuilt: 2015,
    amenities: ["Balcony", "Gym", "Pool"],
    agent: {
      name: "Tom Garcia",
      phone: "+1 305-555-0123",
      email: "tom.garcia@example.com",
    },
  },
  {
    id: 3,
    title: "Modern Loft",
    location: "88 King St, New York",
    price: 3600,
    type: "Loft",
    status: "For Sale",
    image:
      "https://res.cloudinary.com/brickandbatten/images/c_scale%2Cw_464%2Ch_299%2Cdpr_2/f_auto%2Cq_auto/v1659367745/wordpress_assets/Contemporary-House-57123-5-2_43096e0838/Contemporary-House-57123-5-2_43096e0838.jpg?_i=AA",
    description:
      "Stylish loft in the heart of NYC with high ceilings and modern finishes.",
    bedrooms: 1,
    bathrooms: 1,
    area: 1200,
    yearBuilt: 2018,
    amenities: ["Rooftop Access", "Smart Home System"],
    agent: {
      name: "Lara Smith",
      phone: "+1 212-555-0198",
      email: "lara.smith@example.com",
    },
  },

  {
    id: 4,
    title: "Cozy Cottage",
    location: "22 Maple Lane, Vermont",
    price: 2450,
    type: "Cottage",
    status: "For Sale",
    image:
      "https://www.nichiha.com/uploads/7-Modern-Homes-Using-Wall-Paneling-Right/Nichiha-ArchitecturalBlock-Modern.jpg?t=1629137943",
    description:
      "Charming cottage surrounded by nature, perfect for a quiet lifestyle or vacation home.",
    bedrooms: 3,
    bathrooms: 2,
    area: 1100,
    yearBuilt: 2005,
    amenities: ["Fireplace", "Garden", "Wood Flooring"],
    agent: {
      name: "Emma Clark",
      phone: "+1 802-555-0111",
      email: "emma.clark@example.com",
    },
  },
  {
    id: 5,
    title: "Downtown Office",
    location: "Main Street, Chicago",
    price: 5300,
    type: "Office",
    status: "For Rent",
    image:
      "https://lakesiderenovationanddesign.com/wp-content/uploads/2022/09/how-to-give-your-homes-exterior-a-modern-or-contemporary-look-01.jpg",
    description:
      "Spacious office space with modern interiors and excellent downtown visibility.",
    bedrooms: 0,
    bathrooms: 3,
    area: 3000,
    yearBuilt: 2012,
    amenities: ["Conference Rooms", "High-Speed Internet", "Cafeteria"],
    agent: {
      name: "George Miller",
      phone: "+1 312-555-0109",
      email: "george.miller@example.com",
    },
  },
  {
    id: 6,
    title: "Lakeview Villa",
    location: "Lakeside Rd, Michigan",
    price: 7400,
    type: "Villa",
    status: "For Sale",
    image:
      "https://res.cloudinary.com/brickandbatten/images/w_2560%2Ch_1920%2Cc_scale/f_auto%2Cq_auto/v1708985191/wordpress_assets/360694-IronOre-Black-A/360694-IronOre-Black-A.jpg?_i=AA",
    description:
      "Luxury villa with stunning lake views and private dock access.",
    bedrooms: 5,
    bathrooms: 4,
    area: 4000,
    yearBuilt: 2020,
    amenities: ["Private Pool", "Dock", "Home Theater"],
    agent: {
      name: "Sophia Turner",
      phone: "+1 248-555-0134",
      email: "sophia.turner@example.com",
    },
  },
  {
    id: 7,
    title: "Studio Flat",
    location: "Downtown, Boston",
    price: 1800,
    type: "Studio",
    status: "For Rent",
    image:
      "https://www.bhg.com/thmb/cFScTHszlpo9Yr2FJ7vdcouo3Hs%3D/1244x0/filters%3Ano_upscale%28%29%3Astrip_icc%28%29/white-wooden-house-garage-yellow-door-bf4f6e3a-8cdb8289cd7f49ef88879b8d550e1e60.jpg",
    description:
      "Modern studio flat ideal for young professionals, located in the heart of Boston.",
    bedrooms: 1,
    bathrooms: 1,
    area: 500,
    yearBuilt: 2018,
    amenities: ["Elevator Access", "Laundry Room", "Air Conditioning"],
    agent: {
      name: "Daniel Scott",
      phone: "+1 617-555-0199",
      email: "daniel.scott@example.com",
    },
  },
  {
    id: 8,
    title: "Luxury Penthouse",
    location: "Beverly Hills, LA",
    price: 12000,
    type: "Penthouse",
    status: "For Sale",
    image:
      "https://assets.allurausa.com/web/general-images/_1200x630_crop_center-center_82_none/Screenshot-2024-02-02-105417.png?mtime=1706892870",
    description:
      "Exclusive penthouse with panoramic city views, top-tier finishes and private terrace.",
    bedrooms: 4,
    bathrooms: 5,
    area: 4500,
    yearBuilt: 2021,
    amenities: ["Terrace", "Private Elevator", "Jacuzzi", "Smart Home System"],
    agent: {
      name: "Olivia Bennett",
      phone: "+1 310-555-0147",
      email: "olivia.bennett@example.com",
    },
  },
  {
    id: 9,
    title: "Suburban Home",
    location: "Greenfield, Ohio",
    price: 3950,
    type: "House",
    status: "For Sale",
    image:
      "https://cdn.home-designing.com/wp-content/uploads/2017/05/wood-white-and-charcoal-modern-exterior-paint-themes.jpg",
    description:
      "Family-friendly home located in a peaceful suburban neighborhood.",
    bedrooms: 4,
    bathrooms: 3,
    area: 2200,
    yearBuilt: 2010,
    amenities: ["Backyard", "Garage", "Central Heating"],
    agent: {
      name: "Liam Howard",
      phone: "+1 937-555-0166",
      email: "liam.howard@example.com",
    },
  },
];

const RecentProperties = () => {
  // Store IDs of liked properties in a Set for fast lookup
  const [likedProperties, setLikedProperties] = useState<Set<number>>(
    new Set()
  );

  // Toggle like state for a property by id
  const toggleLike = (id: number) => {
    setLikedProperties((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section className="bg-gray-100 py-16 px-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-800">
          Recent Property Listed
        </h1>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => {
          const statusColorClass =
            property.status === "For Rent"
              ? "bg-orange-100 text-orange-700"
              : "bg-green-100 text-green-700";

          // Check if this property is liked
          const isLiked = likedProperties.has(property.id);

          return (
            <Link state={property} to={"/details"}>
              <div
                key={property.id}
                className="bg-white rounded-xl shadow-md overflow-hidden
               transition-transform duration-300 ease-in-out
               hover:scale-105 hover:shadow-xl hover:z-10 cursor-pointer"
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-4 space-y-4">
                  {/* Status and Heart */}
                  <div className="flex justify-between items-center">
                    <span
                      className={`${statusColorClass} text-sm px-3 py-1 rounded font-medium`}
                    >
                      {property.status}
                    </span>
                    <Heart
                      onClick={() => toggleLike(property.id)}
                      className={`${
                        isLiked ? "text-red-500" : "text-gray-400"
                      } w-5 h-5 cursor-pointer`}
                      fill={isLiked ? "currentColor" : "none"} // fill red when liked, no fill otherwise
                    />
                  </div>

                  {/* Title & Location */}
                  <div className="flex flex-col justify-between items-start">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 text-gray-500" />
                      <h3 className="text-lg font-semibold text-slate-800">
                        {property.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600">{property.location}</p>
                  </div>

                  {/* Divider */}
                  <hr className="border-gray-200" />

                  {/* Price & Type */}
                  <div className="flex justify-around items-center">
                    <div className="flex items-center gap-2">
                      <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                        ${property.price}
                      </span>
                      <p className="text-sm text-gray-600">/sqft</p>
                    </div>
                    <p className="text-sm text-gray-500 font-medium">
                      {property.type}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default RecentProperties;
