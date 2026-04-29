export default function Amenities() {
  return (
    <section id="amenities" className="py-20 px-6 bg-[#020617]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            World-Class Amenities
          </h2>
          <p className="text-gray-400 mt-3">
            Designed for comfort, lifestyle, and premium living
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-6">

          {[
            { title: "Swimming Pool", icon: "🏊‍♂️" },
            { title: "25,000 Sft Clubhouse", icon: "🏢" },
            { title: "Gym & Fitness Zone", icon: "💪" },
            { title: "Spa & Salon", icon: "💆‍♀️" },
            { title: "Tennis Court", icon: "🎾" },
            { title: "Basketball Court", icon: "🏀" },
            { title: "Jogging Track", icon: "🏃‍♂️" },
            { title: "Children Play Area", icon: "🛝" },
            { title: "Party Lawn", icon: "🎉" },
            { title: "Senior Citizen Park", icon: "🌳" },
            { title: "24/7 Security", icon: "🛡️" },
            { title: "Landscaped Gardens", icon: "🌿" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#1E293B] p-6 rounded-xl text-center hover:scale-105 transition"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-blue-500 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold">
            45% Open Space with Nature & Serenity 🌿
          </h3>
          <p className="mt-2">
            Live surrounded by lake views, greenery, and peaceful environment
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="bg-white text-black px-8 py-3 rounded-lg font-semibold"
          >
            Book a Site Visit
          </a>
        </div>

      </div>
    </section>
  );
}