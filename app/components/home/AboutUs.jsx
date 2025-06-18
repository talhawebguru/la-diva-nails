"use client";

import React from "react";
import Container from "../common/Container";
import Image from "next/image";
import { motion } from "motion/react";

const AboutUs = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-28">
          {/* Images */}
          <motion.div
            className="order-2 lg:order-1 lg:flex-1  xl:flex-1 relative w-full flex justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.div
              className="rounded overflow-hidden"
              initial={{ x: -30 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true , amount: 0.4 }}
            >
              <Image
                src="/images/aboutus1.png"
                alt="Nail care"
                width={400}
                height={500}
                className="w-[455px] h-[620px] object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute bottom-0 right-20 translate-x-1/4 translate-y-1/4 overflow-hidden"
              initial={{ x: 30 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <Image
                src="/images/aboutus2.png"
                alt="Nail treatment"
                width={250}
                height={300}
                className="w-[250px] h-[300px] object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="lg:flex-1 xl:flex-2 order-1 lg:order-2 max-w-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="mb-4 text-[#40372c] selection:bg-[rgb(192,138,153)] selection:text-white text-xs font-medium font-figtree uppercase leading-tight tracking-[3px]">
              Extensive Nail Care
            </div>
            <h2 className="mb-6 lg:w-[500px] selection:bg-[rgb(192,138,153)] selection:text-white font-mogan font-normal text-[#40372c] text-[55px] md:text-[72px] leading-[1.15]">
              Get your look
              polished,<span className="text-[rgb(192,138,153)] inline-block mx-4 font-betterlett">from</span>
              fingers to toes
            </h2>
            <p className="mb-10 selection:bg-[rgb(192,138,153)] selection:text-white text-[#5b534a] text-lg font-normal font-figtree leading-7">
              Nail art, manicures, and nail shaping are just some of the specialties
              of our experienced nail technicians. You can count on us whether you
              want a classic manicure, trendy shellac paint, or custom nail art.
            </p>
            <motion.button
              className="px-8 py-3 border border-[#66715f] rounded bg-white text-[#66715f] text-xs font-medium font-figtree uppercase leading-tight tracking-[3px] hover:bg-[#f8f3ee] transition"
              whileHover={{ backgroundColor: "rgb(102,113,95)", color: "white" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              More About Us
            </motion.button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;