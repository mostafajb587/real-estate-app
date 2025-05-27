const QuestionsSection = () => {
  return (
    <section className="bg-green-600 py-9 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side */}
        <div className="text-center md:text-left space-y-3">
          <h1 className="text-white font-extrabold text-3xl md:text-4xl">
            Do You Have Questions?
          </h1>
          <p className="text-white font-semibold text-sm md:text-base max-w-md">
            We're here to help! Reach out to us with any inquiries about our
            services, pricing, or how we can work together.
          </p>
        </div>

        {/* Right Side - Button */}
        <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-full ">
          Contact With Us
        </button>
      </div>
    </section>
  );
};

export default QuestionsSection;
