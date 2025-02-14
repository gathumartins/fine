import PagesHero from '@/components/PagesHero'
import React from 'react'

const page = () => {
  return (
    <article className="page">
      <section className="">
        <header className="bg-fsecondary/80 pt-[87px] w-full">
          <PagesHero />
        </header>
      </section>
      <section className="pt-14 md:pt-20 lg:pt-28 px-[16px]">
        <div className="myCont">

        </div>
      </section>
    </article>
  );
}

export default page