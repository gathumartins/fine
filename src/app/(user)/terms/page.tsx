import PagesHero from "@/components/PagesHero";
import React from "react";

const page = async() => {
const query = `{
  page:page(id: "cG9zdDozMA==", idType: ID) {
    id
    content
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
      <section className="py-12 px-[16px]">
        <div
          className="myCont border-b-1 pt-12 pb-6 body sub title lists [&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:text-fsecondary"
          dangerouslySetInnerHTML={{ __html: data.data.page.content }}
        ></div>
      </section>
    </article>
  );
};

export default page;
