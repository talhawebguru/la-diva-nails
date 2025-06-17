"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  { question: "How long do your gel nails last?", answer: "Gel nails typically last 2-3 weeks depending on care." },
  { question: "What kind of payments do you accept?", answer: "We accept cash, credit cards, and gift cards." },
  { question: "What if I broke my nail?", answer: "We offer repair services for broken nails. Contact us for details." },
  { question: "Can I purchase my gift card?", answer: "Yes, gift cards are available for purchase at our salon." },
  { question: "How do I book an appointment?", answer: "You can book an appointment online or call us directly." },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#faf5ec]">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-[#40372c] text-[40px] md:text-[63.42px] font-normal font-['Inter'] leading-[75.60px] mb-4">
          Your questions,
        </h2>
        <p className="text-[#c08a99] text-[32px] md:text-[52.99px] font-normal font-['Inter'] leading-[68px]">
          answered
        </p>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-[#ded6cb] py-4 cursor-pointer"
            onClick={() => toggleFaq(index)}
          >
            <div className="flex justify-between items-center">
              <p className="text-[#40372c] text-[22px] font-medium font-['Figtree'] leading-snug">
                {faq.question}
              </p>
              {activeIndex === index ? (
                <FiChevronUp className="text-[#40372c]" size={24} />
              ) : (
                <FiChevronDown className="text-[#40372c]" size={24} />
              )}
            </div>
            {activeIndex === index && (
              <motion.div
                className="mt-2 text-[#5b534a] text-lg font-normal font-['Figtree'] leading-7"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-[#5b534a] text-lg font-normal font-['Figtree'] leading-7 mb-4">
          Can’t find what you’re looking for?
        </p>
        <button className="px-8 py-3 border border-[#66715f] rounded bg-transparent text-[#66715f] text-xs font-medium font-['Figtree'] uppercase leading-tight tracking-[3px] hover:bg-[#f8f3ee] transition">
          Contact Us
        </button>
      </motion.div>
    </section>
  );
};

export default Faqs;