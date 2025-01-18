"use client";
import { useState } from "react";
import {
  PhoneIcon,
  ClockIcon,
  EnvelopeIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [solid, setSolid] = useState(false);
  return (
    <header className="bg-fsecondary lg:py-[40px] max-sm:px-[16px] max-lg:fixed max-lg:z-30 w-full">
      <div className="myCont grid-cols-3 text-white lg:grid hidden text-base font-medium">
        <div className="flex flex-start gap-2">
          <PhoneIcon className="h-6 w-6" />
          <span className="text-base text-fshade">
            <Link
              href="tel:+254736709540"
              className="hover:text-fshade no-underline text-white"
            >
              +254 736 709 540
            </Link>
          </span>
        </div>
        <div className="flex justify-center gap-2">
          <ClockIcon className="h-6 w-6" />
          <span className="text-base text-white">08:00 AM - 5:00 PM</span>
        </div>
        <div className="flex justify-end gap-2">
          <EnvelopeIcon className="h-6 w-6" />
          <span className="text-base text-fshade">
            <Link
              href="mailto:info@finework.co.ke"
              className="hover:text-fshade no-underline text-white"
            >
              info@finework.co.ke
            </Link>
          </span>
        </div>
      </div>
      <div className="myCont lg:hidden flex justify-between place-items-center lg:py-[40px] py-[16px]">
        <Image
          src="/images/logowhite.webp"
          width="180"
          height="41"
          alt="Finework Kenya Limited Logo"
        />
        <Bars3Icon className="h-10 w-8 text-white cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
