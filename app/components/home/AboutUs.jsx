import React from "react";
import Container from "../common/Container";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-28">
          {/* Images */}
          <div className="flex-1 relative w-full flex justify-center items-center">
            <div className="rounded overflow-hidden">
              <Image
                src="/images/aboutus1.png"
                alt="Nail care"
                width={400}
                height={500}
                className="w-[455px] h-[620px] object-cover"
                priority
              />
            </div>
            <div className="absolute bottom-0 right-20 translate-x-1/4 translate-y-1/4overflow-hidde">
              <Image
                src="/images/aboutus2.png"
                alt="Nail treatment"
                width={250}
                height={300}
                className="w-[250px] h-[300px] object-cover"
              />
            </div>
          </div>
          {/* Text Content */}
          <div className="flex-2 max-w-xl">
            <div className="mb-4 text-[#40372c] selection:bg-[rgb(192,138,153)] selection:text-white text-xs font-medium font-figtree  uppercase leading-tight tracking-[3px]">
              Extensive Nail Care
            </div>
            <h2 className="mb-6 selection:bg-[rgb(192,138,153)] selection:text-white font-mogan font-normal text-[#40372c] text-[44px] sm:text-[55px] md:text-[72px] leading-[1.15]">
              Get your look<br />
              polished,<span className="text-[rgb(192,138,153)] ml-4 font-betterlett">from</span>
              <br />
              fingers to toes
            </h2>
            <p className="mb-10 text-[#5b534a] text-lg font-normal font-figtree  leading-7">
              Nail art, manicures, and nail shaping are just some of the specialties
              of our experienced nail technicians. You can count on us whether you
              want a classic manicure, trendy shellac paint, or custom nail art.
            </p>
            <button className="px-8 py-3 border border-[#66715f] rounded bg-white text-[#66715f] text-xs font-medium font-figtree  uppercase leading-tight tracking-[3px] hover:bg-[#f8f3ee] transition">
              More About Us
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;