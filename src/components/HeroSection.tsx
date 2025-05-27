import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="w-full min-h-[600px] bg-cover bg-center bg-no-repeat py-28 px-4"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
      }}
    >
      <div className="max-w-5xl mx-auto text-center text-white space-y-6">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold">
          Search Your Next Home
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl">
          Find new & featured property located in your local city
        </p>

        {/* Filter Bar */}
        <div className="mt-10 bg-white/90 backdrop-blur-md border border-white/30 shadow-lg rounded-full px-4 py-4 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-3">
          {/* City/Street Input */}
          <input
            type="text"
            placeholder="City / Street"
            className="flex-1 px-4 py-2 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-slate-800"
          />

          {/* Property Type Dropdown */}
          <select className="flex-1 px-4 py-2 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-slate-800">
            <option>Property Type</option>
            <option>Apartment</option>
            <option>House</option>
            <option>Land</option>
            <option>Commercial</option>
          </select>

          {/* Price Range Dropdown */}
          <select className="flex-1 px-4 py-2 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-slate-800">
            <option>Price Range</option>
            <option>$0 - $100K</option>
            <option>$100K - $500K</option>
            <option>$500K - $1M</option>
            <option>$1M+</option>
          </select>

          {/* Advanced Filter Button */}
          <button className="flex items-center gap-2 px-5 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition text-sm font-medium">
            <Search className="w-4 h-4" />
            Advanced Filter
          </button>
        </div>
      </div>
    </section>
  );
}
