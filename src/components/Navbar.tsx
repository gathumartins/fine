"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = ({main, logo}:any) => {
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
        {logo !== null && (
          <Link href="/" title="home link">
            <Image
              src={logo.node.mediaItemUrl}
              width={logo.node.mediaDetails.width}
              height={logo.node.mediaDetails.height}
              alt={`Finework Kenya Limited Logo || ${logo.node.altText}`}
              className="w-[200px]"
            />
          </Link>
        )}
        <div className="flex justify-between items-stretch px-[35px]">
          <nav>
            <ul className="flex justify-between space-x-10 place-items-center font-bold mb-0">
              {main.map((menu: any) => (
                <li key={menu.node.id}>
                  {menu.node.uri !== null && (
                    <Link
                      href={menu.node.uri}
                      className="text-xl leading-[90px] text-fsecondary hover:text-ftone no-underline"
                      title={menu.node.label}
                    >
                      {menu.node.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
