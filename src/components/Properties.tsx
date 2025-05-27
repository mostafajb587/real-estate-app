import { TreePalm, Home, Building2, Building, Landmark } from "lucide-react";
export default function PropertyTypesSection() {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
          Featured Property Types
        </h1>
        <p className="text-slate-600 text-base sm:text-lg">
          Find all types of properties
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {/* Card 1 - Island / Family House */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
          <div className="w-14 h-14 mx-auto rounded-full bg-red-100 flex items-center justify-center mb-4">
            <TreePalm className="w-6 h-6 text-red-500" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800">Family House</h3>
          <p className="text-slate-500 text-sm">123 Property</p>
        </div>

        {/* Card 2 - House & Villa */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
          <div className="w-14 h-14 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
            <Home className="w-6 h-6 text-green-500" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800">
            House & Villa
          </h3>
          <p className="text-slate-500 text-sm">185 Property</p>
        </div>

        {/* Card 3 - Apartments */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
          <div className="w-14 h-14 mx-auto rounded-full bg-yellow-100 flex items-center justify-center mb-4">
            <Building2 className="w-6 h-6 text-yellow-500" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800">Apartments</h3>
          <p className="text-slate-500 text-sm">200 Property</p>
        </div>

        {/* Card 4 - Studios */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
          <div className="w-14 h-14 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-4">
            <Landmark className="w-6 h-6 text-purple-500" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800">Studios</h3>
          <p className="text-slate-500 text-sm">200 Property</p>
        </div>

        {/* Card 5 - Villa & Condo */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
          <div className="w-14 h-14 mx-auto rounded-full bg-cyan-100 flex items-center justify-center mb-4">
            <Building className="w-6 h-6 text-cyan-500" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800">
            Villa & Condo
          </h3>
          <p className="text-slate-500 text-sm">200 Property</p>
        </div>
      </div>
    </section>
  );
}
