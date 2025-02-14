'use client'
import React, { useState } from "react";
import { Pagination } from "@heroui/react";
import ServiceCard from "./ServiceCard";
import ProductCard from "./ProductCard";
import ProjectCard from "./ProjectCard";
import BlogCard from "./BlogCard";

function MyPagination() {
  return (
    <>
      <section className="pt-14 md:pt-20 lg:pt-28 px-[16px]">
        <div className="myCont min-h-[200px] grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-3">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>
      <footer className="my-5">
        <div className="myCont flex justify-center">
          <Pagination
            loop
            showControls
            initialPage={1}
            total={5}
            className="gap-4  [&_li]:rounded-full"
            classNames={{
              prev: "bg-fsecondary text-xl font-bold border-fprimary text-fprimary !hover:bg-fprimary hover:text-fsecondary",
              next: "bg-fsecondary text-xl font-bold border-fprimary text-fprimary !hover:bg-fprimary hover:text-fsecondary",
              cursor:
                "bg-fprimary text-fsecondary hover:bg-fsecondary text-fsecondary rounded-full px-3 py-1",
            }}
          />
        </div>
      </footer>
    </>
  );
}

export default MyPagination