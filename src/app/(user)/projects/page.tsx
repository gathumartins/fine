import MyPagination from '@/components/MyPagination';
import PagesHero from '@/components/PagesHero'
import React from 'react'

const page = async() => {
const query = `{
  page:page(id: "cG9zdDoyMA==", idType: ID) {
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
projects:projects {
    edges {
      node {
        id
        slug
        title
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
        projectFields {
          information {
            title
            fields {
              key
              value
            }
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
  let projects = data.data.projects.edges;
  const itemsPerPage = 6;
  const comp = "project"; // Log the projects data to the console
  return (
    <article className="page">
      <section className="">
        <header className="bg-fsecondary/80 pt-[87px] w-full">
          <PagesHero data={data.data.page.minibanner.header} />
        </header>
      </section>
      <section className="pt-14 md:pt-20 lg:pt-28 px-[16px]">
        <MyPagination items={projects} ipp={itemsPerPage} comp={comp} />
      </section>
    </article>
  );
}

export default page