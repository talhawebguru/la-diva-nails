"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const FreshManicure = () => (
  <section className="flex flex-col xl:flex-row items-center  gap-12  bg-[#ebdfdc]">
    {/* Image Section */}
    <motion.div
      className="order-2 xl:order-1 w-full h-[500px] xl:w-[847px] xl:h-[800px] relative rounded-lg overflow-hidden"
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
      />
    </motion.div>

    {/* Text Section */}
    <motion.div
      className="order-1 xl:order-2 w-full lg:w-[1073px] flex flex-col py-28 gap-8 px-2.5 sm:px-8 lg:px-16"
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
        <h2 className="text-[#c08a99] text-[50px] sm:text-[68.13px] font-normal font-betterlett leading-[68px] mt-4 inline-block">
          There's
          <span className="inline-block mx-2 text-[#40372c] text-[50px] sm:text-[64px] 2xl:text-[72.12px] font-normal font-mogan leading-[75.60px] ">
            nothing a fresh
          </span>
          <span className="block text-[#40372c] text-[50px] sm:text-[72.98px] font-normal font-mogan leading-[75.60px]">
            manicure can’t fix
          </span>
        </h2>
      </div>

      {/* Statistics */}
      <div className="flex flex-col  gap-8">
        {/* Statistic 1 */}
        <div className="flex flex-wrap sm:flex-nowrap items-start gap-4">
          <div className="flex items-baseline sm:flex-1">
            <span className="text-[#66715f] text-[54px] font-normal font-mogan leading-[56.70px]">
              5
            </span>
            <span className="text-[#66715f] text-[54.97px] font-normal font-mogan leading-[56.70px]">
              ,000+
            </span>
          </div>
          <div className="sm:flex-3">
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
        <div className="flex flex-wrap sm:flex-nowrap items-start gap-4">
          <div className="flex items-baseline sm:flex-1">
            <span className="text-[#66715f] text-[54px] font-normal font-mogan leading-[56.70px]">
              13
            </span>
            <span className="text-[#66715f] text-[54px] font-normal font-mogan leading-[56.70px]">
              25
            </span>
          </div>
          <div className="sm:flex-3">
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