"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const NailArtGallery = () => (
  <section className="relative w-full h-[88vh] bg-gray-800 overflow-hidden selection:bg-[rgb(192,138,153)] selection:text-white">
    {/* Background Image */}
    <motion.div
      className="absolute inset-0 w-full h-full overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Image
        src="/images/nail-art-gallery.png"
        alt="Nail Art Gallery"
        fill
        className="object-cover object-left md:object-center"
        priority
      />
    </motion.div>

    {/* Overlay Content */}
    <motion.div
      className="absolute inset-0 flex flex-col justify-center md:left-[58%] items-start px-4 sm:px-8 lg:px-16 text-white text-left"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="mb-4">
        <div className="text-white text-xs font-medium font-figtree  uppercase leading-tight tracking-[3px] mb-2">
          Nail Gallery
        </div>
        <h2 className="text-white text-[40px] md:text-[55px] lg:text-[65.95px] font-normal font-mogan leading-[75.60px]">
          Explore our<br />nail art gallery
        </h2>
      </div>
      <p className="text-white text-lg font-normal font-figtree  leading-7 mb-8">
        A gallery of nail designs our artists have created.
      </p>
      <button className="px-8 py-3 bg-white text-[#40372c] text-xs font-medium font-figtree  uppercase leading-tight tracking-[3px] hover:bg-[#f8f3ee] transition">
        Explore Gallery
      </button>
    </motion.div>
  </section>
);

export default NailArtGallery;