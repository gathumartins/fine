import PagesHero from '@/components/PagesHero';
import React from 'react'
import Image from 'next/image';
import ProjectInfo from '@/components/ProjectInfo';

async function page() {
const query = `{
  page:page(id: "cG9zdDoyMA==", idType: ID) {
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
      <section className="py-12 px-[16px]">
        <div className="myCont">
          <Image
            src="/images/projectdetails.webp"
            alt="Fine Work Kenya Limited Project"
            width={1170}
            height={439}
          />
          <div className="body stats flex flex-col lg:flex-row gap-8 mt-8">
            <aside className="lg:basis-1/3">
              <ProjectInfo />
            </aside>
            <main className="lg:basis-2/3">
              <h4>Mountain Tunnel</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem veritatis quo et ullam, ducimus itaque earum dolorem?
                Consectetur, et, aut. A, corporis officia eius dicta explicabo
                saepe nesciunt, mollitia minima, atque maiores optio cum. Atque
                amet unde impedit voluptate cumque distinctio minima, aspernatur
                nemo! Expedita in, numquam blanditiis ullam rem!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                cum fugit officia dolores eligendi, rem. Quibusdam quasi impedit
                perspiciatis iure maiores, eaque numquam doloremque, quo nam
                soluta itaque obcaecati tempore!.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                ex, nam adipisci dolores laborum earum. Unde cum, ut nostrum
                nihil alias, laudantium molestiae, vitae quidem dolorem officiis
                ipsum. Aliquid nemo consequuntur cupiditate delectus sapiente
                doloribus dolorem, at suscipit, non laudantium mollitia magnam
                repellat atque quia! Aut, veniam, nam. Ex porro optio facilis
                nostrum, qui ipsa?
              </p>
            </main>
          </div>
          <footer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
            {[1,2,3,4,5,6,7,8].map((pic:any, index:number) =>(
              <Image src="/images/projthumb.webp" alt="Fine Work Kenya Project Image" width={440} height={360}/>
            ))}
          </footer>
        </div>
      </section>
    </article>
  );
}

export default page