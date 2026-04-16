"use client";



export default function AboutPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] flex items-center justify-center text-center">
        <img
          src="/imagesnew/house2.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div className="relative z-10 px-4">
          <h1 className="text-3xl md:text-6xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-gray-300 text-lg">
            Creating lasting value through trust, vision, and innovation
          </p>
        </div>
      </section>

      {/* ================= TEAM ================= */}
  

      {/* ================= VISION / MISSION ================= */}
      <section className="py-16 px-6 md:px-12 grid md:grid-cols-3 gap-6">

        <div className="bg-gray-900 p-6 rounded-xl">
          <p className="text-xs text-gray-400">VISION</p>
          <h2 className="text-xl font-bold mt-2">Future Focused</h2>
          <p className="text-gray-400 mt-3">
            Shaping sustainable, innovative living spaces that inspire communities.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <p className="text-xs text-gray-400">MISSION</p>
          <h2 className="text-xl font-bold mt-2">Value Delivered</h2>
          <p className="text-gray-400 mt-3">
            Delivering value-driven, eco-friendly real estate solutions.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <p className="text-xs text-gray-400">GOALS</p>
          <h2 className="text-xl font-bold mt-2">Trusted Innovation</h2>
          <p className="text-gray-400 mt-3">
            Building enduring homes and leading innovation.
          </p>
        </div>

      </section>

      {/* ================= IMAGE + TEXT ================= */}
      <section className="py-16 px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h2 className="text-3xl md:text-4xl mb-4">
            Innovative Living for the Modern World
          </h2>
          <p className="text-gray-400">
            Merging creativity with technology, our architectural designs meet 
            the demands of modern living and sustainability.
          </p>
        </div>

        <img
          src="/imagesnew/house1.jpg"
          className="rounded-xl w-full h-[300px] md:h-[400px] object-cover"
        />
      </section>

      {/* ================= STATS ================= */}
      <section className="py-16 px-6 md:px-12 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
        
        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-3xl font-bold">1500+</h2>
          <p className="text-gray-400">Happy Clients</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-3xl font-bold">6+</h2>
          <p className="text-gray-400">Projects</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-3xl font-bold">20+</h2>
          <p className="text-gray-400">Years Experience</p>
        </div>

      </section>

      {/* ================= FAQ ================= */}
      <section className="py-16 px-6 md:px-12">
        <h2 className="text-3xl mb-6">FAQ</h2>

        <div className="space-y-4">
          <details className="bg-gray-900 p-4 rounded">
            <summary>What types of properties do you offer?</summary>
            <p className="mt-2 text-gray-400">
              Residential, commercial, villas, apartments.
            </p>
          </details>

          <details className="bg-gray-900 p-4 rounded">
            <summary>Where are your projects located?</summary>
            <p className="mt-2 text-gray-400">
              Hyderabad prime locations like Gachibowli, Tellapur.
            </p>
          </details>

          <details className="bg-gray-900 p-4 rounded">
            <summary>Are your projects RERA approved?</summary>
            <p className="mt-2 text-gray-400">
              Yes, all projects comply with RERA regulations.
            </p>
          </details>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="py-16 px-6 md:px-12 text-center">
        <h2 className="text-3xl mb-6">Get In Touch</h2>

        <form className="max-w-xl mx-auto space-y-4">
          <input
            placeholder="Your Name"
            className="w-full p-3 bg-gray-900 rounded"
          />
          <input
            placeholder="Email"
            className="w-full p-3 bg-gray-900 rounded"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 bg-gray-900 rounded"
          />

          <button className="bg-white text-black px-6 py-3 rounded">
            Submit
          </button>
        </form>
      </section>

      {/* ================= FOOTER ================= */}
     

    </main>
  );
}