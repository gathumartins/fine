import MyPagination from '@/components/MyPagination';
import PagesHero from '@/components/PagesHero'
import React from 'react'

const page = () => {
  let products = [1, 2, 3, 4, 5, 6, 7];
  const itemsPerPage = 6;
  const comp = "product";
  return (
    <article className="page">
      <section className="">
        <header className="bg-fsecondary/80 pt-[87px] w-full">
          <PagesHero />
        </header>
      </section>
      <MyPagination items={products} ipp={itemsPerPage} comp={comp} />
    </article>
  );
}

export default page