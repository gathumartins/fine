import React from 'react'
import Link from 'next/link';
import clsx from "clsx";

function AboutSec({secTitles, cont, cl}:any) {
  let clamp=cl;
  return (
    <div className="lg:w-1/2 body sub title">
      <h3>{secTitles.title}</h3>
      <h2>{secTitles.subtitle}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: cont }}
        className={`line-clamp-${clamp}`}
      ></div>
      <Link href="/about" className="heroBtn inline-block mt-4">
        Who We Are
      </Link>
    </div>
  );
}

export default AboutSec