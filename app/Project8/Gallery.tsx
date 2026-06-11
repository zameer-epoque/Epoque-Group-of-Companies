
import { Camera, ArrowRight } from "lucide-react";

const gallery = [
  {
    title: "Premium Elevation",
    image: "/Urbanads/newimage1.jpg",
  },
  {
    title: "Near Airport Connectivity",
image: "/Urbanads/newimage2.jpg",
  },
  {
    title: "Outdoor Poolside",
image: "/Urbanads/newimage3.jpg",
  },
  {
    title: "Swimming Pool",
image: "/Urbanads/newimage4.jpg",
  },
  {
    title: "Grand Clubhouse",
image: "/Urbanads/newimage5.jpg",
  },
 {
    title: "Kids Play Area",
image: "/Urbanads/newimage6.jpg",
 }

];

export default function Gallery() {
  return (
    <section className="py-32 bg-slate-50" id="gallery">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-4xl mx-auto">

          <span className="uppercase tracking-[4px] text-[#EF3B2D] font-semibold">
            Project Gallery
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-[#003D7A]">
            Experience The
            <span className="block text-[#EF3B2D]">
              Shangrila Lifestyle
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Explore the premium architecture, luxury amenities,
            landscaped spaces and elegant interiors.
          </p>

        </div>

        {/* Gallery Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {gallery.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-[32px] bg-white shadow-xl"
            >

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-[#003D7A]">
                  {item.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

        {/* Luxury Banner */}

      
      </div>

    </section>
  );
}

