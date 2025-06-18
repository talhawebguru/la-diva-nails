"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const TopQuality = () => (
  <section className="flex flex-col lg:flex-row items-center lg:items-start gap-12 px-8 lg:px-16 bg-[#faf5ec] h-[90vh]">
    {/* Text Section */}
    <motion.div
      className="w-full lg:w-1/2  flex flex-col gap-4 py-20"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-[#40372c] text-[40px] md:text-[64.41px] font-normal font-['Inter'] leading-[75.60px] mb-4">
        We use only top<br />
        quality products<br />
        you can <span className="text-[#c08a99] text-[43.70px] font-normal font-['Inter'] leading-[68px]">trust</span>
      </h2>
      <p className="text-[#5b534a] text-lg font-normal font-figtree  leading-7 mb-6">
        At our salon, we provide both shellac and gel nail services, so you may
        choose which one best suits your needs. Choose from a wide variety of
        colors for your shellac or gel nails from our skilled professionals. So,
        your freshly painted nails will never break or chip.
      </p>
      <p className="text-[#5b534a] text-lg font-normal font-figtree  leading-7 mb-8">
        You may normally work without worrying about chipping or scratching the
        shellac on your nails for up to two weeks.
      </p>
      <div className="flex gap-8">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-2">
            <Image src="/images/organic.svg" alt="Organic" width={48} height={48} />
          </div>
          <p className="text-[#66715f] text-xs font-semibold font-figtree  uppercase leading-tight tracking-widest">
            organic
          </p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-2">
            <Image src="/images/non-toxic.svg" alt="Non-Toxic" width={48} height={48} />
          </div>
          <p className="text-[#66715f] text-xs font-semibold font-figtree  uppercase leading-tight tracking-widest">
            non-toxic
          </p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-2">
            <Image src="/images/eco-friendly.svg" alt="Eco-Friendly" width={48} height={48} />
          </div>
          <p className="text-[#66715f] text-xs font-semibold font-figtree  uppercase leading-tight tracking-widest">
            eco-friendly
          </p>
        </div>
      </div>
    </motion.div>

    {/* Image Section */}
    <motion.div
      className="w-full lg:w-1/2 h-full relative rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Image
        src="/images/top-quality.png"
        alt="Top Quality Products"
        fill
        className="object-cover object-center"
      />
    </motion.div>
  </section>
);

export default TopQuality;