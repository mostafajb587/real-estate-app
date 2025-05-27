import { FaTrophy, FaBriefcase, FaRegLightbulb, FaHeart } from "react-icons/fa";

export default function AwardsSection() {
  return (
    <section className="bg-[#0a2540] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Top Text */}
        <p className="text-green-500 text-sm font-semibold tracking-widest uppercase">
          Our Awards
        </p>
        <h2 className="text-white text-2xl sm:text-3xl font-light leading-relaxed max-w-3xl mx-auto">
          Over 1,24,000 + Happy User Being With Us Still They Love Our Services
        </h2>

        {/* Award Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-left">
          {/* Card 1 */}
          <div className="space-y-3 flex flex-col items-center">
            <div className="bg-gray-400 rounded-full p-4">
              <FaTrophy className="text-white w-6 h-6" />
            </div>
            <h1 className="text-white font-bold text-xl">32 M</h1>
            <p className="text-gray-400 text-sm text-center">
              Blue Burmin Award
            </p>
          </div>

          {/* Card 2 */}
          <div className="space-y-3 flex flex-col items-center">
            <div className="bg-gray-400 rounded-full p-4">
              <FaBriefcase className="text-white w-6 h-6" />
            </div>
            <h1 className="text-white font-bold text-xl">32 M</h1>
            <p className="text-gray-400 text-sm text-center">Mimo XLL Award</p>
          </div>

          {/* Card 3 */}
          <div className="space-y-3 flex flex-col items-center">
            <div className="bg-gray-400 rounded-full p-4">
              <FaRegLightbulb className="text-white w-6 h-6" />
            </div>
            <h1 className="text-white font-bold text-xl">32 M</h1>
            <p className="text-gray-400 text-sm text-center">
              Australian UGC Award
            </p>
          </div>

          {/* Card 4 */}
          <div className="space-y-3 flex flex-col items-center">
            <div className="bg-gray-400 rounded-full p-4">
              <FaHeart className="text-white w-6 h-6" />
            </div>
            <h1 className="text-white font-bold text-xl">32 M</h1>
            <p className="text-gray-400 text-sm text-center">
              IITCA Green Award
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
