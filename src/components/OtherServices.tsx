import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaRegFilePdf } from "react-icons/fa";

function OtherServices({ services }: any) {
  return (
    <div className="p-[30px] bg-[#f6f8fa]">
      <h3 className="mb-7 text-2xl text-fsecondary font-bold">Services</h3>

      <ul className="[&_li]:pb-2 [&_li]:mb-3 [&_li]:border-b-1 border-ftint last:[&_li]:border-b-[#f6f8fa]">
        {services?.map((service: any) => {
          const node = service.node;
          const iconUrl = node.serviceFields?.serviceicon?.node?.mediaItemUrl;
          const iconAlt = node.serviceFields?.serviceicon?.node?.altText || node.title;

          return (
            <li key={node.slug} className="text-xl text-fsecondary hover:text-fshade">
              <Link href={`/services/${node.slug}`} className="flex flex-row gap-4 items-center">
                {iconUrl ? (
                  <div className="flex justify-center items-center w-10 h-10 rounded-full p-2">
                    <Image
                      src={iconUrl}
                      alt={iconAlt}
                      width={node.serviceFields?.serviceicon?.node?.mediaDetails?.width || 40}
                      height={node.serviceFields?.serviceicon?.node?.mediaDetails?.height || 40}
                      className="object-contain brightness-0"
                    />
                  </div>
                ) : (
                  <FaRegFilePdf className="text-3xl inline-block" />
                )}
                {node.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default OtherServices