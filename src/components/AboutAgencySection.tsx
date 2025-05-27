import {
  BriefcaseIcon,
  CheckCircleIcon,
  UsersIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
const stats = [
  {
    value: "15+",
    label: "Years Experience",
    icon: <BriefcaseIcon className="w-10 h-10 text-blue-500 mx-auto mb-3" />,
    bgColor: "bg-blue-50",
  },
  {
    value: "200+",
    label: "Projects Completed",
    icon: <CheckCircleIcon className="w-10 h-10 text-green-500 mx-auto mb-3" />,
    bgColor: "bg-green-50",
  },
  {
    value: "50+",
    label: "Team Members",
    icon: <UsersIcon className="w-10 h-10 text-purple-500 mx-auto mb-3" />,
    bgColor: "bg-purple-50",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: <HeartIcon className="w-10 h-10 text-pink-500 mx-auto mb-3" />,
    bgColor: "bg-pink-50",
  },
];

const AboutAgencySection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Stats Section - New Addition */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 px-4 max-w-6xl mx-auto">
          {stats.map(({ value, label, icon, bgColor }) => (
            <div
              key={label}
              className={`${bgColor} p-8 rounded-2xl shadow-lg text-center transition-transform hover:scale-105 hover:shadow-xl`}
            >
              {icon}
              <p className="text-4xl font-extrabold text-blue-900">{value}</p>
              <p className="text-gray-600 mt-2">{label}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-blue-900">
              Our Agency Story
            </h1>
            <p className="text-gray-600 text-lg">
              Check out our company story and work process
            </p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac euismod erat. Nulla facilisi. Morbi mattis, turpis nec
              tincidunt pretium, libero dolor efficitur erat, nec sodales tortor
              ante nec est. Maecenas laoreet, augue nec fermentum sagittis,
              justo erat luctus sapien, sed semper leo velit ac eros.
            </p>

            {/* Accordion - New Addition */}
            <div className="space-y-2">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="w-full px-4 py-3 text-left bg-white hover:bg-gray-50 transition flex justify-between items-center">
                  <span className="font-medium text-blue-900">Our Mission</span>
                  <span className="text-gray-500">+</span>
                </button>
                <div className="px-4 py-2 bg-gray-50 hidden">
                  <p className="text-gray-600">
                    To deliver exceptional results through innovative solutions
                    and dedicated service.
                  </p>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="w-full px-4 py-3 text-left bg-white hover:bg-gray-50 transition flex justify-between items-center">
                  <span className="font-medium text-blue-900">
                    Our Approach
                  </span>
                  <span className="text-gray-500">+</span>
                </button>
                <div className="px-4 py-2 bg-gray-50 hidden">
                  <p className="text-gray-600">
                    We combine creativity with strategy to create meaningful
                    impact for our clients.
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-full transition duration-300 hover:bg-green-600">
              More About Us
            </button>
          </div>

          {/* Image Gallery - Enhanced */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Our Agency Team"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-2 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                alt="Team Member"
                className="w-20 h-20 rounded-lg object-cover border-2 border-white"
              />
            </div>
            <div className="absolute -top-4 -left-4 bg-white p-2 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
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
              </div>
              <p className="text-xs text-center mt-1 text-gray-600">Trusted</p>
            </div>
          </div>
        </div>

        {/* Client Logos - New Addition */}
        <div className="mt-16">
          <h3 className="text-center text-gray-500 mb-8">
            Trusted by leading companies
          </h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <img
              src="https://logo.clearbit.com/google.com?size=120"
              alt="Google Logo"
              className="h-8 opacity-70 hover:opacity-100 transition"
            />
            <img
              src="https://logo.clearbit.com/slack.com?size=120"
              alt="Slack Logo"
              className="h-10 opacity-70 hover:opacity-100 transition"
            />
            <img
              src="https://logo.clearbit.com/airbnb.com?size=120"
              alt="Airbnb Logo"
              className="h-12 opacity-70 hover:opacity-100 transition"
            />
            <img
              src="https://logo.clearbit.com/spotify.com?size=120"
              alt="Spotify Logo"
              className="h-8 opacity-70 hover:opacity-100 transition"
            />
            <img
              src="https://logo.clearbit.com/dropbox.com?size=120"
              alt="Dropbox Logo"
              className="h-10 opacity-70 hover:opacity-100 transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAgencySection;
