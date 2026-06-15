import {
  MapPin,
  School,
  Hospital,
  ShoppingBag,
  Plane,
} from "lucide-react";

const locations = [
  {
    icon: School,
    title: "Educational Institutions",
    distance: "5 Min Drive",
  },
  {
    icon: Hospital,
    title: "Hospitals & Healthcare",
    distance: "10 Min Drive",
  },
  {
    icon: ShoppingBag,
    title: "Shopping & Entertainment",
    distance: "15 Min Drive",
  },
  {
    icon: Plane,
    title: "Airport Connectivity",
    distance: "20 Min Drive",
  },
];

export default function LocationSection() {
  return (
    <section
      id="location"
      className="bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="text-[#C38762] uppercase tracking-[5px] text-sm">
            PRIME LOCATION
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold">
            Location Advantages
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            Strategically located with seamless connectivity to
            educational institutions, healthcare centers,
            shopping destinations and major transportation hubs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Location Image */}
          <div className="relative">
            <img
              src="/Mk/Location-Map-Mk1-1-1.jpg"
              alt="MK One Location"
              className="w-full rounded-[30px] border border-[#C38762]/20"
            />

            <div className="absolute bottom-6 left-6 bg-black/90 backdrop-blur-md border border-[#C38762]/30 rounded-3xl px-6 py-5">
              <div className="flex items-center gap-3">
                <MapPin
                  size={24}
                  className="text-[#C38762]"
                />
                <h3 className="text-xl font-semibold">
                  Visakhapatnam
                </h3>
              </div>
            </div>
          </div>

          {/* Location Cards */}
          <div className="space-y-5">
            {locations.map((item, index) => (
              <div
                key={index}
                className="group bg-[#111111] border border-[#222222] rounded-3xl p-6 flex items-center gap-5 hover:border-[#C38762] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#C38762]/10 flex items-center justify-center">
                  <item.icon
                    size={28}
                    className="text-[#C38762]"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold group-hover:text-[#C38762] transition">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    {item.distance}
                  </p>
                </div>
              </div>
            ))}

            <div className="bg-[#C38762] text-white rounded-3xl p-8 mt-8">
              <h3 className="text-3xl font-bold">
                MK ONE
              </h3>

              <p className="mt-3 text-white/90">
                Premium luxury apartments in Visakhapatnam
                offering world-class amenities, excellent
                connectivity and an unmatched lifestyle.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}