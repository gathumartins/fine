import React from 'react'
import Image from 'next/image';

function Proposition({vprop}:any) {
  return (
    <section className="bg-white py-[60px] px-[16px]">
      <header className="myCont sub title mb-10 text-center">
        <h2 className="leading-none !mb-0 !text-fsecondary">{vprop.title}</h2>
        <h3 className="leading-none !text-ftone">{vprop.subtitle}</h3>
      </header>
      <div className="myCont flex flex-col gap-6 lg:flex-row-reverse justify-between">
        <div className="lg:w-1/2 w-full">
          <div className="relative w-full h-full min-h-[550px] max-w-[570px] mx-auto">
            {vprop.images !== null &&
              vprop.images.length > 0 &&
              vprop.images.map((img: any, index: number) => (
                <Image
                  key={index}
                  src={img.image.node.mediaItemUrl}
                  alt={`Value Proposition Image ${index + 1}`}
                  width={img.image.node.mediaDetails.width}
                  height={img.image.node.mediaDetails.height}
                  className="absolute top-0 left-0 first:z-10 last:z-0 last:top-auto last:left-auto last:bottom-0 last:right-0 max-[425px]:w-[90%] sm:max-w-3/4 shadow-2xl rounded-lg"
                />
              ))}
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          {vprop.values.map((propValue: any, index: number) => (
            <div className="flex justify-start body statsub mb-8" key={index}>
              <div className="w-[120px] mr-4 [&_p]:mt-5">
                {propValue.icon !== null && (
                  <Image
                    src={propValue.icon.node.mediaItemUrl}
                    alt={`Fine work Kenya Limited ${propValue.title} Value Icon || ${propValue.icon.node.altText}`}
                    width={propValue.icon.node.mediaDetails.width}
                    height={propValue.icon.node.mediaDetails.height}
                    className="w-full"
                  />
                )}
              </div>
              <div className="flex-grow">
                <h5>{propValue.title}</h5>
                <div
                  className=""
                  dangerouslySetInnerHTML={{ __html: propValue.body }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proposition