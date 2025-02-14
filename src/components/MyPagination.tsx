'use client'
import React, { useState } from "react";
import { Pagination } from "@heroui/react";
import ServiceCard from "./ServiceCard";
import ProductCard from "./ProductCard";
import ProjectCard from "./ProjectCard";

function MyPagination() {
  return (
    <>
      <section className="pt-14 md:pt-20 lg:pt-28 px-[16px]">
        <div className="myCont"></div>
      </section>
      <footer className="pb-14 mt-5">
        <div className="myCont flex justify-center">
          <Pagination
            loop
            showControls
            color="success"
            initialPage={1}
            total={5}
          />
        </div>
      </footer>
    </>
  );
}

export default MyPagination