"use client";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
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
        <SheetContent className="bg-ftone border-ftone text-white lg:hidden">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileMenu;
