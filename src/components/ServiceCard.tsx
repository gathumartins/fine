import React from 'react'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";



function ServiceCard() {
  return (
    <Link href="/services/1">
      <Card className="rounded-none border-none shadow-none group relative">
        <CardHeader className="min-h-[246px] bg-[url('/images/service.webp')] bg-cover bg-center bg-no-repeat relative mb-12">
          <CardTitle className="sr-only">Card Title</CardTitle>
          <CardDescription className="w-[70px] h-[70px] bg-fsecondary group-hover:bg-fprimary transition-all duration-300 p-3 flex justify-center place-items-center absolute -bottom-7"></CardDescription>
        </CardHeader>
        <CardContent className='body px-0 pb-0 [&_h3]:text-2xl [&_h3]:font-bold'>
          <h3>Heading</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque maxime dignissimos explicabo mollitia non culpa est rem ipsum deleniti. Placeat?</p>
        </CardContent>
        <CardFooter className="[&_button]:underline [&_button]:text-fsecondary [&_button]:text-xl [&_button]:font-bold px-0 pt-0">
            <Button  className="group-hover:text-fprimary transition-all duration-400 bg-transparent rounded-none hover:bg-transparent text-xl">See More</Button>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default ServiceCard