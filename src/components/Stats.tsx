'use client'
import React from 'react'
import CountUp from "react-countup";

function Stats() {
  return (
    <div className="w-full lg:w-1/2 grid sm:grid-cols-2 gap-5">
      {[1, 2, 3, 4].map((item: any, index: number) => (
        <div
          className="rounded hover:bg-fshade sm:first:mt-10 bg-white border-1 sm:last:mt-0 md:last:-mt-10 border-fshade sm:h-[180px] md:h-[210px] xl:h-[180px] [&_h4]:hover:text-fsecondary p-[20px] text-center [&_h5]:hover:text-fsecondary flex flex-col place-items-center"
          key={index}
        >
          <div className="flex flex-col justify-center place-items-center flex-grow stats statsub">
            <h4 className="text-fsecondary text-3xl">
              <CountUp
                start={0}
                end={100}
                duration={2.5}
                delay={0.5}
                separator=","
                suffix="+"
                enableScrollSpy
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </h4>
            <h5 className="text-xl font-avenirBlack text-ftone">
              Projects
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Stats