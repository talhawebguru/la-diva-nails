import React from "react";
import Container from "../common/Container";
import Image from "next/image";

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
            <h1 className="font-['Inter'] font-normal text-white text-[64px] md:text-[90px] lg:text-[109px] leading-[1.1] max-w-4xl">
              Your destination for
              <br />
              <span className="text-[#ebdfdc] block text-[48px] md:text-[70px] lg:text-[75px] leading-[1.1]">
                picture-perfect
              </span>
              <span className="text-white block text-[60px] md:text-[90px] lg:text-[104px] leading-[1.1]">
                nails
              </span>
            </h1>
            {/* Subheadline */}
            <p className="mt-8 text-white text-[18px] md:text-[22px] font-medium font-['Figtree'] leading-[1.35] max-w-xl">
              Welcome to <span className="font-semibold">La Diva</span>, a full
              service nail salon and boutique.
            </p>
          </div>

          {/* Button */}
          <div className="mt-12 flex items-end justify-end">
            <button className="bg-[#f8f3ee] rounded-full w-40 h-40 flex flex-col items-center justify-center shadow-lg">
              <span className="text-[#40372c] text-xs font-medium font-['Figtree'] uppercase leading-tight tracking-[3px] text-center">
                our
                <br />
                services
                <br />
                menu
              </span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
