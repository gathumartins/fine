"use client";
import { useState } from "react";
import {
  PhoneIcon,
  ClockIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const Header = ({header, main}:any) => {
  const [solid, setSolid] = useState(false);
  return (
    <header className="bg-fsecondary lg:py-[40px] max-sm:px-[16px] max-lg:fixed w-full lg:relative z-40">
      <div className="myCont grid-cols-3 text-white lg:grid hidden text-base font-medium">
        <div className="flex flex-start gap-2">
          <PhoneIcon className="h-6 w-6" />
          <span className="text-base text-fshade">
            <Link
              href={`tel:+${header.phone}`}
              className="hover:text-fshade no-underline text-white"
            >
              {`+${header.phone}`}
            </Link>
          </span>
        </div>
        <div className="flex justify-center gap-2">
          <ClockIcon className="h-6 w-6" />
          <span className="text-base text-white">{header.time}</span>
        </div>
        <div className="flex justify-end gap-2">
          <EnvelopeIcon className="h-6 w-6" />
          <span className="text-base text-fshade">
            <Link
              href={`mailto:${header.email}`}
              className="hover:text-fshade no-underline text-white"
            >
              {header.email}
            </Link>
          </span>
        </div>
      </div>
      <div className="myCont lg:hidden flex justify-between place-items-center lg:py-[40px] py-[16px]">
        {header.whitelogo !== null && (
          <Image
            src={header.whitelogo.node.mediaItemUrl}
            width={header.whitelogo.node.mediaDetails.width}
            height={header.whitelogo.node.mediaDetails.height}
            alt={`Finework Kenya Limited Logo || ${header.whitelogo.node.altText}`}
            className="w-[180px]"
          />
        )}
        <MobileMenu header={header} main={main}/>
      </div>
    </header>
  );
};

export default Header;
