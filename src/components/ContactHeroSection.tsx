const ContactHeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-72 flex items-center justify-left"
      style={{
        backgroundImage:
          "url('https://images.stockcake.com/public/0/2/c/02c7299b-6365-4862-882a-aa5f89e0eb3c_large/busy-call-center-stockcake.jpg')", // Image of a call center worker
      }}
    >
      {/* Dark Blue Filter Overlay */}
      <div className="absolute inset-0 bg-gray-800 bg-opacity-70"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-left px-20">
        <h3 className="text-white font-semibold text-xl mb-2">Contact Us</h3>
        <h2 className="text-white font-bold text-3xl md:text-4xl">
          Get Helps & Friendly Support
        </h2>
      </div>
    </section>
  );
};

export default ContactHeroSection;
