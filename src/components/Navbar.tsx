"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
      const [solid, setSolid] = useState(false);
      const changeNav = () => {
        if (window.scrollY >= 90) {
          setSolid(true);
        } else {
          setSolid(false);
        }
      };

      useEffect(() => {
        window.addEventListener("scroll", changeNav);
      }, []);
  return (
    <div className={solid ? "stickyActive" : "stickyN"}>
      <div className="myCont bg-fprimary flex justify-between place-items-center">
        <Link href="/">
          <Image
            src="/images/logoblack.webp"
            width="200"
            height="50"
            alt="Finework Kenya Limited Logo"
          />
        </Link>
        <div className="flex justify-between items-stretch px-[35px]">
          <nav>
            <ul className="flex justify-between space-x-10 place-items-center font-bold mb-0">
              <li>
                <Link
                  href="/"
                  className="text-xl leading-[90px] text-fsecondary hover:text-ftone no-underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-xl leading-[90px] text-fsecondary hover:text-ftone no-underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-xl leading-[90px] text-fsecondary hover:text-ftone no-underline"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-xl leading-[90px] text-fsecondary hover:text-ftone no-underline"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-xl leading-[90px] text-fsecondary hover:text-ftone no-underline"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-xl leading-[90px] text-fsecondary hover:text-ftone no-underline"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="text-xl leading-[90px] text-fsecondary hover:text-ftone
                   no-underline"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
