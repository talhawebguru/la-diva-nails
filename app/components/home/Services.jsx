import React from "react";
import Container from "../common/Container";
import Image from "next/image";


const services = [
  {
    title: "Manicure",
    image: "/images/manicure.png",
    alt: "Manicure",
  },
  {
    title: "Pedicure",
    image: "/images/pedicure.png",
    alt: "Pedicure",
  },
  {
    title: "Nail Art",
    image: "/images/nailart.png",
    alt: "Nail Art",
  },
];

const Services = () => (
  <section className="py-16 px-4 bg-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="relative aspect-[4/5] rounded overflow-hidden group shadow"
          >
            <Image
              src={service.image}
              alt={service.alt}
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-8 left-0 w-full flex justify-center">
              <span className="text-white text-5xl font-normal font-mogan ">
                {service.title}
              </span>
            </div>
          </div>
        ))}
      </div>
  </section>
);

export default Services;