import React from "react";
import Container from "../common/Container";
import Image from "next/image";

const features = [
  {
    icon: "/images/Icon1.png",
    title: "Upscale Location",
    desc: "Our salon is located in the upscale suburban neighborhood.",
  },
  {
    icon: "/images/Icon2.png",
    title: "Artistic Integrity",
    desc: "We use the highest quality organic & vegan nail materials to provide superior nails.",
  },
  {
    icon: "/images/Icon3.png",
    title: "Leading Designs",
    desc: "We provide a range of nail treatments that will leave your nails looking their best.",
  },
];

const Features = () => (
  <section className="py-16 bg-white">
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image
              src={feature.icon}
              alt={feature.title}
              width={64}
              height={64}
              className="mb-6"
              style={{ color: "#bfa7ad" }}
            />
            <div className="text-[#40372c] text-[22px] font-medium font-['Figtree'] leading-[29.7px] mb-3">
              {feature.title}
            </div>
            <div className="text-[#5b534a] text-lg font-normal font-['Figtree'] leading-7 max-w-[400px]">
              {feature.desc}
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Features;