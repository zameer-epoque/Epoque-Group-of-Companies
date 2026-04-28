export default function Properties() {
  const properties = [
    {
      title: "2BHK Apartment",
      location: "Hyderabad",
      image: "/properties/p1.jpg",
      status: "Managed",
    },
    {
      title: "Independent House",
      location: "Vijayawada",
      image: "/properties/p2.jpg",
      status: "Rented",
    },
    {
      title: "Residential Plot",
      location: "Vizag",
      image: "/properties/p3.jpg",
      status: "Monitored",
    },
    {
      title: "Luxury Villa",
      location: "Gachibowli",
      image: "/properties/p4.jpg",
      status: "Managed",
    },
    {
      title: "Commercial Space",
      location: "Kukatpally",
      image: "/properties/p5.jpg",
      status: "Leased",
    },
    {
      title: "Farm Land",
      location: "Amaravati",
      image: "/properties/p6.jpg",
      status: "Secured",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Properties We Manage
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Trusted by property owners across multiple cities in India.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {properties.map((item, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.location}</p>

                <span className="inline-block mt-3 text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 CTA */}
        <div className="text-center mt-12">
          <a
            href="#form"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Manage Your Property Now
          </a>
        </div>

      </div>
    </section>
  );
}