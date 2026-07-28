import Download from '@/components/Download';
import OtherServices from '@/components/OtherServices';
import PagesHero from '@/components/PagesHero';
import Image from 'next/image';
import React from 'react'

async function page({params}:{params:Promise<{id:string}>}) {
const query = `{
  page:page(id: "cG9zdDoxOA==", idType: ID) {
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
  }
  services:services {
    edges {
      node {
        id
        title
        slug
        content
        featuredImage {
          node {
            altText
            mediaDetails {
              height
              width
            }
            mediaItemUrl
          }
        }
        serviceFields {
          serviceicon {
            node {
              altText
              mediaDetails {
                height
                width
              }
              mediaItemUrl
            }
          }
        }
      }
    }
  }
}`;
const resolvedParams = await params;
const slug = resolvedParams.id;
const result = await fetch(
  `${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`,
  { headers: { "Content-Type": "application/json" } }
);
const data = await result.json();
const allServices = data.data.services.edges;
const currentService = allServices.find((service: any) => service.node.slug === slug);
const otherServices = allServices.filter((service: any) => service.node.slug !== slug);
const featuredImage =
  currentService?.node.featuredImage?.node.mediaItemUrl ||
  "/images/projectdetails.webp";
  return (
    <article className="page">
      <section className="">
        <header className="bg-fsecondary/80 pt-[87px] w-full">
          <PagesHero data={data.data.page.minibanner.header} />
        </header>
      </section>
      <section className="pt-14 md:pt-20 lg:pt-28 px-[16px] pb-14 shadow-small">
        <div className="myCont flex flex-col lg:flex-row gap-7">
          <main className="body stats flex-grow  basis-1 lg:basis-2/3">
            <h4 className="mb-4">{currentService?.node.title}</h4>
            <figure className="relative w-full h-[439px]">
              <Image
                src={featuredImage}
                alt={currentService?.node.title}
                className="object-cover w-full h-full"
                width={currentService?.node.featuredImage?.node.mediaDetails.width || 1170}
                height={currentService?.node.featuredImage?.node.mediaDetails.height || 439}
              />
            </figure>
            <section
              className="mt-8"
              dangerouslySetInnerHTML={{
                __html: currentService?.node.content || "",
              }}
            />
          </main>
          <aside className="flex flex-col gap-12 basis-1 lg:basis-1/3">
            <OtherServices services={otherServices} />
            <Download />
          </aside>
        </div>
      </section>
    </article>
  );
}

export default page