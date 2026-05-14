"use client";

import { motion } from "framer-motion";

export default function Location() {
  return (
    <section
      id="location"
      className="
        relative
        overflow-hidden
        py-28
        px-6
        bg-[#f8fbff]
      "
    >
      {/* PREMIUM LIGHT BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(22,116,193,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(237,16,36,0.05),transparent_30%)]" />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TOP BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              border
              border-[#dbeafe]
              bg-white/80
              backdrop-blur-xl
              text-[#1674c1]
              text-sm
              shadow-[0_10px_30px_rgba(0,0,0,0.06)]
            "
          >
            📍 Prime Connectivity Location
          </div>
        </motion.div>

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2
            className="
              text-4xl
              md:text-6xl
              font-black
              leading-tight
              tracking-tight
            "
          >
            <span className="text-[#0f172a]">
              Prime Location
            </span>

            <br />

            <span className="bg-gradient-to-r from-[#1674c1] to-[#ed1024] bg-clip-text text-transparent">
              Advantage
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              md:text-xl
              text-[#475569]
              max-w-3xl
              mx-auto
              leading-relaxed
            "
          >
            Seamless connectivity to IT hubs,
            schools, hospitals, malls &
            entertainment destinations.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT MAP */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-[#e2e8f0]
              shadow-[0_20px_60px_rgba(15,23,42,0.08)]
              h-[500px]
              bg-white
            "
          >
            {/* MAP */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.3374100899537!2d78.3716542749384!3d17.53911528337423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8d2c7b5147b5%3A0xe675b36d78bd3bff!2sAPR%20Praveen%E2%80%99s%20Hillside%20%E2%80%93%20Luxury%20Villas%20in%20Bachupally!5e0!3m2!1sen!2sin!4v1777544685389!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent pointer-events-none" />

            {/* LOCATION BADGE */}
            <div
              className="
                absolute
                bottom-6
                left-6
                px-5
                py-3
                rounded-2xl
                bg-white/90
                backdrop-blur-xl
                border
                border-[#e2e8f0]
                text-[#0f172a]
                shadow-[0_10px_30px_rgba(15,23,42,0.08)]
              "
            >
              <p className="text-sm text-[#64748b]">
                📍 APR Praveen's Hillside
              </p>

              <h4 className="font-semibold mt-1">
                Bachupally, Hyderabad
              </h4>
            </div>

            {/* MAP BUTTON */}
            <a
              href="https://maps.app.goo.gl/E1R1sz9GRekLg4dT6"
              target="_blank"
              rel="noopener noreferrer"
              className="
                absolute
                top-6
                right-6
                group
                overflow-hidden
                inline-flex
                items-center
                justify-center
                px-5
                py-3
                rounded-2xl
                font-semibold
                text-white
                bg-gradient-to-r
                from-[#1674c1]
                to-[#ed1024]
                shadow-[0_15px_35px_rgba(22,116,193,0.20)]
                transition-all
                duration-300
                hover:scale-105
              "
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition"></span>

              <span className="relative z-10">
                View Map
              </span>
            </a>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-[#e2e8f0]
              bg-white/90
              backdrop-blur-2xl
              p-8
              shadow-[0_20px_60px_rgba(15,23,42,0.08)]
            "
          >
            {/* LIGHT GLOW */}
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-[#1674c1]/5 blur-[100px]" />

            {/* TITLE */}
            <h3
              className="
                relative
                z-10
                text-3xl
                font-bold
                text-[#0f172a]
              "
            >
              Nearby Essentials
            </h3>

            {/* DETAILS */}
            <div className="relative z-10 mt-10 space-y-8">

              {/* EDUCATION */}
              <div
                className="
                  rounded-2xl
                  border
                  border-[#e2e8f0]
                  bg-[#f8fbff]
                  p-6
                "
              >
                <h4 className="text-[#1674c1] text-xl font-semibold mb-4">
                  🎓 Education
                </h4>

                <ul className="space-y-3 text-[#475569]">
                  <li>• Kennedy High School – 2 km</li>
                  <li>• Silver Oaks School – 2 km</li>
                  <li>• VNR VJIET – 2 km</li>
                  <li>• DPS – 3 km</li>
                </ul>
              </div>

              {/* HEALTHCARE */}
              <div
                className="
                  rounded-2xl
                  border
                  border-[#e2e8f0]
                  bg-[#f8fbff]
                  p-6
                "
              >
                <h4 className="text-[#ed1024] text-xl font-semibold mb-4">
                  🏥 Healthcare
                </h4>

                <ul className="space-y-3 text-[#475569]">
                  <li>• Mam’s Hospital – 2 km</li>
                  <li>• SLG Hospital – 3 km</li>
                  <li>• Usha Mullapudi – 6 km</li>
                </ul>
              </div>

              {/* LIFESTYLE */}
              <div
                className="
                  rounded-2xl
                  border
                  border-[#e2e8f0]
                  bg-[#f8fbff]
                  p-6
                "
              >
                <h4 className="text-[#f59e0b] text-xl font-semibold mb-4">
                  🛍 Lifestyle
                </h4>

                <ul className="space-y-3 text-[#475569]">
                  <li>• GSM Mall – 15 mins</li>
                  <li>• Nexus Mall – 20 mins</li>
                  <li>• South India Mall – 20 mins</li>
                </ul>
              </div>
            </div>

            {/* CTA BUTTON */}
            <a
              href="#contact"
              className="
                relative
                z-10
                group
                overflow-hidden
                mt-10
                inline-flex
                w-full
                items-center
                justify-center
                rounded-2xl
                py-4
                text-lg
                font-semibold
                text-white
                bg-gradient-to-r
                from-[#1674c1]
                to-[#ed1024]
                shadow-[0_15px_40px_rgba(22,116,193,0.20)]
                transition-all
                duration-300
                hover:scale-[1.02]
              "
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition"></span>

              <span className="relative z-10">
                Schedule Site Visit
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}