const AboutUsSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-72 flex items-center justify-start"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/smiling-family-discussing-while-sitting-sofa_107420-20732.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-800 bg-opacity-70"></div>

      {/* Content */}
      <div className="relative  z-10 text-left max-w-2xl px-20">
        <h3 className="text-white font-light text-xl mb-2">About Us</h3>
        <h2 className="text-white font-bold text-3xl md:text-4xl">
          About Us - Who We Are?
        </h2>
      </div>
    </section>
  );
};
export default AboutUsSection;
