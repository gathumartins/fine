import React from "react";
import PagesHero from "@/components/PagesHero";
import RelatedPosts from "@/components/RelatedPosts";
import Search from "@/components/Search";
import Tags from "@/components/Tags";
import Image from "next/image";
import { FaTags } from "react-icons/fa6";


async function page() {
  const query = `{
  page:page(id: "cG9zdDoyNA==", idType: ID) {
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

}`;
  const result = await fetch(
    `${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`,
    { headers: { "Content-Type": "application/json" } }
  );
  const data = await result.json();
  return (
    <article className="page">
      <section className="">
        <header className="bg-fsecondary/80 pt-[87px] w-full">
          <PagesHero data={data.data.page.minibanner.header} />
        </header>
      </section>
      <section className="pt-14 md:pt-20 lg:pt-28 px-[16px]">
        <div className="myCont flex flex-col lg:flex-row gap-7">
          <main className="flex-grow basis-1 lg:basis-2/3">
            <Image
              src="/images/blogdetails.webp"
              alt="Fine Work Kenya Limited Blog Featured Image"
              width={770}
              height={450}
            />
            <div className="my-4 text-lg font-medium">
              By Admin - Feb 22, 2025
            </div>
            <div className="body stats [&_h4]:mb-4">
              <h4>What are Groundworkers and what do they do?</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Impedit eveniet reprehenderit voluptas delectus reiciendis
                pariatur, totam id quae tempore fugiat tenetur asperiores saepe
                velit nisi voluptates molestiae quia fugit laboriosam quidem,
                distinctio dolor consequatur repellendus debitis natus magni.
                Totam atque provident nulla quasi voluptatum nostrum officia
                rerum pariatur maxime sit.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                iure eveniet minima commodi consequuntur veritatis, officiis
                quibusdam molestias, nemo dolorum veniam quisquam pariatur
                facilis repudiandae eaque quas assumenda enim, unde placeat
                dolores id voluptatibus amet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                explicabo iusto suscipit dolore repellendus odit laborum,
                cupiditate unde nesciunt eveniet temporibus autem adipisci earum
                at error aspernatur neque minima doloribus?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis voluptate repellat quam exercitationem excepturi enim
                et blanditiis amet minima itaque, doloribus cumque labore.
                Asperiores nemo odio sed molestias harum laborum quia enim,
                delectus repellendus consequuntur unde magnam, ipsam possimus
                vero, quam dolore adipisci. Rerum, vitae!
              </p>
            </div>
            <ul className="mt-4 flex flex-wrap justify-start gap-3 place-items-center [&_li]:text-[20px] [&_li]:font-normal">
              <li>
                <FaTags />
              </li>
              <li>Renovation</li>
              <li>Planning</li>
              <li>Consulting</li>
            </ul>
          </main>
          <aside className="flex flex-col gap-12 basis-1 lg:basis-1/3">
            <RelatedPosts />
            <Tags />
          </aside>
        </div>
      </section>
    </article>
  );
}

export default page;
