import PagesHero from '@/components/PagesHero'
import React from 'react'

const page = () => {

  return (
    <article className="lg:relative">
      <header className="bg-fsecondary/80 pt-[87px] lg:absolute w-full lg:-mt-[150px] -z-50">
        <PagesHero />
      </header>
    </article>
  );
}

export default page