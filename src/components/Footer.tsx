import Link from "next/link";
import { FaMapMarkerAlt, FaRegEnvelope } from "react-icons/fa";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import Clients from "./Clients";
import Newsletter from "./Newsletter";



const Footer = () => {
  return (
    <>
      <Clients />
      <footer className="bg-[url('/images/footerbg.webp')] bg-no-repeat bg-cover">
        <div className="bg-newsbg bg-cover bg-no-repeat bg-center">
          <Newsletter />
        </div>
        <section className="footerpadding bg-fsecondary/50">
          <div className="myCont grid max-sm:grid-cols-2 max-lg:grid-cols-2 grid-cols-4 gap-4">
            <div className="pr-5 max-sm:pr-0 flex-grow max-sm:col-span-2">
              {/* <Image src="/images/logowhite.webp" width="180" height="41" alt="Finework Kenya Limited Logo Foooter" className="mb-6" /> */}
              <h3 className="font-bold text-fshade mb-[20px] text-xl">
                Our Purpose
              </h3>
              <p className="text-xl font-medium mb-[20px] text-white leading-9">
                Commissioning and servicing of all types of fire
                equipment/systems. Walk through and hand held detectors Electric
                fencing /razor wire
              </p>
            </div>
            <div className="pr-[20px]">
              <h3 className="font-bold text-fshade mb-[20px] text-xl">
                Quick Links
              </h3>
              <ul className="pl-0 text-xl font-medium leading-9">
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
              <h3 className="font-bold text-fshade mb-[20px] text-xl">
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
                <li>
                  <Link
                    href="/projects"
                    className="text-white hover:text-fprimary no-underline"
                  >
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pr-[20px] max-sm:pr-0 max-sm:col-span-2">
              <h3 className="font-bold text-fshade mb-[20px] text-xl">
                Contact Us
              </h3>
              <div className="text-white">
                <div className="flex flex-start mb-2">
                  <div className="w-[30px] mr-[10px] pt-3">
                    <FaMapMarkerAlt className="w-[30px]" />
                  </div>
                  <p className="text-xl font-medium leading-8">
                    Enterprise Center Building, Enterprise Road, Industrial
                    Area, Nairobi Kenya.
                  </p>
                </div>

                <div className="flex flex-start mb-[8px]">
                  <div className="w-[30px] mr-[10px] pt-3 text-center">
                    <HiMiniDevicePhoneMobile className="w-[20px]" />
                  </div>
                  <span className="text-xl font-medium grid grid-cols-1 leading-6">
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

                <div className="flex flex-start mb-[8px] leading-1">
                  <div className="w-[30px] mr-[10px] pt-1 text-center">
                    <FaRegEnvelope className="w-[20px]" />
                  </div>
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
        <div className="bg-fsecondary pt-[28px] pb-[15px] max-sm:px-[16px]">
          <div className="myCont flex flex-col lg:flex-row gap-2 justify-center lg:justify-between">
            <ul className="flex justify-center lg:justify-start gap-5 text-lg font-medium">
              <li>
                <Link
                  href="/privacy"
                  className="text-white hover:text-fprimary no-underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white hover:text-fprimary no-underline"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
            <div className="flex-grow text-center lg:text-right">
              <p className="text-white text-lg font-medium inline-block">
                &copy; {new Date().getFullYear()} Fine Work Kenya Limited. ALL
                Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
