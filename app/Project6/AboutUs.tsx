export default function AboutUs() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* 🖼 IMAGE */}
        <div>
          <img
            src="/about-property.jpg"
            alt="Property Management"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* 📝 CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Us
          </h2>

          <p className="text-gray-600 mb-4">
            We are a professional property management company helping property
            owners manage, maintain, and grow their real estate investments
            without stress.
          </p>

          <p className="text-gray-600 mb-6">
            Whether you are in India or abroad, our team ensures your property
            is handled with care — from tenant management to rent collection
            and legal support.
          </p>

          {/* 🔢 STATS */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-white rounded-lg shadow text-center">
              <h3 className="text-2xl font-bold text-blue-600">500+</h3>
              <p className="text-sm text-gray-500">Properties Managed</p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow text-center">
              <h3 className="text-2xl font-bold text-blue-600">10+</h3>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow text-center">
              <h3 className="text-2xl font-bold text-blue-600">100%</h3>
              <p className="text-sm text-gray-500">Client Satisfaction</p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow text-center">
              <h3 className="text-2xl font-bold text-blue-600">24/7</h3>
              <p className="text-sm text-gray-500">Support</p>
            </div>
          </div>

          {/* 🔥 CTA */}
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