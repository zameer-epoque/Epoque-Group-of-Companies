export default function Highlights() {
  return (
    <section
      id="highlights"
      className="py-20 px-6 bg-[#020617]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Project Highlights
          </h2>
          <p className="text-gray-400 mt-3">
            Designed for modern luxury living with premium features
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              title: "Private Home Theatre",
              desc: "Enjoy cinematic experience in your own villa"
            },
            {
              title: "Premium Red Brick",
              desc: "Strong & durable construction quality"
            },
            {
              title: "45% Open Space",
              desc: "More greenery & fresh environment"
            },
            {
              title: "40 Ft Wide Roads",
              desc: "Spacious internal road planning"
            },
            {
              title: "Lake & Hill View",
              desc: "Peaceful scenic surroundings"
            },
            {
              title: "HMDA & RERA Approved",
              desc: "Legal & secure investment"
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#1E293B] p-6 rounded-xl hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-16 text-center">

          {[
            { value: "15+", label: "Acres" },
            { value: "176", label: "Villas" },
            { value: "2000+", label: "Families" },
            { value: "2.5M+", label: "Sq.ft Built" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold text-green-400">
                {stat.value}
              </h3>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}