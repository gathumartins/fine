'use client'
import React, { useState } from "react";
import { Pagination } from "@heroui/react";
import ServiceCard from "./ServiceCard";
import ProductCard from "./ProductCard";
import ProjectCard from "./ProjectCard";
import BlogCard from "./BlogCard";

function MyPagination({ items, ipp, comp, cTitle }: any) {
    items = [1,2,3,4,5,6]
    const itemsPerPage = ipp;
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const currentItems = items.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  return (
    <>
      <section className="pt-14 md:pt-20 lg:pt-28 px-[16px]">
        <div className="myCont min-h-[200px] grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-3">
          {comp == "service" &&
            currentItems.map((item: any) => <ServiceCard/>)}
          {comp == "product" &&
            currentItems.map((item: any) => <ProductCard/>)}
          {comp == "project" &&
            currentItems.map((item: any) => <ProjectCard/>)}
          {comp == "blog" &&
            currentItems.map((item: any) => <BlogCard/>)}
        </div>
      </section>
      <footer className="my-5">
        <div className="myCont flex justify-center">
          {items.length > 6 && (
            <Pagination
              loop
              showControls
              total={totalPages}
              initialPage={1}
              page={currentPage}
              onChange={(page) => setCurrentPage(page)}
              className="gap-4  [&_li]:rounded-full"
              classNames={{
                prev: "bg-fsecondary text-xl font-bold border-fprimary text-fprimary !hover:bg-fprimary hover:text-fsecondary",
                next: "bg-fsecondary text-xl font-bold border-fprimary text-fprimary !hover:bg-fprimary hover:text-fsecondary",
                cursor:
                  "bg-fprimary text-fsecondary hover:bg-fsecondary text-fsecondary rounded-full px-3 py-1",
              }}
            />
          )}
        </div>
      </footer>
    </>
  );
}

export default MyPagination