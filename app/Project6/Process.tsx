export default function Process() {
  const steps = [
    {
      title: "Consultation",
      desc: "We understand your property details and requirements.",
      icon: "📞",
    },
    {
      title: "Inspection",
      desc: "Our team visits and evaluates your property condition.",
      icon: "🏠",
    },
    {
      title: "Execution",
      desc: "We handle tenants, agreements, and management tasks.",
      icon: "⚙️",
    },
    {
      title: "Monitoring",
      desc: "Regular updates, rent collection, and maintenance.",
      icon: "📊",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How We Work
        </h2>

        <p className="text-gray-600 mb-12">
          Simple, transparent, and hassle-free process to manage your property.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">

              {/* 🔵 STEP NUMBER */}
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                {i + 1}
              </div>

              {/* ICON */}
              <div className="text-3xl mb-3">{step.icon}</div>

              <h3 className="font-semibold text-lg mb-2">
                {step.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {step.desc}
              </p>

            </div>
          ))}
        </div>

        {/* 🔥 CTA */}
        <div className="mt-12">
          <a
            href="#form"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Start Managing Your Property
          </a>
        </div>

      </div>
    </section>
  );
}