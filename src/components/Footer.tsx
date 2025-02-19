import Link from "next/link";
import { FaMapMarkerAlt, FaRegEnvelope, FaMobileAlt } from "react-icons/fa";
import Clients from "./Clients";
import Newsletter from "./Newsletter";



const Footer = ({footer, news, quick, clients}:any) => {
  // console.log(footer)
  return (
    <>
      <Clients clients={clients} />
      <footer className="bg-[url('/images/footerbg.webp')] bg-no-repeat bg-cover">
        <div className="bg-newsbg bg-cover bg-no-repeat bg-center">
          <Newsletter news={news} />
        </div>
        <section className="footerpadding bg-fsecondary/50">
          <div className="myCont grid max-sm:grid-cols-2 max-lg:grid-cols-2 grid-cols-4 gap-4">
            <div className="pr-5 max-sm:pr-0 flex-grow max-sm:col-span-2">
              {/* <Image src="/images/logowhite.webp" width="180" height="41" alt="Finework Kenya Limited Logo Foooter" className="mb-6" /> */}
              <h3 className="font-bold text-fshade mb-[20px] text-xl">
                Our Purpose
              </h3>
              <div
                className="text-xl font-medium mb-[20px] text-white leading-9"
                dangerouslySetInnerHTML={{ __html: footer.purpose }}
              ></div>
            </div>
            <div className="pr-[20px]">
              <h3 className="font-bold text-fshade mb-[20px] text-xl">
                Quick Links
              </h3>
              <ul className="pl-0 text-xl font-medium leading-9">
                {quick.map((menu: any) => (
                  <li key={menu.node.id}>
                    {menu.node.uri !== null && (
                      <Link
                        href={`${menu.node.uri}`}
                        className="text-white hover:text-fprimary no-underline"
                      >
                        {menu.node.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pr-[20px]">
              <h3 className="font-bold text-fshade mb-[20px] text-xl">
                Follow Us
              </h3>
              <ul className="leading-9 pl-0 font-medium text-xl">
                {footer.socials.map((social: any, index: number) => (
                  <li key={index}>
                    {social.social.link !== null && (
                      <Link
                        href={`${social.social.link}`}
                        target="_blank"
                        className="text-white hover:text-fprimary no-underline"
                      >
                        {social.social.label}
                      </Link>
                    )}
                  </li>
                ))}
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
                    {footer.contacts.location}
                  </p>
                </div>

                <div className="flex flex-start place-items-center mb-[10px]">
                  <div className="w-[30px] mr-[10px] text-center">
                    <FaMobileAlt className="w-full" />
                  </div>
                  <span className="text-xl font-medium grid grid-cols-1 leading-6">
                    {footer.contacts.phone.map((phone: any, index: number) => (
                      <Link
                        href={`tel:+${phone.number}`}
                        className="text-white hover:text-fprimary no-underline"
                        key={index}
                      >
                        {`+${phone.number}`}
                      </Link>
                    ))}
                  </span>
                </div>

                <div className="flex flex-start mb-[10px] leading-1">
                  <div className="w-[30px] mr-[10px] pt-1 text-center">
                    <FaRegEnvelope className="w-full" />
                  </div>
                  <span className="text-xl font-medium grid grid-cols-1">
                    {footer.contacts.email.map((email: any, index: number) => (
                      <Link
                        href={`mailto:${email.address}`}
                        className="text-white hover:text-fprimary no-underline"
                        key={index}
                      >
                        {email.address}
                      </Link>
                    ))}
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
                &copy; {new Date().getFullYear()} {footer.copyright}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
