"use server";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

function CertsAwards({headings, certs}:any) {
  return (
    <section className="py-[60px] px-[16px] bg-ftone">
      <header className="myCont sub title mb-5 text-center">
        <h2 className="leading-none !mb-0 !text-fprimary">{headings.title}</h2>
        <h3 className="leading-none !text-white">{headings.subtitle}</h3>
      </header>
      <div className="myCont ">
        <Carousel opts={{ align: "start", loop: true }}>
          <CarouselContent className="flex items-stretch">
            {certs.map((cert: any, index: number) => (
              <CarouselItem
                className="basis-1/2 md:basis-1/4 pl-2 md:pl-4 shadow-lg flex justify-center"
                key={cert.node.id}
              >
                {cert.node.featuredImage !== null && (
                  <Image
                    src={cert.node.featuredImage.node.mediaItemUrl}
                    alt={cert.node.title}
                    height={cert.node.featuredImage.node.mediaDetails.height}
                    width={cert.node.featuredImage.node.mediaDetails.width}
                    className="border-1 h-[90px] w-[250px]"
                  />
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-fprimary hover:bg-fsecondary border-none rounded-none text-fsecondary hover:text-white hidden sm:flex justify-center" />
          <CarouselNext className="bg-fprimary hover:bg-fsecondary border-none rounded-none text-fsecondary hover:text-white hidden sm:flex justify-center" />
        </Carousel>
      </div>
    </section>
  );
}

export default CertsAwards;
