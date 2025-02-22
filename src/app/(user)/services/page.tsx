import MyPagination from '@/components/MyPagination';
import PagesHero from '@/components/PagesHero'
import React from 'react'

const page = async() => {
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
        excerpt
        featuredImage {
          node {
            mediaItemUrl
          }
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
  let services = data.data.services.edges;
  const itemsPerPage = 6;
  const comp = "service";
  // console.log(services.length)
  return (
    <article className="page">
      <section className="">
        <header className="bg-fsecondary/80 pt-[87px] w-full">
          <PagesHero data={data.data.page.minibanner.header} />
        </header>
      </section>
      <section className="pt-14 md:pt-20 lg:pt-28 px-[16px]">
        <MyPagination items={services} ipp={itemsPerPage} comp={comp} />
      </section>
    </article>
  );
}

export default page