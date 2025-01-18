import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeOpenIcon,
} from "@heroicons/react/24/solid";
import Clients from "./Clients";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <>
      {/* <Clients/> */}
      <footer className="bg-[url('/images/footerbg.webp')] bg-no-repeat bg-cover">
        <div className="bg-newsbg">
          {/* <Newsletter /> */}
        </div>
        <section className="mypadding bg-fsecondary/90">
          <div className="myCont grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-4 gap-4">
            <div className="pr-5 flex-grow">
              {/* <Image src="/images/logowhite.webp" width="180" height="41" alt="Finework Kenya Limited Logo Foooter" className="mb-6" /> */}
              <h3 className="font-bold text-white mb-[20px] text-xl">
                Our Purpose
              </h3>
              <p className="text-xl font-medium mb-[20px] text-white">
                Commissioning and servicing of all types of fire
                equipment/systems. Walk through and hand held detectors Electric
                fencing /razor wire
              </p>
            </div>
            <div className="pr-[20px]">
              <h3 className="font-bold text-white mb-[20px] text-xl">
                Quick Links
              </h3>
              <ul className="pl-0 text-xl font-medium">
                <li>
                  <Link
                    href="/about"
                    className="text-white hover:text-fprimary no-underline"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-white hover:text-fprimary no-underline"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-white hover:text-fprimary no-underline"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-white hover:text-fprimary no-underline"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacts"
                    className="text-white hover:text-fprimary no-underline"
                  >
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pr-[20px]">
              <h3 className="font-bold text-white mb-[20px] text-xl">
                Follow Us
              </h3>
              <ul className="leading-9 pl-0 font-medium text-xl">
                <li>
                  <Link
                    href="https://www.twitter.com/FineworkKenya"
                    target="_blank"
                    className="text-white hover:text-fprimary no-underline"
                  >
                    Space X
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/fineworkkenya"
                    target="_blank"
                    className="text-white hover:text-fprimary no-underline"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/fineworkkenya"
                    target="_blank"
                    className="text-white hover:text-fprimary no-underline"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-white hover:text-fprimary no-underline"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pr-[20px]">
              <h3 className="font-bold text-white mb-[20px] text-xl">
                Contact Us
              </h3>
              <div className="text-white">
                <div className="flex items-stretch mb-2">
                  <MapPinIcon className="w-[40px] h-[40px] mr-[20px]" />
                  <span className="text-xl font-medium leading-6">
                    Enterprise Center Building, Enterprise Road, Industrial
                    Area, Nairobi Kenya.
                  </span>
                </div>

                <div className="flex items-stretch mb-[8px]">
                  <PhoneIcon className="w-[20px] h-[20px] mr-[20px]" />
                  <span className="text-xl font-medium grid grid-cols-1 leading-5">
                    <Link
                      href="tel:+254754006060"
                      className="text-white hover:text-fprimary no-underline"
                    >
                      +254 754 006 060
                    </Link>
                    <Link
                      href="tel:+254736709540"
                      className="text-white hover:text-fprimary no-underline"
                    >
                      +254 736 709 540
                    </Link>
                  </span>
                </div>

                <div className="flex items-stretch mb-[8px] leading-1">
                  <EnvelopeOpenIcon className="w-[20px] h-[20px] mr-[20px]" />
                  <span className="text-xl font-medium grid grid-cols-1">
                    <Link
                      href="mailto:info@finework.co.ke"
                      className="text-white hover:text-fprimary no-underline"
                    >
                      info@finework.co.ke
                    </Link>
                  </span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-fsecondary pt-[28px] pb-[10px] max-sm:px-[16px]">
          <div className="myCont text-center">
            <p className="text-white text-lg font-medium">
              &copy; Finework Kenya {new Date().getFullYear()} ALL Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
