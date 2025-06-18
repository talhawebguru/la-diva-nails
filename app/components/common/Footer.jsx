"use client";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import { FiPhone, FiMail, FiInstagram, FiX, FiFacebook } from "react-icons/fi";
import Logo from "@/public/images/logo.png";

const pages = [
  "About Us",
  "Our Team",
  "Our Services",
  "Blog",
  "Contacts",
  "Image Credits",
];

const Footer = () => (
  <footer className="w-full bg-[#f8f3ee] flex flex-wrap xl:flex-nowrap flex-col xl:flex-row min-h-[654px] overflow-x-hidden selection:bg-[rgb(192,138,153)] selection:text-white">
    {/* Left/Main Footer */}
    <div className="order-2 xl:order-1 flex-1 flex flex-col justify-between px-8 lg:px-20 py-16">
      <div className="flex flex-row flex-wrap xl:flex-nowrap gap-12">
        {/* Logo */}
        <div className="flex-1 min-w-[180px] mb-8 lg:mb-0">
          <div className="mb-8">
            <Image
              src={Logo}
              alt="la Diva"
              width={151}
              height={75}
              quality={100}
            />
          </div>
        </div>
        {/* Pages */}
        <div className="min-w-[180px] mb-8 lg:mb-0">
          <div className="text-[#9c858b] text-xs font-medium font-figtree  uppercase tracking-[3px] mb-8">
            Pages
          </div>
          <ul>
            {pages.map((page) => (
              <li
                key={page}
                className="text-[#40372c] text-lg font-normal font-figtree mt-5 leading-7 mb-2.5 hover:underline cursor-pointer"
              >
                {page}
              </li>
            ))}
          </ul>
        </div>
        {/* Contacts */}
        <div className="min-w-[260px]">
          <div className="text-[#9c858b] text-xs font-medium font-figtree  uppercase tracking-[3px] mb-8">
            Contacts
          </div>
          <div className="text-[#5b534a] text-lg font-normal font-figtree  leading-7 mb-8">
            126 E. Johnson Ave. Chelan,
            <br /> WA, United States
          </div>
          <div className="text-[#5b534a] text-lg font-normal font-figtree  leading-7 mb-8">
            Mon – Fri: 8:30 am – 5:00 pm,
            <br />
            Sat – Sun: Closed
          </div>
          <div className="flex items-center gap-2 text-[#66715f] text-[22px] font-medium font-figtree  leading-[29.7px] mb-2">
            <FiPhone className="text-[#66715f]" size={22} />
            +1 509-888-7277
          </div>
          <div className="text-[#66715f] text-lg font-normal font-figtree  leading-7">
            example@thenailspa.com
          </div>
        </div>
      </div>
      {/* Newsletter & Copyright */}
      <div className="mt-16 flex flex-col flex-wrap gap-5">
        <div>
          <div className="text-[#40372c] text-[30px] font-normal font-['Inter'] leading-[41px] mb-4">
            Stay Updated
          </div>
          <form className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <input
              type="email"
              placeholder="Your email address...*"
              className="max-w-80 border-b border-[#ded6cb] bg-transparent text-[#9c858b] text-base font-normal font-figtree  py-2 px-0 focus:outline-none placeholder:text-[#9c858b]"
            />
            <motion.button
              type="submit"
              className="w-40 h-[44px] outline outline-[#66715f] text-[#66715f] text-xs font-medium font-figtree  uppercase tracking-[3px] bg-white hover:bg-[#f8f3ee] transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ color: "white", backgroundColor: "#66715f" }}
              transition={{ duration: 0.2, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Subscribe
            </motion.button>
          </form>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mt-4">
          <div className="flex items-center gap-2">
            <span className="text-[#40372c] text-lg font-normal font-figtree ">
              The Nail Spa
            </span>
            <span className="text-[#5b534a] text-lg font-normal font-figtree ">
              ©2025 - All Rights Reserved.
            </span>
          </div>
          <div className="flex items-center gap-6 mt-2 md:mt-0">
            <a href="https://www.facebook.com/profile.php?id=100064592097234#" target="_blank" aria-label="Instagram">
              <FiInstagram className="text-[#66715f] w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100064592097234#" target="_blank" aria-label="X">
              <FiX className="text-[#66715f] w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100064592097234#" target="_blank" aria-label="Facebook">
              <FiFacebook className="text-[#66715f] w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Right/Appointment Form */}
    <div className="order-1 xl:order-2 w-full xl:max-w-[600px] bg-[#c08a99] flex flex-col justify-center items-center px-8 py-16">
      <div className="w-full">
        <div className="text-white text-5xl font-normal font-mogan leading-[56.7px] mb-12">
          Book an
          <br className="hidden xl:block" /> appointment
        </div>
        <form className="flex flex-col gap-8">
          <div className="border-b border-white/40 pb-2">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent text-white text-base font-normal font-figtree  py-3 px-0 focus:outline-none placeholder:text-white"
            />
          </div>
          <div className="border-b border-white/40 pb-2">
            <input
              type="text"
              placeholder="Your Phone"
              className="w-full bg-transparent text-white text-base font-normal font-figtree  py-3 px-0 focus:outline-none placeholder:text-white"
            />
          </div>
          <div className="border-b border-white/40 pb-2 flex items-center">
            <select
              className="w-full bg-transparent text-white text-base font-normal font-figtree  py-3 px-0 focus:outline-none appearance-none"
              defaultValue=""
            >
              <option value="" disabled className="text-[#c08a99] bg-white">
                Choose a Service
              </option>
              <option className="text-[#40372c]">Manicure</option>
              <option className="text-[#40372c]">Pedicure</option>
              <option className="text-[#40372c]">Nail Art</option>
            </select>
          </div>
          <div className="border-b border-white/40 pb-2">
            <textarea
              placeholder="Your Comment"
              className="w-full bg-transparent text-white text-base font-normal font-figtree  py-3 px-0 focus:outline-none placeholder:text-white resize-none"
              rows={3}
            />
          </div>
          <button
            type="submit"
            className="w-full outline outline-white bg-white text-[#40372c] text-xs font-medium font-figtree  uppercase tracking-[3px] py-3 mt-2 hover:bg-[#f8f3ee] transition"
          >
            Make an appointment
          </button>
        </form>
      </div>
    </div>
  </footer>
);

export default Footer;
