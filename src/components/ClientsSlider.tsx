"use client";
import React from "react";
import ScrollCarousel from "scroll-carousel-react";
import Image from "next/image";

function ClientsSlider({clients}:any) {
  return (
    <>
      <ScrollCarousel autoplay autoplaySpeed={1} speed={1} margin={50}>
        {clients.map((client: any) => (
          <div
            className="flex justify-center p-[15px] w-[250px] h-[90px] relative border-1"
            key={client.node.id}
          >
            {client.node.featuredImage !== null && (
              <Image
                src={client.node.featuredImage.node.mediaItemUrl}
                layout="fill"
                objectFit="cover"
                className="shadow-md grayscale hover:grayscale-0"
                alt={`Fine Work Kenya Limited Client ${client.node.featuredImage.node.altText}`}
              />
            )}
          </div>
        ))}
      </ScrollCarousel>
    </>
  );
}

export default ClientsSlider;
