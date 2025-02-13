"use server";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
function Testimonials() {
  return (
    <section className="py-[60px] px-[16px] bg-fshade/50">
      <header className="myCont sub title mb-5">
        <h2 className="leading-none !mb-0">Testimonials</h2>
        <h3 className="leading-none">What clients say</h3>
      </header>
      <div className="myCont">
        <Carousel opts={{ align: "start", loop: true }}>
          <CarouselContent className="flex items-stretch">
            {[1, 2, 3, 4, 5, 6].map((item: any, index: number) => (
              <CarouselItem
                className="sm:basis-1/2 md:basis-1/3 pl-2 md:pl-4 shadow-lg"
                key={index}
              >
                <Card className="pt-[20px] bg-white flex flex-col justify-between h-full rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl">
                  <CardContent className="body pb-0">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime quo magni fuga cupiditate, nisi facilis hic
                      repellat aliquid ipsum cum.
                    </p>
                  </CardContent>
                  <CardFooter className="statsub body flex flex-col justify-start text-left items-start">
                    <h5>John Doe</h5>
                    <p>CEO Doe Company</p>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
            <CarouselPrevious className="bg-fprimary hover:bg-fshade border-fprimary text-fsecondary hidden sm:flex justify-center"/>
            <CarouselNext className="bg-fprimary hover:bg-fshade border-fprimary text-fsecondary hidden sm:flex justify-center"/>
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
