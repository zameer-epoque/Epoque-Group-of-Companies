export default function AboutSection() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side */}
          <div>
            <span className="text-amber-400 uppercase tracking-[4px] text-sm">
              About MK One
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              A Landmark Of
              <span className="block text-amber-400">
                Luxury Living
              </span>
            </h2>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              Discover a lifestyle where luxury meets comfort. MK One
              offers premium residences with world-class amenities,
              stunning architecture, landscaped gardens, clubhouse,
              sky lounges and exclusive experiences designed for
              modern families.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-full font-semibold transition">
                Download Brochure
              </button>

              <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
                Explore Project
              </button>
            </div>
          </div>

          {/* Right Side Stats */}
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-5xl font-bold text-amber-400">
                8+
              </h3>
              <p className="mt-3 text-gray-400">
                Acres Development
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-5xl font-bold text-amber-400">
                800+
              </h3>
              <p className="mt-3 text-gray-400">
                Premium Residences
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-5xl font-bold text-amber-400">
                40K
              </h3>
              <p className="mt-3 text-gray-400">
                Sq.ft Clubhouse
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-5xl font-bold text-amber-400">
                15+
              </h3>
              <p className="mt-3 text-gray-400">
                Lifestyle Amenities
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}