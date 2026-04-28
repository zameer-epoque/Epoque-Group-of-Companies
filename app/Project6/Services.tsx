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
    <section id="services" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Services
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Complete property management solutions designed for stress-free ownership.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <div className="text-3xl mb-3">{service.icon}</div>

              <h3 className="text-lg font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 🔥 CTA */}
        <div className="text-center mt-12">
          <a
            href="#form"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Get Free Consultation
          </a>
        </div>

      </div>
    </section>
  );
}