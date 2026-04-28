export default function AboutUs() {
  return (
    <section className="relative py-20 px-6 overflow-hidden" id="about">

      {/* 🔥 GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2F4A8A] to-[#3BA64B]"></div>

      {/* 🔥 OVERLAY (for readability) */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center text-white">

        {/* 🖼 IMAGE */}
        <div>
          <img
            src="/about-property.jpg"
            alt="Property Management"
            className="rounded-2xl shadow-2xl"
          />
        </div>

        {/* 📝 CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Us
          </h2>

          <p className="text-white/90 mb-4">
            We are a professional property management company helping property
            owners manage, maintain, and grow their real estate investments
            without stress.
          </p>

          <p className="text-white/90 mb-6">
            Whether you are in India or abroad, our team ensures your property
            is handled with care — from tenant management to rent collection
            and legal support.
          </p>

          {/* 🔢 STATS */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { value: "500+", label: "Properties Managed" },
              { value: "10+", label: "Years Experience" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 bg-white/10 backdrop-blur-lg rounded-xl text-center border border-white/20"
              >
                <h3 className="text-2xl font-bold text-white">
                  {item.value}
                </h3>
                <p className="text-sm text-white/80">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* 🔥 CTA */}
          <a
            href="#form"
            className="inline-block bg-white text-[#2F4A8A] px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Get Free Consultation
          </a>
        </div>

      </div>
    </section>
  );
}