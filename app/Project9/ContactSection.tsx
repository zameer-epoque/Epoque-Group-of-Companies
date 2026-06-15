import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-black text-white py-24 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/contact-bg.jpg"
          alt="Contact MK One"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <span className="text-[#C38762] uppercase tracking-[5px] text-sm">
              GET IN TOUCH
            </span>

            <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
              Schedule Your
              <span className="block text-[#C38762]">
                Site Visit Today
              </span>
            </h2>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              Discover luxury living at MK One. Contact our sales team
              to know more about floor plans, pricing, availability,
              and exclusive offers.
            </p>

            <div className="space-y-6 mt-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C38762]/10 flex items-center justify-center">
                  <Phone className="text-[#C38762]" size={22} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Phone</p>
                  <p className="text-lg font-medium">
                    +91 9133 633 327
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C38762]/10 flex items-center justify-center">
                  <Mail className="text-[#C38762]" size={22} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p className="text-lg font-medium">
                    sales@epoquegroup.in
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C38762]/10 flex items-center justify-center">
                  <MapPin className="text-[#C38762]" size={22} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="text-lg font-medium">
                    Visakhapatnam, Andhra Pradesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#111111] border border-[#222222] rounded-[30px] p-8 lg:p-10">
            <h3 className="text-3xl font-bold mb-8">
              Request A Callback
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-black border border-[#333333] rounded-xl px-5 py-4 outline-none focus:border-[#C38762]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-black border border-[#333333] rounded-xl px-5 py-4 outline-none focus:border-[#C38762]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-black border border-[#333333] rounded-xl px-5 py-4 outline-none focus:border-[#C38762]"
              />

              <textarea
                rows={5}
                placeholder="Message"
                className="w-full bg-black border border-[#333333] rounded-xl px-5 py-4 outline-none focus:border-[#C38762]"
              />

            

              <a
                href="https://wa.me/919133633327"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center border border-[#C38762] text-[#C38762] py-4 rounded-xl font-semibold hover:bg-[#C38762] hover:text-white transition duration-300"
              >
                Chat On WhatsApp
              </a>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}