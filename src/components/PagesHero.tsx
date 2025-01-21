import React from "react";
import Link from "next/link";

const PagesHero = () => {
  return (
    <section className={`bg-no-repeat bg-cover bg-center`}>
      <div className="max-sm:pt-[24px] max-sm:pb-[28px] max-md:pt-[40px] max-md:pb-[44px] max-lg:pt-[56px] max-lg:pb-[64px] pt-[120px] pb-[70px] text-center bg-fsecondary/80 text-white bg-cover bg-center bg-no-repeat">
        <h1 className="max-sm:text-3xl max-md:text-4xl text-[48px] font-semibold">
          Page Title
        </h1>
        <p className="mt-2 font-normal">
          <Link
            href="/"
            className="text-white no-underline hover:text-fprimary"
          >
            Home
          </Link>{" "}
          -{" "}
          <Link
            href="/"
            className="text-white no-underline hover:text-fprimary"
          >
            Breadcrumb
          </Link>
        </p>
      </div>
    </section>
  );
};

export default PagesHero;
