export default function WhyChooseCommercialInteriorSection() {
  const points = [
    {
      title: "Expert Commercial Interior Designers",
      desc: "Our team has extensive experience in designing office interiors, corporate spaces, and retail environments tailored to modern business needs.",
    },
    {
      title: "Customized Design Solutions",
      desc: "We create personalized interior designs that reflect your brand identity, workflow, and business goals for maximum impact.",
    },
    {
      title: "Turnkey Interior Execution",
      desc: "From concept to completion, we handle every aspect of the project including planning, design, materials, and execution.",
    },
    {
      title: "High-Quality Materials",
      desc: "We use premium materials and finishes to ensure durability, aesthetics, and long-lasting performance.",
    },
    {
      title: "On-Time Project Delivery",
      desc: "Our structured workflow ensures timely completion of projects without compromising quality.",
    },
    {
      title: "Modern & Functional Designs",
      desc: "We combine modern aesthetics with functionality to create productive and visually appealing workspaces.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#111827] text-white">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Why Choose Our Commercial Interior Designers in Hyderabad
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            We deliver high-quality commercial interior design solutions that
            enhance productivity, brand identity, and business growth.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {points.map((item, index) => (
            <div
              key={index}
              className="bg-[#0B0F19] p-8 rounded-2xl border border-white/10 
              hover:border-yellow-500/40 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Ready to transform your workspace with expert commercial interior design?
          </p>

          <a
            href="/contact"
            className="inline-block px-10 py-4 rounded-full bg-gradient-to-r 
            from-orange-400 via-yellow-500 to-red-500 text-black font-semibold
            hover:scale-105 transition"
          >
            Get Free Consultation
          </a>
        </div>

      </div>
    </section>
  );
}