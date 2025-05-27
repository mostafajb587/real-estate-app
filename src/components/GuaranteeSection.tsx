const GuaranteeSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-72 flex items-center justify-left"
      style={{
        backgroundImage:
          "url('https://www.multihousingnews.com/wp-content/uploads/sites/57/2024/04/J.-Ardin-by-JAG.jpg')", // an expressive image for house planning/purchasing
      }}
    >
      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-gray-800 bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-left px-20">
        <h3 className="text-white font-semibold text-xl mb-2">
          30 Days Money Back Guarantee
        </h3>
        <h2 className="text-white font-bold text-3xl md:text-4xl">
          No Extra Fees. Friendly Support?
        </h2>
      </div>
    </section>
  );
};
export default GuaranteeSection;
