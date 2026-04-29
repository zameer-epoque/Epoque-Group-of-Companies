export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Villa Sizes & Pricing
          </h2>
          <p className="text-gray-400 mt-3">
            Choose your perfect luxury villa configuration
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-[#1E293B] p-6 rounded-2xl border border-white/10 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">
              200 Sq Yards Villa
            </h3>

            <p className="text-gray-400 text-sm">
              East: 3075 Sft
            </p>
            <p className="text-gray-400 text-sm mb-4">
              West: 3095 Sft
            </p>

            <p className="text-2xl font-bold text-green-400">
              ₹3.69 Cr*
            </p>

            <p className="text-gray-500 text-sm mb-6">
              ₹12,000 / sft
            </p>

            <a
              href="#contact"
              className="block text-center bg-gradient-to-r from-green-500 to-blue-500 py-3 rounded-lg font-semibold"
            >
              Book Visit
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1E293B] p-6 rounded-2xl border border-white/10 hover:scale-105 transition relative">

            {/* Popular Tag */}
            <span className="absolute top-4 right-4 bg-green-500 text-xs px-3 py-1 rounded-full">
              Popular
            </span>

            <h3 className="text-xl font-semibold mb-3">
              222 Sq Yards Villa
            </h3>

            <p className="text-gray-400 text-sm">
              East: 3400 Sft
            </p>
            <p className="text-gray-400 text-sm mb-4">
              West: 3400 Sft
            </p>

            <p className="text-2xl font-bold text-green-400">
              ₹4.08 Cr*
            </p>

            <p className="text-gray-500 text-sm mb-6">
              ₹12,000 / sft
            </p>

            <a
              href="#contact"
              className="block text-center bg-gradient-to-r from-green-500 to-blue-500 py-3 rounded-lg font-semibold"
            >
              Book Visit
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1E293B] p-6 rounded-2xl border border-white/10 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">
              267 Sq Yards Villa
            </h3>

            <p className="text-gray-400 text-sm">
              East: 3820 Sft
            </p>
            <p className="text-gray-400 text-sm mb-4">
              West: 3865 Sft
            </p>

            <p className="text-2xl font-bold text-green-400">
              ₹4.58 Cr*
            </p>

            <p className="text-gray-500 text-sm mb-6">
              ₹12,000 / sft
            </p>

            <a
              href="#contact"
              className="block text-center bg-gradient-to-r from-green-500 to-blue-500 py-3 rounded-lg font-semibold"
            >
              Book Visit
            </a>
          </div>

        </div>

        {/* Extra Info */}
        <div className="text-center mt-12 text-gray-400 text-sm">
          Possession by July 2026 • HMDA & RERA Approved
        </div>

      </div>
    </section>
  );
}