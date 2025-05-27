const ServicesSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-72 flex items-center justify-start"
      style={{
        backgroundImage:
          "url('https://dcba.lacounty.gov/wp-content/uploads/2017/10/consigning.jpg')",
      }}
    >
      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-gray-800 bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-left max-w-2xl px-20">
        <h3 className="text-white font-light text-xl mb-2">Services</h3>
        <h2 className="text-white font-bold text-3xl md:text-4xl">
          Services - All Services?
        </h2>
      </div>
    </section>
  );
};

export default ServicesSection;
