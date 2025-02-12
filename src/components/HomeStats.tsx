import React from 'react'
import AboutSec from './AboutSec';
import Stats from './Stats';

function HomeStats() {
  return (
    <section className="bg-fshade/50 py-12 px-[16px]">
      <div className="myCont bg-white rounded-md py-12 px-[30px] md:px-[50px] lg:px-[80px] flex flex-col md:flex-row justify-between gap-8 place-items-center">
        <AboutSec/>
        <Stats/>
      </div>
    </section>
  );
}

export default HomeStats