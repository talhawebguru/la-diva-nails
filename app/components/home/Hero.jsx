"use client";
import React from "react";
import Container from "../common/Container";
import Image from "next/image";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 * i, duration: 0.7, ease: "easeOut" },
  }),
};

const buttonVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { delay: 0.8, duration: 0.5, ease: "backOut" },
  },
};

const buttonTextVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 1.1, duration: 0.5, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section className="w-full h-[calc(100vh-134px)] max-h-[920px] flex items-center bg-black/80 relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/heroImg.webp"
        alt="Nail salon"
        fill
        className="object-cover object-center z-0"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-10" />
      <Container>
        <div className="relative z-20 flex h-full justify-end pt-80">
          <div className="w-full">
            {/* Headline */}
            <motion.h1
              className="font-['Inter'] selection:bg-pink-100 font-normal text-white text-[64px] md:text-[90px] lg:text-[109px] leading-[1.1] max-w-4xl"
              initial="hidden"
              animate="visible"
              custom={1}
              variants={textVariants}
            >
              Your destination for
              <br />
              <motion.span
                className="text-[#ebdfdc] block text-[48px] md:text-[70px] lg:text-[75px] leading-[1.1]"
                initial="hidden"
                animate="visible"
                custom={2}
                variants={textVariants}
              >
                picture-perfect
              </motion.span>
              <motion.span
                className="text-white block text-[60px] md:text-[90px] lg:text-[104px] leading-[1.1]"
                initial="hidden"
                animate="visible"
                custom={3}
                variants={textVariants}
              >
                nails
              </motion.span>
            </motion.h1>
            {/* Subheadline */}
            <motion.p
              className="mt-8 text-white text-[18px] md:text-[22px] font-medium font-['Figtree'] leading-[1.35] max-w-xl"
              initial="hidden"
              animate="visible"
              custom={4}
              variants={textVariants}
            >
              Welcome to <span className="font-semibold">La Diva</span>, a full
              service nail salon and boutique.
            </motion.p>
          </div>

          {/* Button */}
          <motion.div
            className="mt-12 flex items-end justify-end"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <motion.button
              className="bg-[#f8f3ee] rounded-full w-40 h-40 flex flex-col items-center justify-center shadow-lg"
              style={{ overflow: "hidden" }}
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
            >
              <motion.span
                className="text-[#40372c] text-xs font-medium font-['Figtree'] uppercase leading-tight tracking-[3px] text-center"
                initial="hidden"
                animate="visible"
                variants={buttonTextVariants}
              >
                our
                <br />
                services
                <br />
                menu
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;