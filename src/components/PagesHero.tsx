import React from "react";
import Link from "next/link";

const PagesHero = () => {
  const bg = '/images/products.webp'
  return (
    <section
      className="bg-cover bg-center bg-no-repeat w-full"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="max-sm:pt-[24px] max-sm:pb-[28px] max-md:pt-[40px] max-md:pb-[44px] max-lg:pt-[56px] max-lg:pb-[64px] pt-[120px] pb-[70px] text-center bg-fsecondary/80 text-white">
        <div className="relative z-10">
          <h1 className="max-sm:text-3xl max-md:text-4xl text-[48px] font-semibold">
            Page Title
          </h1>
          <ul className="mt-2 font-normal flex justify-center gap-2">
            <li>
              <Link
                href="/"
                className="text-white no-underline hover:text-fprimary cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>-</li>
            <li>Breadcrumb</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PagesHero;
