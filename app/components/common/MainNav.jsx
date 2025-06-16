"use client";
import React, { useState } from "react";
import { FiChevronDown, FiSearch, FiShoppingCart } from "react-icons/fi";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import Logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", dropdown: true },
  { label: "Services", dropdown: true },
  { label: "About Us" },
  { label: "Contacts" },
];

const MainNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mainNavVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut", delay: 0.2 } },
  };

  const mobileMenuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <>
      <motion.section
        className="w-full h-[90px] bg-white flex items-center relative z-40"
        initial="hidden"
        animate="visible"
        variants={mainNavVariants}
      >
        <Container>
          <div className="w-full h-[90px] flex items-center justify-between relative">
            {/* Mobile: Hamburger */}
            <div className="flex lg:hidden items-center">
              <button onClick={() => setIsMobileMenuOpen(true)} aria-label="Open mobile menu">
                <RxHamburgerMenu size={28} />
              </button>
            </div>
            {/* Left: Nav Links (Desktop) */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.label} className="flex items-center cursor-pointer">
                  <span className="text-[#40372c] text-[15px] font-semibold font-['Figtree'] leading-normal flex items-center">
                    {link.label}
                    {link.dropdown && (
                      <FiChevronDown className="ml-1 text-[#40372c]" size={14} />
                    )}
                  </span>
                </div>
              ))}
            </div>
            {/* Center: Logo */}
            <div className="flex items-center select-none">
              <Image src={Logo} alt="la Diva" width={126} height={62} quality={100} />
            </div>
            {/* Right: Search, Cart, Button */}
            <div className="hidden sm:flex items-center gap-6">
              <button className="hidden sm:block p-2 hover:bg-[#f5e6ea] rounded transition-colors">
                <FiSearch className="text-black" size={18} />
              </button>
              <div className="relative hidden sm:block ">
                <button className="p-2 hover:bg-[#f5e6ea] rounded transition-colors">
                  <FiShoppingCart className="text-[#40372c]" size={18} />
                </button>
                <span className="absolute -top-2 -right-2 bg-[#c08a99] text-white text-xs font-medium font-['Figtree'] leading-3 rounded-full w-5 h-5 flex items-center justify-center">0</span>
              </div>
              <button className="hidden sm:block px-8 py-3 bg-white border border-[#66715f] text-[#66715f] text-xs font-medium font-['Figtree'] uppercase leading-tight tracking-[3px] transition-colors hover:bg-[#e1cad0]">
                book a visit
              </button>
            </div>
          </div>
        </Container>
      </motion.section>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-6 lg:hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex justify-between items-center mb-8">
              <Image src={Logo} alt="la Diva" width={100} height={40} />
              <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close mobile menu">
                <RxCross1 size={24} />
              </button>
            </div>
            <nav>
              <ul className="flex flex-col gap-4 text-lg font-medium text-[#40372c]">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <span className="block py-2 cursor-pointer">{link.label}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-6 px-8 py-3 bg-white border border-[#66715f] text-[#66715f] text-xs font-medium font-['Figtree'] uppercase leading-tight tracking-[3px] transition-colors hover:bg-[#e1cad0]">
                book a visit
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainNav;