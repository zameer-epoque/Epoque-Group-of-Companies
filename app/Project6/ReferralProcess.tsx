"use client";

export default function ReferralProcess() {
  return (
    <section className="w-full">

      {/* 🔥 TOP GREEN REFERRAL BAR */}
      <div className="bg-[#3BA64B] text-white py-6 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Property Management Referral Plan
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-sm">

            <div className="border-t border-white/30 pt-4">
              <p className="font-semibold">For Our Tenants</p>
              <p className="text-white/80">
                Refer an NRI friend & earn rewards on annual property management.
              </p>
            </div>

            <div className="border-t border-white/30 pt-4">
              <p className="font-semibold">For Our Clients</p>
              <p className="text-white/80">
                Earn referral benefits for every successful signup.
              </p>
            </div>

            <div className="border-t border-white/30 pt-4">
              <p className="font-semibold">Not a Client?</p>
              <p className="text-white/80">
                Join & get exciting referral bonuses.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* 🔥 MAIN SECTION */}
      <div className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* 🖼 LEFT IMAGE */}
          <div>
            <img
              src="/about-property12.jpg" // 👉 replace
              alt="Process"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
          </div>

          {/* 📝 RIGHT CONTENT */}
          <div>

            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#2F4A8A]">
              How Do We Work?
            </h2>

            <p className="text-gray-600 mb-8 text-sm">
              Our property management services are designed to make ownership simple,
              transparent, and stress-free.
            </p>

            {/* 🔥 STEPS GRID */}
            <div className="grid sm:grid-cols-2 gap-4">

              {[
                {
                  no: "01",
                  title: "Consultation & Inspection",
                  desc: "We understand your needs and inspect the property.",
                },
                {
                  no: "02",
                  title: "Assessment & Plan",
                  desc: "We create a custom action plan for your property.",
                },
                {
                  no: "03",
                  title: "Transparent Execution",
                  desc: "We manage tenants and handle all operations.",
                },
                {
                  no: "04",
                  title: "Maintenance & Monitoring",
                  desc: "Regular updates, rent collection & maintenance.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-lg shadow hover:shadow-md transition"
                >
                  <h3 className="text-[#3BA64B] font-bold text-lg mb-2">
                    {step.no}
                  </h3>

                  <h4 className="font-semibold text-[#2F4A8A] text-sm mb-1">
                    {step.title}
                  </h4>

                  <p className="text-gray-500 text-xs">
                    {step.desc}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>
      </div>

    </section>
  );
}