import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ProductCard() {
  return (
    <Card className="group relative">
      <CardHeader className="min-h-[246px] bg-[url('/images/service.webp')] bg-cover bg-center bg-no-repeat relative rounded-t-md">
        <CardTitle className="sr-only">Card Title</CardTitle>
        <CardDescription className="min-w-[70px] rounded-sm text-white group-hover:text-fsecondary bg-fsecondary group-hover:bg-fprimary transition-all duration-300 px-3 py-2 flex justify-center place-items-center text-base font-medium text-center absolute top-4 right-4">
          -10%
        </CardDescription>
      </CardHeader>
      <CardContent className="body pb-0 pt-4 [&_h3]:text-2xl [&_h3]:font-bold mb-3 [&_h3]:mb-3">
        <h3>Product Title</h3>
        <ul className="[&_li]:pb-2 [&_li]:mb-3 [&_li]:border-1 border-ftint [&_li]:text-center [&_li]:px-3 [&_li]:py-2  flex flex-row flex-wrap gap-3">
          <li className="text-sm text-fsecondary bg-transparent hover:bg-fprimary transition-all duration-300">
            Small
          </li>
          <li className="text-sm text-fsecondary bg-transparent hover:bg-fprimary transition-all duration-300">
            Large
          </li>
          <li className="text-sm text-fsecondary bg-transparent hover:bg-fprimary transition-all duration-300">
            Extra Large
          </li>
        </ul>
      </CardContent>
      <CardFooter className="[&_h5]:text-fsecondary [&_h5]:font-semibold [&_h6]:text-ftone flex flex-col gap-0 items-start">
        <h5 className="basis-1 text-lg">KSH 4000</h5>
        <h6 className="basis-1 text-base line-through">KSH 6000</h6>
      </CardFooter>
    </Card>
  );
}

export default ProductCard