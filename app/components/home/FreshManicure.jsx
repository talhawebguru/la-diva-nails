"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const FreshManicure = () => (
  <section className="flex flex-col lg:flex-row items-center lg:items-start gap-12  px-8 lg:px-0 bg-[#ebdfdc]">
    {/* Image Section */}
    <motion.div
      className="w-full lg:w-[847px] h-[800px] relative rounded-lg overflow-hidden"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Image
        src="/images/fresh-manicure.png"
        alt="Fresh Manicure"
        fill
        className="object-cover object-center"
        priority
      />
    </motion.div>

    {/* Text Section */}
    <motion.div
      className="w-full lg:w-[1073px] flex flex-col py-28 gap-8 px-8 lg:px-16"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <div>
        <div className="text-[#40372c] text-xs font-medium font-figtree  uppercase leading-tight tracking-[3px] mb-2">
          More than just nails
        </div>
        <h2 className="text-[#c08a99] text-[51.13px] font-normal font-['Inter'] leading-[68px]">
          There's
          <span className="block text-[#40372c] text-[64.12px] font-normal font-['Inter'] leading-[75.60px]">
            nothing a fresh
          </span>
          <span className="block text-[#40372c] text-[63.98px] font-normal font-['Inter'] leading-[75.60px]">
            manicure can’t fix
          </span>
        </h2>
      </div>

      {/* Statistics */}
      <div className="flex flex-col gap-8">
        {/* Statistic 1 */}
        <div className="flex items-start gap-4">
          <div className="flex items-baseline">
            <span className="text-[#66715f] text-[54px] font-normal font-['Inter'] leading-[56.70px]">
              5
            </span>
            <span className="text-[#66715f] text-[37.97px] font-normal font-['Inter'] leading-[56.70px]">
              ,000+
            </span>
          </div>
          <div>
            <div className="text-[#40372c] text-[22px] font-medium font-figtree  leading-[29.70px] mb-2">
              Cuticles removed every year
            </div>
            <p className="text-[#5b534a] text-lg font-normal font-figtree  leading-7">
              Our skilled technicians provide a range of nail treatments that
              will leave your nails looking and feeling their best.
            </p>
          </div>
        </div>

        {/* Statistic 2 */}
        <div className="flex items-start gap-4">
          <div className="flex items-baseline">
            <span className="text-[#66715f] text-[37.44px] font-normal font-['Inter'] leading-[56.70px]">
              13
            </span>
            <span className="text-[#66715f] text-[47.14px] font-normal font-['Inter'] leading-[56.70px]">
              25
            </span>
          </div>
          <div>
            <div className="text-[#40372c] text-[22px] font-medium font-figtree  leading-[29.70px] mb-2">
              Unique nail designs created
            </div>
            <p className="text-[#5b534a] text-lg font-normal font-figtree  leading-7">
              Our nail specialists can replicate any design and nail art from
              customers' ideas.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default FreshManicure;