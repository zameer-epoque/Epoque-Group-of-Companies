export default function HeroSection() {
  return (
    <section
      id="overview"
      className="bg-black text-white min-h-screen flex items-center pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <span className="text-[#C38762] uppercase tracking-[4px] text-sm">
              Premium Luxury Residences
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              MK ONE
            </h1>

            <h2 className="mt-4 text-2xl md:text-3xl text-gray-300">
              Luxury Apartments In Visakhapatnam
            </h2>

            <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-xl">
              Experience world-class amenities, breathtaking architecture,
              landscaped gardens, premium clubhouse and luxury living crafted
              for modern lifestyles.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
             
             <a
  href="#contact"
  className="border border-[#C38762] text-[#C38762] px-8 py-4 rounded-full hover:bg-[#C38762] hover:text-white transition inline-block"
>
  Schedule Site Visit
</a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div>
                <h3 className="text-3xl font-bold text-[#C38762]">
                  800+
                </h3>
                <p className="text-gray-500 mt-2">
                  Apartments
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#C38762]">
                  40K
                </h3>
                <p className="text-gray-500 mt-2">
                  Clubhouse
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#C38762]">
                  15+
                </h3>
                <p className="text-gray-500 mt-2">
                  Amenities
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#C38762]">
                  24/7
                </h3>
                <p className="text-gray-500 mt-2">
                  Security
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="/mk-one-hero.jpg"
              alt="MK One Luxury Apartments"
              className="w-full h-[500px] lg:h-[650px] object-cover rounded-[30px]"
            />

            <div className="absolute -bottom-6 -left-6 bg-[#C38762] text-white px-8 py-6 rounded-3xl">
              <h3 className="text-3xl font-bold">8 Acres</h3>
              <p className="text-sm mt-1">
                Premium Township Development
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}