"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import Container from "../common/Container";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkIsMobile(); // Initial check
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
};

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
  const isMobile = useIsMobile();
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
      className="w-full h-[650px] sm:h-[calc(100vh-134px)] py-10 sm:py-5  max-h-[920px] !flex !flex-wrap justify-center  items-center md:items-end pb-5 bg-black/80 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image */}
      <Image
        src="/images/heroImg.webp"
        alt="Nail salon"
        fill
        quality={100}
        className="object-cover sm:object-center z-0"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-10" />
      <Container>
        <div className="relative z-20 flex flex-wrap md:flex-nowrap  h-full justify-center md:justify-end items-end">
          <div className="w-full px-4 md:px-0 text-center md:text-left">
            {/* Headline */}
            <motion.h1
              className="font-mogan selection:bg-[rgba(192,138,153,1)] font-normal text-white text-[60px] sm:text-[64px] lg:text-[90px] xl:text-[120px] 2xl:text-[130px] leading-14 md:leading-9 lg:leading-[120px]"
              initial="hidden"
              animate="visible"
              custom={1}
              variants={textVariants}
            >
              Your destination for
              <br className="hidden sm:block" />
              <motion.span
                className="text-[#ebdfdc] selection:text-white font-betterlett text-[50px] sm:text-[80px] lg:text-[110px] leading-[1.1]"
                initial="hidden"
                animate="visible"
                custom={2}
                variants={textVariants}
              >
                picture-perfect
              </motion.span>
              <br className="md:hidden" />
              <motion.span
                className="text-white text-[60px] sm:text-[80px] lg:text-[130px] leading-[1.1] ml-8"
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
              className="mt-4 selection:bg-[rgba(192,138,153,1)] sm:mt-8 text-white text-[18px] md:text-[22px] font-medium font-figtree  leading-[1.35] max-w-2xl"
              initial="hidden"
              animate="visible"
              custom={4}
              variants={textVariants}
            >
              Welcome to <span className="font-semibold">The Nail Spa</span>, a
              full service nail salon and boutique.
            </motion.p>
          </div>

          {/* Button */}
          <motion.div
            className="mt-8 sm:mt-12 flex justify-center md:items-end md:justify-end"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <motion.button
              ref={buttonRef}
              className="bg-[#f8f3ee] rounded-full w-32 h-32 sm:w-40 sm:h-40 flex flex-col items-center justify-center shadow-lg cursor-pointer"
              style={{
                translateX: isMobile ? 0 : translateX,
                translateY: isMobile ? 0 : translateY,
              }}
            >
              <motion.span
                className="text-[#40372c] text-xs  font-medium font-figtree  uppercase leading-tight tracking-[3px] text-center"
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
