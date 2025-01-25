"use client";
import React from "react";
import ScrollCarousel from "scroll-carousel-react";
import Image from "next/image";

const clients = [
  {
    name: "Artcafe",
    image: "/images/artcafe.webp",
    width: 250,
    height: 90,
  },
  {
    name: "Dusit",
    image: "/images/dusit.webp",
    width: 250,
    height: 90,
  },
  {
    name: "Police Sacco",
    image: "/images/police.webp",
    width: 250,
    height: 90,
  },
  {
    name: "Glee",
    image: "/images/glee.webp",
    width: 250,
    height: 90,
  },
  {
    name: "Simbisa",
    image: "/images/simbisa.webp",
    width: 250,
    height: 90,
  },
  {
    name: "Java",
    image: "/images/java.webp",
    width: 250,
    height: 90,
  },
];
function ClientsSlider() {
  return (
    <>
      <ScrollCarousel autoplay autoplaySpeed={1} speed={1} margin={50}>
        {clients.map((client, i) => (
          <div
            className="flex justify-center p-[15px] w-[250px] h-[90px] relative border-1"
            key={i}
          >
            <Image
              src={client.image}
              layout="fill"
              objectFit="cover"
              className="shadow-md grayscale hover:grayscale-0"
              alt={client.name}
            />
          </div>
        ))}
      </ScrollCarousel>
    </>
  );
}

export default ClientsSlider;
