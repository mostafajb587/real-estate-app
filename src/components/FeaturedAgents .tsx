import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaCheck,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const agents = [
  {
    id: 1,
    name: "Anna K. Young",
    location: "Liverpool, Canada",
    listings: 39,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    name: "Michael B. Johnson",
    location: "New York, USA",
    listings: 42,
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Sophia L. Martinez",
    location: "Madrid, Spain",
    listings: 28,
    avatar: "https://randomuser.me/api/portraits/women/72.jpg",
  },
  {
    id: 4,
    name: "James T. Wilson",
    location: "Sydney, Australia",
    listings: 35,
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: 5,
    name: "Emily R. Davis",
    location: "Toronto, Canada",
    listings: 50,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 6,
    name: "David M. Lee",
    location: "London, UK",
    listings: 44,
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

const FeaturedAgents = () => {
  return (
    <section className="bg-gray-100 py-16">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl font-bold">Our Featured Agents</h1>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          tempora dolore consequatur nihil deleniti natus voluptates.
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {agents.map((agent) => (
          <div
            key={agent.id}
            className="bg-white p-6 rounded-xl shadow-sm relative flex flex-col gap-4"
          >
            {/* Badge */}
            <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-semibold px-5 py-2 rounded-full border border-orange-700">
              {agent.listings} Listings
            </div>

            {/* Avatar with Tick */}
            <div className="relative w-24 h-24 mx-auto">
              <img
                src={agent.avatar}
                alt={agent.name}
                className="w-full h-full bg-white object-cover rounded-full border-4 border-gray-300"
              />
              <div className="absolute bottom-8 -right-3 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                <FaCheck className="text-white text-xs" />
              </div>
            </div>

            {/* Location */}
            <div className="flex justify-center items-center text-gray-500 text-sm gap-1">
              <FaMapMarkerAlt />
              <p className="font-light">{agent.location}</p>
            </div>

            {/* Name */}
            <h4 className="text-center text-lg font-bold text-black">
              {agent.name}
            </h4>

            {/* Social Icons */}
            <div className="flex justify-center gap-3">
              <div className="flex justify-center gap-3">
                {[FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram].map(
                  (Icon, idx) => (
                    <div
                      key={idx}
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center
                 transition-colors duration-300 cursor-pointer
                 hover:text-green-500"
                    >
                      <Icon className="text-black text-sm transition-colors duration-300 hover:text-green-500" />
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex justify-around gap-3 mt-4">
              <button
                className="flex items-center gap-2 bg-green-500 text-white text-sm px-4 py-1 rounded
               transition-transform duration-300
               hover:scale-105"
              >
                <FaEnvelope className="text-white text-xs" />
                Message
              </button>
              <button
                className="w-9 h-9 rounded bg-black flex items-center justify-center
               transition-transform duration-300
               hover:animate-bounce"
              >
                <FaPhoneAlt className="text-white text-sm" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedAgents;
