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

function MobileMenu({header, main}:any) {
   const [open, setOpen] = useState(false);
  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Bars3Icon className="h-10 w-8 text-white cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="max-sm:w-full lg:hidden [&_svg]:w-10 bg-ftone [&_svg]:text-white [&_svg]:hover:text-fprimary [&_svg]:h-8 [&_button]:top-3 [&_button]:left-4 [&_button]:w-[40px] p-0 [&_button]:ring-0 [&_button]:ring-offset-0 [&_button]:shadow-none [&_button]:focus:ring-0 [&_button]:focus:ring-offset-0 [&_button]:focus:shadow-none border-fprimary border-l-1">
          <SheetHeader className="bg-fsecondary px-4 pb-4 h-[60px] rounded-bl-large shadow-lg shadow-fprimary">
            <SheetTitle className="sr-only">
              Fine Work Kenya Limited Mobile Menu Drawer
            </SheetTitle>
            <div className="max-w-[85%] ml-[15%] pt-2 flex flex-col gap-1">
              <div className="flex justify-end gap-2">
                <span className="text-base text-white font-semibold">
                  Mon-Fri: {header.time}
                </span>
              </div>
            </div>
          </SheetHeader>
          <nav className="px-4 py-8">
            <ul className="flex flex-col justify-start gap-10 text-center font-bold mb-0">
              {main.map((menu: any) => (
                <li key={menu.node.id}>
                  {menu.node.uri !== null && (
                    <Link
                      title={menu.node.label}
                      href={menu.node.uri}
                      className="text-xl text-white hover:text-fprimary no-underline"
                      onClick={() => setOpen(false)}
                    >
                      {menu.node.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <SheetFooter className="fixed bottom-0 border-t-1 border-fprimary border-r-1 rounded-tr-large bg-fsecondary">
            <div className="px-4 py-4">
              <ul className="flex flex-row gap-6 justify-between">
                <li className="flex flex-start gap-2">
                  <span className="text-base text-fshade">
                    <Link
                      title="mailto link"
                      href={`mailto:${header.email}`}
                      className="hover:text-fshade no-underline text-white"
                      onClick={() => setOpen(false)}
                    >
                      {header.email}
                    </Link>
                  </span>
                </li>
                <li className="flex flex-start gap-2">
                  <span className="text-base text-fshade">
                    <Link
                      title="phone link"
                      href={`tel:+${header.phone}`}
                      className="hover:text-fshade no-underline text-white"
                      onClick={() => setOpen(false)}
                    >
                      {`+${header.phone}`}
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileMenu;
