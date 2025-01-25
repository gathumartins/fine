import Map from '@/components/Map';
import PagesHero from '@/components/PagesHero'
import React from 'react'
import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeOpenIcon,
} from "@heroicons/react/24/solid";
import ContactForm from '@/components/ContactForm';

const page = () => {
  return (
    <article className="page">
      <section className="">
        <header className="bg-fsecondary/80 pt-[87px] w-full">
          <PagesHero />
        </header>
      </section>
      <section className="myCont pt-[80px] px-[16px]">
        <Map />
      </section>
      <div className="myCont pt-[50px] px-[16px]">
        <section className="flex lg:flex-row flex-col">
          <div className="lg:w-[33%] w-[100%]">
            <h2 className="font-bold text-3xl max-md:text-2xl max-sm:text-xl mb-7">
              Contact Information
            </h2>
            <div>
              <div className="flex items-stretch mb-5">
                <MapPinIcon className="w-7 h-7 mr-5" />
                <span className="text-xl font-medium">
                  Enterprise Center Building,
                  <br /> Enterprise Road, Industrial <br />
                  Area, Nairobi Kenya.
                </span>
              </div>

              <div className="flex items-stretch mb-5">
                <PhoneIcon className="w-7 h-7 mr-5" />
                <span className="text-xl font-medium grid grid-cols-1">
                  <Link
                    href="tel:+254754006060"
                    className="text-fsecondary no-underline hover:text-fprimary"
                  >
                    +254 754 006 060
                  </Link>
                  <Link
                    href="tel:+254736709540"
                    className="text-fsecondary no-underline hover:text-fprimary"
                  >
                    +254 736 709 540
                  </Link>
                </span>
              </div>

              <div className="flex items-stretch mb-5">
                <EnvelopeOpenIcon className="w-7 h-7 mr-5" />
                <span className="text-xl font-medium grid grid-cols-1">
                  <Link
                    href="mailto:info@finework.co.ke"
                    className="text-fsecondary no-underline hover:text-fprimary"
                  >
                    info@finework.co.ke
                  </Link>
                  <p>P.O. Box 59765-00500 Nrb KE</p>
                </span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-3xl max-md:text-2xl max-sm:text-xl mb-7">
              Leave Your Message
            </h2>
            <ContactForm />
          </div>
        </section>
      </div>
    </article>
  );
}

export default page