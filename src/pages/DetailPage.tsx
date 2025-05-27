import { useLocation } from "react-router-dom";
interface Agent {
  name: string;
  phone: string;
  email: string;
}

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  type: string;
  status: string;
  image: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  yearBuilt: number;
  amenities: string[];
  agent: Agent;
}

const DetailPage = () => {
  const { state } = useLocation();
  const property = state as Property | undefined;

  if (!property) throw new Error("there is a problem in fetching data");

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-10 bg-white rounded-xl shadow-lg my-10 border border-gray-100">
      {/* Image and Status */}
      <div className="relative rounded-xl overflow-hidden shadow-md mb-8 group">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <span
          className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-sm font-semibold shadow-md
        ${
          property.status === "For Sale"
            ? "bg-green-600 text-white"
            : "bg-orange-500 text-white"
        }`}
        >
          {property.status}
        </span>
      </div>

      {/* Title and Location */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {property.title}
          </h1>
          <p className="flex items-center text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13 21.314l-4.657-4.657a8 8 0 1111.314 0z"
              />
              <circle cx={12} cy={12} r={3} />
            </svg>
            {property.location}
          </p>
        </div>
        <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      {/* Price and Type */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <div className="bg-green-600 text-white px-5 py-2.5 rounded-lg font-bold text-lg shadow-md flex items-center">
          <span>${property.price.toLocaleString()}</span>
          {property.status === "For Rent" && (
            <span className="text-sm font-normal ml-1">/month</span>
          )}
        </div>
        <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-medium text-lg">
          {property.type}
        </div>
        <div className="flex items-center text-gray-600 ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1 text-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
          {/* <span className="font-medium">{property.rating || 4.8}</span> */}
        </div>
      </div>

      {/* Description */}
      <section className="mb-10 border-b border-gray-200 pb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
          Property Description
        </h2>
        <p className="text-gray-700 leading-relaxed">{property.description}</p>
      </section>

      {/* Property Details */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          Key Features
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="bg-green-100 p-3 rounded-full mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="text-xl font-bold">{property.bedrooms}</span>
            <span className="text-gray-600 text-sm">Bedrooms</span>
          </div>

          <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="bg-blue-100 p-3 rounded-full mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 10h.01M7 16h.01M11 12h.01M11 16h.01M15 10h.01M15 16h.01M19 12h.01M19 16h.01M4 21h16a2 2 0 002-2v-7H2v7a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="text-xl font-bold">{property.bathrooms}</span>
            <span className="text-gray-600 text-sm">Bathrooms</span>
          </div>

          <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="bg-purple-100 p-3 rounded-full mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3v18h18"
                />
              </svg>
            </div>
            <span className="text-xl font-bold">{property.area} sqft</span>
            <span className="text-gray-600 text-sm">Area</span>
          </div>

          <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="bg-yellow-100 p-3 rounded-full mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v18m9-9H3"
                />
              </svg>
            </div>
            <span className="text-xl font-bold">{property.yearBuilt}</span>
            <span className="text-gray-600 text-sm">Year Built</span>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
          Amenities
        </h2>
        <ul className="flex flex-wrap gap-3">
          {property.amenities.map((amenity, i) => (
            <li
              key={i}
              className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-sm shadow-sm flex items-center hover:bg-green-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {amenity}
            </li>
          ))}
        </ul>
      </section>

      {/* Agent Info */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900">
              Contact Agent
            </h2>
            <p className="text-lg font-semibold text-gray-800 mb-1">
              {property.agent.name}
            </p>
            <p className="text-gray-600 mb-1 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {property.agent.phone}
            </p>
            <p className="text-gray-600 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {property.agent.email}
            </p>
          </div>
          <div className="md:ml-auto mt-4 md:mt-0">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-colors w-full md:w-auto">
              Contact Now
            </button>
          </div>
        </div>
      </section>

      {/* Additional CTA */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button className="bg-white border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold shadow-sm transition-colors flex-1 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          Schedule a Tour
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-colors flex-1 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          Make an Offer
        </button>
      </div>
    </div>
  );
};

export default DetailPage;
