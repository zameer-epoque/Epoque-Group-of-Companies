const floorPlans = [
  {
    title: "BLOCK A & B",
      floorPlan: "/MK-One-block1.jpg",
    masterPlan: "/block1-mk.jpg",
   
  },
  {
    title: "BLOCK C & D",
     floorPlan: "/MK-One-block2.jpg",
    masterPlan: "/block2-mk.jpg",
   
  },
];

export default function FloorPlansSection() {
  return (
    <section
      id="floorplans"
      className="bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-20">
          <span className="text-[#C38762] uppercase tracking-[5px]">
            FLOOR PLANS
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold">
            Master Layouts
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Explore detailed floor plans and tower layouts designed
            for luxurious and spacious living.
          </p>
        </div>

        <div className="space-y-20">
          {floorPlans.map((plan, index) => (
            <div key={index}>
              
              <h3 className="text-center text-2xl md:text-3xl font-semibold text-[#C38762] mb-10">
                {plan.title}
              </h3>

              <div className="grid lg:grid-cols-2 gap-10">

                <div className="group overflow-hidden rounded-3xl border border-[#C38762]/20">
                  <img
                    src={plan.masterPlan}
                    alt={plan.title}
                    className="w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="group overflow-hidden rounded-3xl border border-[#C38762]/20">
                  <img
                    src={plan.floorPlan}
                    alt={plan.title}
                    className="w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}