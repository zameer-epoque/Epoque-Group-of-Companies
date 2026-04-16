"use client";

export default function ContactSection() {
  return (
    <section className="bg-[#e9e9e9] py-24 px-6 md:px-20 text-center">
      
      {/* TITLE */}
      <h2 className="text-4xl md:text-6xl font-light text-[#a88463] mb-16">
        Let’s Connect
      </h2>

      {/* FORM */}
      <form className="max-w-xl mx-auto text-left space-y-8">
        
        {/* NAME */}
        <div>
          <label className="text-xs text-gray-500">NAME</label>
          <input
            type="text"
            className="w-full bg-transparent border-b border-[#a88463] outline-none py-2"
          />
        </div>

        {/* PHONE */}
        <div>
          <label className="text-xs text-gray-500">PHONE NUMBER</label>
          <input
            type="text"
            className="w-full bg-transparent border-b border-[#a88463] outline-none py-2"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-xs text-gray-500">E-MAIL</label>
          <input
            type="email"
            className="w-full bg-transparent border-b border-[#a88463] outline-none py-2"
          />
        </div>

        {/* MESSAGE */}
        <div>
          <label className="text-xs text-gray-500">YOUR MESSAGE</label>
          <textarea
            rows={3}
            className="w-full bg-transparent border-b border-[#a88463] outline-none py-2 resize-none"
          ></textarea>
        </div>

        {/* CHECKBOX */}
        <div className="flex items-start gap-3 text-xs text-gray-500">
          <input type="checkbox" className="mt-1" />
          <p>
            I agree with the <span className="underline">terms and conditions</span> and{" "}
            <span className="underline">privacy policy</span> of this website and authorize
            communication via Email/SMS/WhatsApp/Call.
          </p>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="flex justify-center pt-6">
          <button
            type="submit"
            className="w-20 h-20 rounded-full bg-[#a88463] text-white text-2xl flex items-center justify-center hover:scale-110 transition"
          >
            ↗
          </button>
        </div>
      </form>
    </section>
  );
}