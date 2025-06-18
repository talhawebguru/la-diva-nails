import React from "react";
import {
  FiMapPin,
  FiClock,
  FiPhone,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";
import Container from "./Container";

const TopNav = () => {
  return (
    <section className="w-full h-11 bg-[#e1cad0]">
      <Container>
        <div className="flex w-full h-11 items-center justify-center sm:justify-between text-[15px] font-medium font-figtree  leading-normal">
         <div className="hidden sm:flex items-center gap-4">
           {/* Location */}
          <div className="hidden sm:flex items-center">
            <FiMapPin className="text-[#40372c] mr-2" size={15} />
            <span className="text-[#5b534a]">
              Brooklyn, NY 10036, United States
            </span>
          </div>
          {/* Hours */}
          <div className="hidden lg:flex items-center  justify-center">
            <FiClock className="text-[#40372c] mr-2" size={15} />
            <span className="text-[#5b534a]">
              Mon – Sat: 8:30 am – 8:00 pm, Sun: Closed
            </span>
          </div>
         </div>
         <div className="flex items-center gap-5">
           {/* Phone */}
          <div className="flex items-center min-w-[140px] justify-end">
            <FiPhone className="text-[#40372c] mr-2" size={18} />
            <span className="text-[#40372c]">1-800-123-1234</span>
          </div>
          {/* Socials */}
          <div className="flex items-center gap-2 min-w-[60px] justify-end">
            <a
              href="#"
              className="rounded-sm flex items-center justify-center w-[15px] h-[15px] hover:bg-[#d1b0b8] transition-colors"
            >
              <FiFacebook className="text-[#40372c]" size={13} />
            </a>
            <a
              href="#"
              className="rounded-sm flex items-center justify-center w-[15px] h-[15px] hover:bg-[#d1b0b8] transition-colors"
            >
              <FiInstagram className="text-[#40372c]" size={13} />
            </a>
          </div>
         </div>
        </div>
      </Container>
    </section>
  );
};

export default TopNav;
