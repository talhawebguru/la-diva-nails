"use client";

import React from "react";
import Container from "../common/Container";
import Image from "next/image";
import { motion } from "motion/react";

const features = [
  {
    icon: "/images/Icon1.png",
    title: "Upscale Location",
    desc: "Our salon is located in the upscale suburban neighborhood.",
  },
  {
    icon: "/images/Icon2.png",
    title: "Artistic Integrity",
    desc: "We use the highest quality organic & vegan nail materials to provide superior nails.",
  },
  {
    icon: "/images/Icon3.png",
    title: "Leading Designs",
    desc: "We provide a range of nail treatments that will leave your nails looking their best.",
  },
];

const Features = () => (
  <section className="py-16 bg-white overflow-hidden">
    <Container>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src={feature.icon}
              alt={feature.title}
              width={64}
              height={64}
              className="mb-6"
            />
            <div className="text-[#40372c] text-[22px] font-medium font-figtree leading-[29.7px] mb-3">
              {feature.title}
            </div>
            <div className="text-[#5b534a] text-lg font-normal font-figtree leading-7 max-w-[400px]">
              {feature.desc}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  </section>
);

export default Features;