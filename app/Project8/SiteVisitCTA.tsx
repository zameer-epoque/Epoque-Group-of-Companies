
import {
  Phone,
  MessageCircle,
  Mail,
  Building2,
} from "lucide-react";

export default function SiteVisitCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#003D7A] via-[#0057A8] to-[#003D7A]" />

      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#EF3B2D]/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}

          <div>

            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white">
              Limited Premium Inventory Available
            </span>

            <h2 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-white">
              Book Your
              <span className="block text-[#FFD700]">
                Site Visit Today
              </span>
            </h2>

            <p className="mt-8 text-xl text-blue-100 leading-relaxed">
              Experience premium high-rise living at
              Urbanyards Shangrila with lake views,
              70,000+ Sq.ft clubhouse, airport connectivity
              and luxury lifestyle amenities.
            </p>

            <div className="mt-10 space-y-4 text-white text-lg">

              <div>✓ Premium 3 & 4 BHK Residences</div>

              <div>✓ Starting From ₹ 1.35 Cr*</div>

              <div>✓ 8 Minutes To Airport</div>

              <div>✓ 3 Minutes To ORR Exit 14</div>

              <div>✓ 70,000+ Sq.ft Clubhouse</div>

              <div>✓ Possession By 2028</div>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 gap-5 mt-12">

              <div className="rounded-3xl bg-white/10 backdrop-blur-md p-6 border border-white/10">
                <h3 className="text-4xl font-black text-white">
                  6
                </h3>

                <p className="text-blue-100">
                  Acres Development
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 backdrop-blur-md p-6 border border-white/10">
                <h3 className="text-4xl font-black text-white">
                  20
                </h3>

                <p className="text-blue-100">
                  Floors
                </p>
              </div>

            </div>

          </div>

          {/* FORM */}

          <div className="bg-white rounded-[40px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">

            <h3 className="text-4xl font-black text-[#003D7A]">
              Get Pricing & Site Visit
            </h3>

            <p className="mt-3 text-slate-600">
              Fill your details and our property expert
              will contact you shortly.
            </p>

            <div className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-300
                  bg-white
                  px-5
                  py-4
                  text-slate-900
                  placeholder:text-slate-400
                  outline-none
                  focus:border-[#0057A8]
                  focus:ring-4
                  focus:ring-blue-100
                "
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-300
                  bg-white
                  px-5
                  py-4
                  text-slate-900
                  placeholder:text-slate-400
                  outline-none
                  focus:border-[#0057A8]
                  focus:ring-4
                  focus:ring-blue-100
                "
              />

              <select
                className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-300
                  bg-white
                  px-5
                  py-4
                  text-slate-900
                  outline-none
                  focus:border-[#0057A8]
                  focus:ring-4
                  focus:ring-blue-100
                "
              >
                <option value="">
                  Select Configuration
                </option>

                <option>3 BHK</option>

                <option>4 BHK</option>
              </select>

              <select
                className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-300
                  bg-white
                  px-5
                  py-4
                  text-slate-900
                  outline-none
                  focus:border-[#0057A8]
                  focus:ring-4
                  focus:ring-blue-100
                "
              >
                <option value="">
                  Select Budget
                </option>

                <option>₹ 1.20 Cr</option>

                <option>₹ 1.50 Cr</option>

                <option>₹ 2.00 Cr</option>

                <option>₹ 2.50 Cr+</option>
              </select>

              <button
                className="
                  w-full
                  rounded-2xl
                  bg-[#EF3B2D]
                  py-4
                  text-lg
                  font-bold
                  text-white
                  transition-all
                  hover:scale-[1.02]
                "
              >
                Get Pricing & Schedule Visit
              </button>

            </div>

            {/* Contact Options */}

            <div className="mt-8 border-t border-slate-200 pt-8">

              <div className="grid md:grid-cols-3 gap-4">

                <a
                  href="tel:+919133633327"
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    p-4
                    hover:border-[#0057A8]
                    transition
                  "
                >
                  <Phone className="text-[#0057A8]" />

                  <p className="mt-3 text-xs text-slate-500">
                    Call Us
                  </p>

                  <p className="font-bold text-[#003D7A] text-sm">
                    +91 9133 633 327
                  </p>
                </a>

                <a
                  href="mailto:sales@epoquegroup.in"
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    p-4
                    hover:border-[#EF3B2D]
                    transition
                  "
                >
                  <Mail className="text-[#EF3B2D]" />

                  <p className="mt-3 text-xs text-slate-500">
                    Email
                  </p>

                  <p className="font-bold text-[#003D7A] text-sm">
                    sales@epoquegroup.in
                  </p>
                </a>

                <a
                  href="https://wa.me/919133633327"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    p-4
                    hover:border-green-500
                    transition
                  "
                >
                  <MessageCircle className="text-green-600" />

                  <p className="mt-3 text-xs text-slate-500">
                    WhatsApp
                  </p>

                  <p className="font-bold text-[#003D7A] text-sm">
                    Chat Now
                  </p>
                </a>

              </div>

            </div>

            {/* Footer Note */}

            <div className="mt-8 rounded-2xl bg-slate-50 p-4 flex items-center gap-3">

              <Building2
                size={20}
                className="text-[#0057A8]"
              />

              <p className="text-sm text-slate-600">
                Premium 3 & 4 BHK Residences at
                <span className="font-semibold text-[#003D7A]">
                  {" "}Urbanyards Shangrila
                </span>
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
