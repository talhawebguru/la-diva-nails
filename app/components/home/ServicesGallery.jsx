"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const services = [
  { src: "/images/service-1.png", alt: "Nail Art" },
  { src: "/images/service-2.png", alt: "Skin Care" },
  { src: "/images/service-3.png", alt: "Manicure" },
  { src: "/images/service-4.png", alt: "Hair Styling" },
  { src: "/images/service-5.png", alt: "Eyebrow Care" },
  { src: "/images/service-6.png", alt: "Beauty Treatments" },
];

const ServicesGallery = () => (
  <section className="pt-6 lg:pt-20 pb-4 overflow-hidden">
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-2 lg:px-4"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="relative w-full h-[301px] overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Image
            src={service.src}
            alt={service.alt}
            fill
            className="object-cover xl:object-contain object-center"
          />
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default ServicesGallery;