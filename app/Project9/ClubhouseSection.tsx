import {
  Waves,
  Dumbbell,
  Hotel,
  Utensils,
  Trophy,
  Sparkles,
} from "lucide-react";

const clubhouseFeatures = [
  {
    icon: Waves,
    title: "Indoor Swimming Pool",
  },
  {
    icon: Sparkles,
    title: "Spa & Sauna",
  },
  {
    icon: Trophy,
    title: "Indoor Badminton Courts",
  },
  {
    icon: Hotel,
    title: "Premium Guest Rooms",
  },
  {
    icon: Utensils,
    title: "Food Court",
  },
  {
    icon: Dumbbell,
    title: "Fully Equipped Gym",
  },
];

export default function ClubhouseSection() {
  return (
    <section
      id="clubhouse"
      className="bg-black text-white py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative">
            <img
              src="/MK-One-club-house.jpg"
              alt="MK One Clubhouse"
              className="w-full h-[600px] object-cover rounded-[30px]"
            />

            <div className="absolute bottom-6 left-6 bg-black/90 backdrop-blur-md border border-[#C38762]/30 rounded-3xl px-6 py-5">
              <h3 className="text-3xl font-bold text-[#C38762]">
                40,000
              </h3>
              <p className="text-gray-300 text-sm">
                Sq.ft Luxury Clubhouse
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-[#C38762] uppercase tracking-[5px] text-sm">
              Luxury Clubhouse
            </span>

            <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
              Experience
              <span className="block text-[#C38762]">
                Ultimate Luxury
              </span>
            </h2>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              Designed for recreation, wellness and entertainment,
              the clubhouse offers world-class amenities and
              exceptional lifestyle experiences for every resident.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {clubhouseFeatures.map((item, index) => (
                <div
                  key={index}
                  className="group bg-[#111111] border border-[#222222] rounded-2xl p-5 hover:border-[#C38762] transition-all duration-300"
                >
                  <item.icon
                    size={28}
                    className="text-[#C38762] mb-3"
                  />

                  <h3 className="font-medium group-hover:text-[#C38762] transition">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>

            <button className="mt-10 bg-[#C38762] hover:bg-[#B97852] text-white px-8 py-4 rounded-full font-semibold transition duration-300">
              Explore Clubhouse
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}