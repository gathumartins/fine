'use client'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const images = [
  {
    src: "/images/homeproducts.webp", // Replace with your image URLs
    title: "Fine Work Kenya Limited",
    subtitle: "Cutting-Edge Fire Products",
    link: {
      title: "View Products",
      url: "/products",
    },
  },
  {
    src: "/images/homeservices.webp",
    title: "Fine Work Kenya Limited",
    subtitle: "For All Fire Related Services",
    link: {
      title: "View Projects",
      url: "/projects",
    },
  },
  {
    src: "/images/homeprojects.webp",
    title: "Fine Work Kenya Limited",
    subtitle: "Projects That Define Innovation",
    link: {
      title: "View Services",
      url: "/services",
    },
  },
];

const HomeHero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
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
        {images.map(
          (image, index) =>
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
                  src={image.src}
                  alt={image.title}
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
                    <Link href={image.link.url} className="heroBtn">
                      {image.link.title}
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      <div className="absolute inset-0 hidden md:flex justify-between items-center px-4">
        <Button
          variant="ghost"
          onClick={prevSlide}
          className="text-white bg-ftone hover:bg-fsecondary hover:text-white"
        >
          &#9664;
        </Button>
        <Button
          variant="ghost"
          onClick={nextSlide}
          className="text-white bg-ftone hover:bg-fsecondary hover:text-white"
        >
          &#9654;
        </Button>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
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
