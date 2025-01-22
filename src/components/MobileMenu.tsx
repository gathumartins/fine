"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  PhoneIcon,
  ClockIcon,
  EnvelopeIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

function MobileMenu() {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Bars3Icon className="h-10 w-8 text-white cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="lg:hidden [&_svg]:w-10 bg-ftone border-ftone [&_svg]:text-white [&_svg]:hover:text-fprimary [&_svg]:h-8 [&_button]:top-3 [&_button]:left-4 [&_button]:w-[40px] p-0 [&_button]:ring-0 [&_button]:ring-offset-0 [&_button]:shadow-none [&_button]:focus:ring-0 [&_button]:focus:ring-offset-0 [&_button]:focus:shadow-none">
          <SheetHeader className="shadow-sm shadow-ftint px-4 pb-4">
            <SheetTitle className="sr-only">
              Are you absolutely sure?
            </SheetTitle>
            <div className="max-w-[85%] ml-[15%] pt-2 flex flex-col gap-1">
              <div className="flex justify-end gap-2">
                <span className="text-base text-white font-semibold">
                  Mon-Fri: 08:00 AM - 5:00 PM
                </span>
              </div>
            </div>
          </SheetHeader>
          <nav className="px-4 pb-4">
            <ul className="flex flex-col text-center place-items-center font-bold mb-0">
              <li>
                <Link
                  href="/"
                  className="text-xl leading-[90px] text-fsecondary hover:text-fshade no-underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-xl leading-[90px] text-fsecondary hover:text-fshade no-underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-xl leading-[90px] text-fsecondary hover:text-fshade no-underline"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-xl leading-[90px] text-fsecondary hover:text-fshade no-underline"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-xl leading-[90px] text-fsecondary hover:text-fshade no-underline"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-xl leading-[90px] text-fsecondary hover:text-fshade no-underline"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="text-xl leading-[90px] text-fsecondary hover:text-fshade
                   no-underline"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>
          <div className="px-4 pb-4 fixed bottom-0">
            <ul className="flex flex-row gap-6 justify-between">
              <li className="flex flex-start gap-2">
                <span className="text-base text-fshade">
                  <Link
                    href="mailto:info@finework.co.ke"
                    className="hover:text-fshade no-underline text-white"
                  >
                    info@finework.co.ke
                  </Link>
                </span>
              </li>
              <li className="flex flex-start gap-2">
                <span className="text-base text-fshade">
                  <Link
                    href="tel:+254736709540"
                    className="hover:text-fshade no-underline text-white"
                  >
                    +254 736 709 540
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileMenu;
