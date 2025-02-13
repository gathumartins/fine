import AboutSec from '@/components/AboutSec';
import CertsAwards from '@/components/CertsAwards';
import CoreStatements from '@/components/CoreStatements';
import PagesHero from '@/components/PagesHero'
import Stats from '@/components/Stats';
import React from 'react'

const page = () => {

  return (
    <article className="page">
      <section className="">
        <header className="bg-fsecondary/80 pt-[87px] w-full">
          <PagesHero />
        </header>
      </section>
      <section className="py-12 px-[16px]">
        <div className="myCont py-12 px-[30px] md:px-[50px] lg:px-[80px] flex flex-col lg:flex-row justify-between gap-8 place-items-center [&_a]:hidden">
          <AboutSec />
          <Stats />
        </div>
      </section>
      {/* <CertsAwards/> */}
      <CoreStatements/>
    </article>
  );
}

export default page