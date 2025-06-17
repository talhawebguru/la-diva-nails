"use client";
import React, { useRef } from "react";
import Container from "../common/Container";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";

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
  const buttonRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const translateX = useTransform(mouseX, [0, 1], [-20, 20]);
  const translateY = useTransform(mouseY, [0, 1], [-20, 20]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      className="w-full h-[calc(100vh-134px)] max-h-[920px] !flex !flex-wrap items-center bg-black/80 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
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
        <div className="relative z-20 flex flex-w h-full justify-end pt-20 md:pt-[25%]">
          <div className="w-full px-4 md:px-0">
            {/* Headline */}
            <motion.h1
              className="font-['Inter'] selection:bg-pink-100 font-normal text-white text-[40px] sm:text-[50px] md:text-[64px] lg:text-[90px] leading-[1.1] max-w-4xl"
              initial="hidden"
              animate="visible"
              custom={1}
              variants={textVariants}
            >
              Your destination for
              <br />
              <motion.span
                className="text-[#ebdfdc] block text-[30px] sm:text-[40px] md:text-[48px] lg:text-[70px] leading-[1.1]"
                initial="hidden"
                animate="visible"
                custom={2}
                variants={textVariants}
              >
                picture-perfect
              </motion.span>
              <motion.span
                className="text-white block text-[40px] sm:text-[50px] md:text-[60px] lg:text-[90px] leading-[1.1]"
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
              className="mt-4 sm:mt-8 text-white text-[14px] sm:text-[16px] md:text-[18px] font-medium font-['Figtree'] leading-[1.35] max-w-xl"
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
            className="mt-8 sm:mt-12 flex items-end justify-end"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <motion.button
              ref={buttonRef}
              className="bg-[#f8f3ee] rounded-full w-32 h-32 sm:w-40 sm:h-40 flex flex-col items-center justify-center shadow-lg cursor-pointer"
              style={{ translateX, translateY }}
            >
              <motion.span
                className="text-[#40372c] text-xs sm:text-sm font-medium font-['Figtree'] uppercase leading-tight tracking-[3px] text-center"
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