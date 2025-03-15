import React from 'react'
import Image from 'next/image';
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



function ServiceCard({service}:any) {
  const bg=service.node.featuredImage !== null ? `${service.node.featuredImage.node.mediaItemUrl}`: "/images/service.webp";
  const icon = service.node.serviceFields.serviceicon !== null ? `${service.node.serviceFields.serviceicon.node.mediaItemUrl}`: "/images/serviceicon.webp";
return (
  <Link href={`/services/${service.node.slug}`}>
    <Card className="rounded-none border-none shadow-none group">
      <CardHeader className="min-h-[246px] relative mb-12 overflow-hidden">
        <div
          className="absolute bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110 min-h-[246px] w-full top-0 left-0"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        ></div>
        <CardTitle className="sr-only">{service.node.title}</CardTitle>
      </CardHeader>
      <CardContent className="body px-0 pb-0 [&_h3]:text-2xl [&_h3]:font-bold relative">
        <div className="w-[70px] h-[70px] bg-fsecondary group-hover:bg-fprimary transition-all duration-500 p-3 flex justify-center place-items-center absolute z-40 -top-20 left-5">
          <Image src={icon} alt={service.node.title} width={64} height={64} className='h-10 w-10' />
        </div>
        <h3 className='capitalize'>{service.node.title}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ex?
        </p>
        <p>{service.node.excerpt}</p>
      </CardContent>
      <CardFooter className="[&_button]:underline [&_button]:text-fsecondary [&_button]:text-xl [&_button]:font-bold px-0 pt-0">
        <Button className="group-hover:text-fprimary transition-all duration-500 bg-transparent rounded-none hover:bg-transparent text-xl p-0">
          See More
        </Button>
      </CardFooter>
    </Card>
  </Link>
);
}

export default ServiceCard