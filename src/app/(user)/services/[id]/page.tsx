import Download from '@/components/Download';
import OtherServices from '@/components/OtherServices';
import PagesHero from '@/components/PagesHero';
import React from 'react'

async function page() {
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
  return (
    <article className="page">
      <section className="">
        <header className="bg-fsecondary/80 pt-[87px] w-full">
          <PagesHero data={data.data.page.minibanner.header} />
        </header>
      </section>
      <section className="pt-14 md:pt-20 lg:pt-28 px-[16px]">
        <div className="myCont flex flex-col lg:flex-row gap-7">
          <main className="flex-grow  basis-1 lg:basis-2/3">Main</main>
          <aside className="flex flex-col gap-12 basis-1 lg:basis-1/3">
            <OtherServices />
            <Download />
          </aside>
        </div>
      </section>
    </article>
  );
}

export default page