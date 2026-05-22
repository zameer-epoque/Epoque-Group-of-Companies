"use client";


import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const blogs = [
  {
    title: "How Digital Marketing Drives Luxury Brand Growth",
    image: "/blog1.jpg",
    category: "Digital Marketing",
    desc: "Discover how luxury brands use premium digital marketing strategies, AI-driven campaigns, and high-converting funnels to scale visibility and revenue growth.",
  },

  {
    title: "SEO Strategies For Real Estate Businesses",
    image: "/blog2.jpg",
    category: "SEO Growth",
    desc: "Learn advanced real estate SEO strategies designed to improve Google rankings, generate qualified property leads, and increase organic traffic.",
  },

  {
    title: "Why Branding Matters In Premium Markets",
    image: "/blog3.jpg",
    category: "Branding",
    desc: "Explore how premium branding creates authority, customer trust, and high-value positioning for businesses in competitive markets across India.",
  },
];

export default function LatestBlogs() {
  return (
    <section
      className="relative overflow-hidden bg-[#0B0B0B] py-24 text-white"
      aria-label="Latest Blogs - SEO, Real Estate Marketing & Digital Growth"
    >
      {/* Premium Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="h-[900px] w-[900px] bg-gradient-to-r from-[#C79A3B]/10 via-[#D45B5B]/10 to-[#7A2E63]/10 blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
        

          <h2 className="relative mt-8 inline-block text-5xl md:text-7xl font-semibold leading-tight tracking-tight">
            Latest{" "}
            <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
              Insights
            </span>

            {/* Line */}
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="absolute left-1/2 -bottom-5 h-[4px] w-[90%] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]"
            />
          </h2> <br/><br/><br/>
  <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur-md">
            SEO • Digital Marketing • AI Lead Generation • Hyderabad
          </div>
          <p className="mx-auto mt-10 max-w-4xl text-lg md:text-xl leading-relaxed text-gray-400">
            Explore premium insights on SEO services, digital marketing,
            AI-powered lead generation, luxury branding, real estate marketing,
            and business growth strategies for companies across Hyderabad and
            India.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-3">

          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Border */}
              <div className="rounded-[32px] bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] p-[1px]">

                {/* Card */}
                <div className="relative overflow-hidden rounded-[32px] border border-white/5 bg-gradient-to-br from-[#141414] via-[#191919] to-[#1d1d1d] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_rgba(199,154,59,0.18)]">

                  {/* Image */}
                  <div className="relative h-[280px] overflow-hidden">

                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {/* Category */}
                    <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
                      {blog.category}
                    </div>

                  </div>

                  {/* Content */}
                  <div className="p-8">

                    <h3 className="text-2xl font-semibold leading-snug text-white transition-all duration-300 group-hover:text-[#C79A3B]">
                      {blog.title}
                    </h3>

                    <p className="mt-5 text-base leading-[1.9] text-gray-400">
                      {blog.desc}
                    </p>

                    {/* Button */}
            

<Link
  href="/blog-epoque-group"
  className="mt-8 inline-flex items-center gap-2 text-[#C79A3B] font-semibold text-lg transition-all duration-300 hover:gap-4 hover:text-white"
>
  <span>Read More</span>

  <ArrowUpRight size={18} />
</Link>

                  </div>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* Bottom SEO */}
        <div className="sr-only">
          SEO company Hyderabad, digital marketing agency India,
          real estate marketing agency, AI-powered lead generation,
          luxury branding company Hyderabad, performance marketing,
          organic SEO growth services India.
        </div>

      </div>
    </section>
  );
}