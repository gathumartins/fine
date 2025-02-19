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

}`;
const result = await fetch(
  `${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`,
  { headers: { "Content-Type": "application/json" } }
);
const data = await result.json();
  let services = [1, 2, 3, 4, 5, 6, 7];
  const itemsPerPage = 6;
  const comp = "service";
  return (
    <article className="page">
      <section className="">
        <header className="bg-fsecondary/80 pt-[87px] w-full">
          <PagesHero data={data.data.page.minibanner.header} />
        </header>
      </section>
      <MyPagination items={services} ipp={itemsPerPage} comp={comp} />
    </article>
  );
}

export default page