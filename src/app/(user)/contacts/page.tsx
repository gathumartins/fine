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

const page = async () => {
const query = `{
  page:page(id: "cG9zdDoyNg==", idType: ID) {
    minibanner {
      header {
        title
        image {
          node {
            mediaItemUrl
          }
        }
      }
    }
    contactsFields {
      map {
        center {
          lat
          lng
        }
        zoom
        height
      }
      formtitle
      contact {
        title
        location
        phone {
          number
        }
        mail {
          email
          postal
        }
      }
    }
  }

}`;
const result = await fetch(
  `${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`,
  { headers: { "Content-Type": "application/json" } }
);
const data = await result.json();
  return (
    <article className="page">
      <section className="">
        <header className="bg-fsecondary/80 pt-[87px] w-full">
          <PagesHero data={data.data.page.minibanner.header} />
        </header>
      </section>
      <section className="myCont pt-[80px] px-[16px]">
        <Map mapd={data.data.page.contactsFields.map} />
      </section>
      <div className="myCont pt-[50px] px-[16px]">
        <section className="flex lg:flex-row flex-col">
          <div className="lg:w-[33%] w-[100%]">
            <h2 className="font-bold text-3xl max-md:text-2xl max-sm:text-xl mb-7">
              {data.data.page.contactsFields.contact.title}
            </h2>
            <div>
              <div className="flex items-stretch mb-5">
                <MapPinIcon className="w-7 h-7 mr-5" />
                <span
                  className="text-xl font-medium"
                  dangerouslySetInnerHTML={{
                    __html: data.data.page.contactsFields.contact.location,
                  }}
                ></span>
              </div>

              <div className="flex items-stretch mb-5">
                <PhoneIcon className="w-7 h-7 mr-5" />
                <span className="text-xl font-medium grid grid-cols-1">
                  {data.data.page.contactsFields.contact.phone.map(
                    (phonen: any, index: number) => (
                      <Link
                        href={`tel:+${phonen.number}`}
                        className="text-fsecondary no-underline hover:text-fprimary"
                        key={index}
                      >
                        +{phonen.number}
                      </Link>
                    )
                  )}
                </span>
              </div>

              <div className="flex items-stretch mb-5">
                <EnvelopeOpenIcon className="w-7 h-7 mr-5" />
                <span className="text-xl font-medium grid grid-cols-1">
                  <Link
                    href={`mailto:${data.data.page.contactsFields.contact.mail.email}`}
                    className="text-fsecondary no-underline hover:text-fprimary"
                  >
                    {data.data.page.contactsFields.contact.mail.email}
                  </Link>
                  <p>{data.data.page.contactsFields.contact.mail.postal}</p>
                </span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-3xl max-md:text-2xl max-sm:text-xl mb-7">
              {data.data.page.contactsFields.formtitle}
            </h2>
            <ContactForm />
          </div>
        </section>
      </div>
    </article>
  );
}

export default page