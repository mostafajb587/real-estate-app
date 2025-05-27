import { FaCheck, FaTimes } from "react-icons/fa";

const plans = [
  {
    id: 1,
    title: "Basic",
    price: 29,
    featuresIncluded: [
      "Lorem ipsum feature 1",
      "Lorem ipsum feature 2",
      "Lorem ipsum feature 3",
    ],
    featuresExcluded: ["Excluded feature 1", "Excluded feature 2"],
    buttonText: "Start Basic",
  },
  {
    id: 2,
    title: "Standard",
    price: 59,
    featuresIncluded: [
      "Lorem ipsum feature 1",
      "Lorem ipsum feature 2",
      "Lorem ipsum feature 3",
      "Lorem ipsum feature 4",
    ],
    featuresExcluded: ["Excluded feature 1"],
    buttonText: "Start Standard",
  },
  {
    id: 3,
    title: "Premium",
    price: 99,
    featuresIncluded: [
      "Lorem ipsum feature 1",
      "Lorem ipsum feature 2",
      "Lorem ipsum feature 3",
      "Lorem ipsum feature 4",
      "Lorem ipsum feature 5",
    ],
    featuresExcluded: [],
    buttonText: "Start Premium",
  },
];

const SelectPackage = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl font-bold text-black">Select Your Package</h1>
        <p className="text-gray-600 mt-2">
          Choose a plan that suits your business and unlock powerful features.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-7xl mx-auto px-4">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white rounded-xl shadow-lg p-8 w-80 flex flex-col"
          >
            {/* Title and Price Section */}
            <div className="space-y-2 text-center mb-6">
              <h2 className="text-4xl font-bold text-black">{plan.title}</h2>
              <div className="flex items-center justify-center gap-1">
                <h6 className="font-bold text-black text-sm mt-4">$</h6>
                <span>
                  <h2 className="text-4xl font-bold text-black">
                    {plan.price}
                  </h2>
                </span>
              </div>

              <p className="text-sm text-gray-500 font-light">
                per user, per month
              </p>
            </div>

            {/* Feature List */}
            <ul className="space-y-3 mb-6 flex-grow">
              {plan.featuresIncluded.map((feature, i) => (
                <li key={`inc-${i}`} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                    <FaCheck className="text-green-500 text-xs" />
                  </div>
                  <p className="text-sm text-gray-700">{feature}</p>
                </li>
              ))}

              {plan.featuresExcluded.map((feature, i) => (
                <li key={`exc-${i}`} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center">
                    <FaTimes className="text-red-500 text-xs" />
                  </div>
                  <p className="text-sm text-gray-700">{feature}</p>
                </li>
              ))}
            </ul>

            {/* Action Button */}
            <button className="w-full py-2 border border-green-500 text-green-600 font-bold rounded-full transition duration-300 hover:bg-green-500 hover:text-white">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectPackage;
