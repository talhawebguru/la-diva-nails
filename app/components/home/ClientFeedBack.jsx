"use client";
import React from "react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const feedbacks = [
  {
    text: "I wish I could give them 100 Stars! La Diva is my favorite nail place! They are Covid friendly and follow all of the CDC Guidelines. My gel nails last 3-4 weeks and look sooo good!!",
    name: "Cynthia S.",
    image: "/images/client-1.png",
  },
  {
    text: "They got me and my friend an appointment last minute and did an exceptional job on both of us. I was nervous about trying a new place but I'm so glad I did!",
    name: "Mary N.",
    image: "/images/client-1.png",
  },
  {
    text: "First time at La Diva and the experience was great. Eric did my pedicure, Heather did my partner's, and our feet have never been prettier. I have NO complaints!",
    name: "Amanda R.",
    image: "/images/client-1.png",
  },
  {
    text: "I recently came across this salon and wanted to check it out- I am so glad I did! Their hospitality and quality of nail care is unmatched. I usually am very picky with the shape of my nails and I couldn’t be any happier with the way they turned out!",
    name: "Amanda R.",
    image: "/images/client-1.png",
  },
  {
    text: "Love this place! Their luxury pedicures are great. I get the long lasting nail polish and, no joke, it looks good for almost 6 weeks. And everyone is so friendly!",
    name: "Amanda R.",
    image: "/images/client-1.png",
  },
];

const ClientFeedBack = () => (
  <section className="py-5 sm:py-16 lg:py-28 xl:py-32 bg-[#c08a99]">
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-white text-[40px] md:text-[61.88px] font-normal font-['Inter'] leading-[75.60px] mb-4">
        Client feedbacks
      </h2>
      <p className="text-white text-lg font-normal font-figtree  leading-7">
        Discover what our satisfied clients have to say
      </p>
    </motion.div>

    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="px-8 lg:px-16"
    >
      {feedbacks.map((feedback, index) => (
        <SwiperSlide key={index}>
          <motion.div
            className="flex flex-col items-center text-center bg-[#c08a99] p-8 border-l border-[#faf5ec]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-white text-lg">★</span>
              ))}
            </div>
            <p className="text-white text-lg font-normal font-figtree  leading-7 mb-6">
              {feedback.text}
            </p>
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
              <img
                src={feedback.image}
                alt={feedback.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-white text-xs font-semibold font-figtree  uppercase leading-tight tracking-widest">
              {feedback.name}
            </p>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
    {/* <div className="swiper-pagination mt-8 "></div> */}
  </section>
);

export default ClientFeedBack;