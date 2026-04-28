export default function Mission() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Our Mission
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Our mission is to make property ownership completely stress-free for
          our clients by providing reliable, transparent, and professional
          property management services. We aim to help property owners —
          especially NRIs — manage their assets from anywhere in the world
          with confidence and peace of mind.
        </p>

        {/* 🔥 HIGHLIGHTS */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="font-semibold text-lg mb-2">
              Transparency
            </h3>
            <p className="text-gray-500 text-sm">
              Clear communication and honest updates at every step.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="font-semibold text-lg mb-2">
              Reliability
            </h3>
            <p className="text-gray-500 text-sm">
              Trusted services you can depend on anytime.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="font-semibold text-lg mb-2">
              Customer Focus
            </h3>
            <p className="text-gray-500 text-sm">
              Your satisfaction and peace of mind are our priority.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-10">
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