import PagesHero from '@/components/PagesHero';
import React from 'react'

function page() {
  return (
    <article className="page">
      <section className="">
        <header className="bg-fsecondary/80 pt-[87px] w-full">
          <PagesHero />
        </header>
      </section>
    </article>
  );
}

export default page