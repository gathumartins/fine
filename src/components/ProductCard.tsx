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
  const bg = "/images/service.webp";
  const price = 6000;
  const discount = 10;
  return (
    <Card className="group relative rounded-none">
      <CardHeader className="min-h-[246px] relative rounded-none overflow-hidden">
        <div
          className="absolute bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110 min-h-[246px] w-full top-0 left-0"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        ></div>
        <CardTitle className="sr-only">Card Title</CardTitle>
        <CardDescription className="min-w-[70px] rounded-none text-white group-hover:text-fsecondary bg-fsecondary group-hover:bg-fprimary transition-all duration-500 px-3 py-2 flex justify-center place-items-center text-base font-medium text-center absolute top-4 right-4">
          -{discount}%
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
        <h5 className="basis-1 text-lg">KSH {price-(price*discount/100)}</h5>
        <h6 className="basis-1 text-base line-through">KSH {price}</h6>
      </CardFooter>
    </Card>
  );
}

export default ProductCard