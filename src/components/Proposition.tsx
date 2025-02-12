import React from 'react'
import Image from 'next/image';

function Proposition() {
  return (
    <section className="bg-white py-[60px] px-[16px]">
      <div className="myCont flex flex-col gap-6 lg:flex-row-reverse justify-between">
        <div className="lg:w-1/2 w-full">
          <div className="relative w-full h-full min-h-[550px] max-w-[570px] mx-auto">
            <Image
              src="/images/imgone.webp"
              alt="value proposition image"
              width={338}
              height={367}
              className="top-0 left-0 absolute shadow-xl z-10"
            />
            <Image
              src="/images/imgtwo.webp"
              alt="value proposition image"
              width={301}
              height={372}
              className="bottom-0 right-0 absolute shadow-xl z-0"
            />
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          {[1, 2, 3].map((item: any, index: number) => (
            <div className="flex justify-start body statsub mb-8" key={index}>
              <div className="w-[110px] mr-4 [&_p]:mt-5">
                <Image
                  src="/images/feature.webp"
                  alt="value proposition icon"
                  width={53}
                  height={53}
                  className="w-full"
                />
              </div>
              <div className="flex-grow">
                <h5>Top Rated</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
                  deserunt eaque. Blanditiis molestias, exercitationem
                  distinctio incidunt unde repudiandae praesentium cumque!
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proposition