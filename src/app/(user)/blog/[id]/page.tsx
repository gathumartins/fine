import PagesHero from '@/components/PagesHero';
import RelatedPosts from '@/components/RelatedPosts';
import Search from '@/components/Search';
import Tags from '@/components/Tags';
import React from 'react'

function page() {
  return (
    <article className="page">
      <section className="">
        <header className="bg-fsecondary/80 pt-[87px] w-full">
          <PagesHero />
        </header>
      </section>
      <section className="pt-14 md:pt-20 lg:pt-28 px-[16px]">
        <div className="myCont flex flex-col lg:flex-row gap-7">
          <main className="flex-grow basis-1 lg:basis-2/3">Main</main>
          <aside className="flex flex-col gap-12 basis-1 lg:basis-1/3">
            <Search/>
            <RelatedPosts/>
            <Tags/>
          </aside>
        </div>
      </section>
    </article>
  );
}

export default page