import AboutSec from '@/components/AboutSec';
import CertsAwards from '@/components/CertsAwards';
import CoreStatements from '@/components/CoreStatements';
import PagesHero from '@/components/PagesHero'
import Stats from '@/components/Stats';
import React from 'react'

const page = async () => {
const query = `{
  page:page(id: "cG9zdDoxNg==", idType: ID) {
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
  com:common(id: "cG9zdDoxNjE=", idType: ID) {
    stats {
      stats {
        title
        subtitle
        stat {
          item {
            title
            value
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
const cl = 0;
// console.log(data.data.page.content)
  return (
    <article className="page">
      <section className="">
        <header className="bg-fsecondary/80 pt-[87px] w-full">
          <PagesHero data={data.data.page.minibanner.header} />
        </header>
      </section>
      <section className="py-12 px-[16px]">
        <div className="myCont py-12 px-[30px] md:px-[50px] lg:px-[80px] flex flex-col lg:flex-row justify-between gap-8 place-items-center [&_a]:hidden">
          <AboutSec
            secTitles={data.data.com.stats.stats}
            cont={data.data.page.content}
            cl={cl}
          />
          <Stats stats={data.data.com.stats.stats.stat} />
        </div>
      </section>
      <CertsAwards />
      <CoreStatements />
    </article>
  );
}

export default page