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
        <CardFooter className="[&_a]:underline [&_a]:text-fsecondary [&_a]:text-lg [&_a]:font-bold px-0 pt-0">
          <Link href="/services/1" className="group-hover:text-fprimary transition-all duration-400">See More</Link>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default ServiceCard