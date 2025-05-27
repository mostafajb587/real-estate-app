const BlogHeaderSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-72 flex items-center justify-left"
      style={{
        backgroundImage:
          "url('https://images.openai.com/thumbnails/e8be89e5de1b769a2635ba155a3184f1.jpeg')", // expressive blog-related property image
      }}
    >
      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-gray-800 bg bg-opacity-70"></div>

      {/* Text Content */}
      <div className="relative z-10 text-left px-20 max-w-2xl">
        <h3 className="text-white font-semibold text-xl mb-2 tracking-wide">
          Blog
        </h3>
        <h2 className="text-white font-bold text-3xl md:text-4xl">
          BlogGrid – Our Blogs?
        </h2>
      </div>
    </section>
  );
};
export default BlogHeaderSection;
