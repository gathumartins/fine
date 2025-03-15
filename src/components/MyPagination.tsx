'use client'
import React, { useState } from "react";
import { Pagination } from "@heroui/react";
import ServiceCard from "./ServiceCard";
import ProductCard from "./ProductCard";
import ProjectCard from "./ProjectCard";
import BlogCard from "./BlogCard";

function MyPagination({ items, ipp, comp, cTitle }: any) {
    const itemsPerPage = ipp;
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const currentItems = items.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  return (
    <>
        <div className="myCont min-h-[200px] grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-3">
          {comp == "service" &&
            currentItems.map((item: any) => <ServiceCard key={item.node.id} service={item}/>)}
          {comp == "product" &&
            currentItems.map((item: any, index: number) => <ProductCard key={index}/>)}
          {comp == "project" &&
            currentItems.map((item: any, index: number) => <ProjectCard key={index}/>)}
          {comp == "blog" &&
            currentItems.map((item: any, index: number) => <BlogCard key={index}/>)}
        </div>
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