export default function Services() {
  const services = [
    {
      title: "Tenant Management",
      desc: "We find verified tenants, handle agreements, and manage all communication.",
      icon: "🏠",
    },
    {
      title: "Rent Collection",
      desc: "Timely rent collection with monthly updates directly to you.",
      icon: "💰",
    },
    {
      title: "Property Maintenance",
      desc: "Regular inspections and maintenance to keep your property in top condition.",
      icon: "🛠️",
    },
    {
      title: "Legal Assistance",
      desc: "Support with agreements, disputes, and documentation.",
      icon: "⚖️",
    },
    {
      title: "Plot Monitoring",
      desc: "We regularly check and secure your plots or vacant land.",
      icon: "📍",
    },
    {
      title: "Property Selling",
      desc: "End-to-end support to sell your property at the best price.",
      icon: "📈",
    },
  ];

  return (
    <section id="services" className="relative py-4 px-6 overflow-hidden">

      {/* 🔥 GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2F4A8A] to-[#3BA64B]"></div>

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 🔥 GLOW EFFECT */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-white">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Services
        </h2>

        <p className="text-center text-white/80 mb-12">
          Complete property management solutions designed for stress-free ownership.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:scale-105 transition"
            >
              {/* ICON */}
              <div className="text-4xl mb-4">{service.icon}</div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-2">
                {service.title}
              </h3>

              {/* DESC */}
              <p className="text-white/80 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#form"
            className="inline-block bg-white text-[#2F4A8A] px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Get Free Consultation
          </a>
        </div>

      </div>
    </section>
  );
}