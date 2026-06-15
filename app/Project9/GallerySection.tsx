export default function GallerySection() {
  const galleryImages = [
    "/Mk/mk-gallery-1.jpg",
    "/Mk/mk-gallery-2.jpg",
    "/Mk/mk-gallery-3.jpg",
    "/Mk/mk-gallery-4.jpg",
    "/Mk/mk-gallery-5.jpg",
    "/Mk/mk-gallery-6.jpg",
    "/Mk/mk-gallery-7.jpg",
    "/Mk/mk-gallery-8.jpg",
    "/Mk/mk-gallery-9.jpg",
  ];

  return (
    <section
      id="gallery"
      className="bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-amber-400 uppercase tracking-[4px]">
            Gallery
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold">
            Experience MK One
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            Explore stunning architecture, luxurious interiors,
            premium amenities and beautifully landscaped spaces.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-zinc-800"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[350px] object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute"></div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}