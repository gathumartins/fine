import React from 'react'
import AboutSec from './AboutSec';
import Stats from './Stats';

function HomeStats({stats}:any) {
  // console.log(stats.stat)
  return (
    <section className="bg-fshade/50 py-12 px-[16px]">
      <div className="myCont bg-white rounded-md py-12 px-[30px] md:px-[50px] lg:px-[80px] flex flex-col lg:flex-row justify-between gap-8 place-items-center line-clamp-3">
        <AboutSec/>
        <Stats stats={stats.stat}/>
      </div>
    </section>
  );
}

export default HomeStats