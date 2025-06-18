"use client";
import React from "react";
import { motion } from "motion/react";
import Container from "../common/Container";
import Image from "next/image";

const manicurePrices = [
  { name: "La Diva Signature Manicure", price: "$30" },
  { name: "Organic Manicure", price: "$40" },
  { name: "Gel Manicure", price: "$50" },
  { name: "Gel X Extension", price: "$90" },
  { name: "SPA Manicure + Massage", price: "$70" },
];

const pedicurePrices = [
  { name: "La Diva Signature Pedicure", price: "$45" },
  { name: "Organic Pedicure", price: "$58" },
  { name: "Hygienic Pedicure", price: "$60" },
  { name: "Gel Pedicure", price: "$65" },
  { name: "SPA Pedicure + Massage", price: "$95" },
];

const PriceGuide = () => (
  <section>
    <Container>
      <motion.div
        className="flex flex-col items-center py-20 overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h2
          className="text-[#40372c] text-[54px] lg:text-[64px] font-normal font-mogan leading-[1.15] text-center mb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Price Guide
        </motion.h2>
        <motion.p
          className="text-[#5b534a] text-lg font-normal font-figtree  leading-7 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Simple, flat rate pricing for all our beauty services
        </motion.p>
        {/* Price Cards */}
        <motion.div
          className="w-full flex flex-col lg:flex-row gap-8 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Manicure Card */}
          <motion.div
            className="flex flex-col md:flex-row items-center bg-[#faf5ec] rounded-lg overflow-hidden shadow-lg  w-full"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-full hidden md:block md:w-[250px] h-[450px] relative">
              <Image
                src="/images/price1.png"
                alt="Manicure"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 180px"
              />
            </div>
            <div className="flex-1 p-8 w-full">
              <div className="text-[#40372c] text-[28px] md:text-[32px] font-normal font-mogan leading-[41.4px] mb-6 w-full">
                Manicure
              </div>
              <ul>
                {manicurePrices.map((item, idx) => (
                  <li key={item.name} className="flex justify-between items-center mb-2 pb-2 border-b !border-[rgba(222,214,203,1)]">
                    <span className="text-[#5b534a] text-base font-normal font-figtree  leading-relaxed">
                      {item.name}
                    </span>
                    <span className="text-[#66715f] text-xs font-semibold font-figtree  uppercase leading-tight tracking-widest">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          {/* Pedicure Card */}
          <motion.div
            className="flex flex-col md:flex-row items-center bg-[#66715f] rounded-lg overflow-hidden shadow-lg w-full"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-full hidden md:block md:w-[250px] h-[450px] relative">
              <Image
                src="/images/price2.png"
                alt="Pedicure"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 180px"
              />
            </div>
            <div className="flex-1 p-8 w-full">
              <div className="text-white text-[28px] md:text-[32px] font-normal font-mogan leading-[41.4px] mb-6">
                Pedicure
              </div>
              <ul>
                {pedicurePrices.map((item, idx) => ( 
                  <li key={item.name} className="flex justify-between items-center mb-2 pb-2 border-b !border-[rgba(235,230,222,0.2)]">
                    <span className="text-white text-base font-normal font-figtree  leading-relaxed">
                      {item.name}
                    </span>
                    <span className="text-[#e1cad0] text-xs font-semibold font-figtree  uppercase leading-tight tracking-widest">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
        {/* Full Price Guide Button */}
        <motion.button
          className="mt-4 px-8 py-3 border border-[#66715f] rounded bg-white text-[#66715f] text-xs font-medium font-figtree  uppercase leading-tight tracking-[3px] hover:bg-[#f8f3ee] transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Full Price Guide
        </motion.button>
      </motion.div>
    </Container>
  </section>
);

export default PriceGuide;