'use client'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const HomeHero = ({hero}:any) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % hero.length);
    };

    const prevSlide = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + hero.length) % hero.length
      );
    };

    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 10000);

      return () => clearInterval(interval);
    }, []);
  return (
    <div className="relative w-full min-h-[720px] max-lg:min-h-[600px] max-md:max-h-[500px] overflow-hidden bg-fsecondary/70">
      <AnimatePresence>
        {hero.map(
          (image: any, index: number) =>
            index === currentIndex && (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={image.banner.node.mediaItemUrl}
                  alt={image.title}
                  height={image.banner.node.mediaDetails.height}
                  width={image.banner.node.mediaDetails.width}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-fsecondary/70 flex flex-col justify-center items-left text-white p-4">
                  <div className="text-left myCont max-sm:px-[16px] z-10">
                    <h1 className="text-[40px] max-lg:text-[35px] max-md:text-[30px] max-md:mb-[10px] mb-[15px]">
                      {image.title}
                    </h1>
                    <h3 className="text-[60px] max-md:text-[40px] max-lg:text-[50px] max-md:mb-[20px] mb-[40px]">
                      {image.subtitle}
                    </h3>
                    <Link
                      title={image.link.label}
                      href={image.link.path}
                      className="heroBtn"
                    >
                      {image.link.label}
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      <div className="absolute inset-0 hidden md:flex justify-between items-center px-4">
        <Button
          onClick={prevSlide}
          className="text-fsecondary rounded-none bg-fprimary hover:bg-fsecondary hover:text-white"
        >
          &#9664;
        </Button>
        <Button
          onClick={nextSlide}
          className="text-fsecondary rounded-none bg-fprimary hover:bg-fsecondary hover:text-white"
        >
          &#9654;
        </Button>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {hero.map((_: any, index: number) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-ftone"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HomeHero;
