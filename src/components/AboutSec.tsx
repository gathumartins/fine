import React from 'react'
import Link from 'next/link';

function AboutSec() {
  return (
    <div className="lg:w-1/2 body sub title">
      <h3>Since 2017</h3>
      <h2>Who We Are When It Comes to Serving You</h2>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem illum
          odit. Voluptates vel, praesentium aut veritatis minima tenetur
          pariatur quisquam magni impedit inventore. Odit quasi neque vitae quo
          obcaecati dolore? Quod id nesciunt doloribus ullam expedita in eum
          repellat inventore. Officiis quibusdam, odit dolorem eaque eius
          exercitationem nulla soluta?
        </p>
      </div>
      <Link href="/about" className="heroBtn inline-block mt-4">
        Who We Are
      </Link>
    </div>
  );
}

export default AboutSec