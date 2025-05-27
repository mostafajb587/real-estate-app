const locations = [
  {
    name: "New Orleans, Louisiana",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "New Jersey, United States",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Liverpool, London",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "New York, United States",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Montreal, Canada",
    image:
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "California, USA",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
];

const ExploreByLocation = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl font-semibold">Explore By Location</h1>
        <p className="text-gray-600 mt-2">
          Discover properties in top cities and popular destinations around the
          world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {locations.map((loc, index) => (
          <div
            key={index}
            className="relative h-72 bg-cover bg-center rounded-xl overflow-hidden
                       transition-transform duration-300 ease-in-out
                       hover:scale-105 hover:shadow-xl hover:z-10"
            style={{ backgroundImage: `url('${loc.image}')` }}
          >
            <div className="absolute inset-5 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center space-y-3">
                <h4 className="text-white text-xl font-semibold">{loc.name}</h4>
                <div className="flex justify-between text-gray-300 text-sm gap-4">
                  <p>12 Villas</p>
                  <p>07 Offices</p>
                  <p>10 Apartments</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreByLocation;
