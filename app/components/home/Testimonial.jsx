"use client";
import React from "react";
import { motion } from "motion/react";
import Container from "../common/Container";
import { FiStar } from "react-icons/fi";

const Testimonial = () => (
  <section className="py-16 lg:py-20 overflow-hidden">
    <Container>
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Star Rating */}
        <div className="flex items-center justify-center mb-6">
          {[...Array(5)].map((_, index) => (
            <FiStar key={index} className="text-[#66715f] w-6 h-6" />
          ))}
        </div>

        {/* Testimonial Text */}
        <motion.h2
          className="text-[#5b534a] text-[42px] md:text-[54px] font-normal font-mogan leading-[1.2] mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          “You won’t find a better<br />nails salon in Los Angeles.”
        </motion.h2>

        {/* Rating Info */}
        <motion.p
          className="text-[#9c858b] text-lg font-normal font-figtree  leading-7 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          4.8 rating based on 1000+ reviews
        </motion.p>

        {/* Appointment Button */}
        <motion.button
          className="px-8 py-3 border border-[#66715f] rounded bg-transparent text-[#66715f] text-xs font-medium font-figtree  uppercase leading-tight tracking-[3px] hover:bg-[#f8f3ee] transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ backgroundColor: "#66715f" ,color: "white" }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Make an Appointment
        </motion.button>
      </motion.div>
    </Container>
  </section>
);

export default Testimonial;