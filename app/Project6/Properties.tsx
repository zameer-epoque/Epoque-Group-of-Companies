export default function Properties() {
  const properties = [
    {
      title: "2BHK Apartment",
      location: "Hyderabad",
      image: "/about-property1.jpg",
    
    },
    {
      title: "Independent House",
      location: "Vijayawada",
     image: "/about-property2.jpg",
 
    },
    {
      title: "Residential Plot",
      location: "Vizag",
      image: "/about-property3.jpg",

    },
    {
      title: "Luxury Villa",
      location: "Gachibowli",
      image: "/about-property4.jpg",

    },
    {
      title: "Commercial Space",
      location: "Kukatpally",
      image: "/about-property5.jpg",

    },
    {
      title: "Farm Land",
      location: "Amaravati",
      image: "/about-property6.jpg",

    },

     {
      title: "2BHK Apartment",
      location: "Hyderabad",
      image: "/about-property7.jpg",

    },
    {
      title: "Independent House",
      location: "Vijayawada",
     image: "/about-property8.jpg",

    },
    {
      title: "Residential Plot",
      location: "Vizag",
      image: "/about-property9.jpg",
    
    },
    {
      title: "Luxury Villa",
      location: "Gachibowli",
      image: "/about-property10.jpg",

    },
    {
      title: "Commercial Space",
      location: "Kukatpally",
      image: "/about-property11.jpg",

    },
    {
      title: "Farm Land",
      location: "Amaravati",
      image: "/about-property12.jpg",

    },

     {
      title: "2BHK Apartment",
      location: "Hyderabad",
      image: "/about-property13.jpg",

    },
    {
      title: "Independent House",
      location: "Vijayawada",
     image: "/about-property15.jpg",

    },
    {
      title: "Residential Plot",
      location: "Vizag",
      image: "/about-property16.jpg",

    },
    {
      title: "Luxury Villa",
      location: "Gachibowli",
      image: "/about-property7.jpg",

    },
    {
      title: "Commercial Space",
      location: "Kukatpally",
      image: "/about-property18.jpg",

    },
    
  ];

  return (
    <section className="relative py-4 px-6 overflow-hidden" id="properties">

      {/* 🔥 GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2F4A8A] to-[#3BA64B]"></div>

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 🔥 GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-white">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Properties We Manage
        </h2>

        <p className="text-center text-white/80 mb-12">
          Trusted by property owners across multiple cities in India.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg hover:scale-105 transition"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-200 h-56 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="text-white/70 text-sm">
                  {item.location}
                </p>

                {/* STATUS */}
                
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block bg-white text-[#2F4A8A] px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Manage Your Property Now
          </a>
        </div>

      </div>
    </section>
  );
}