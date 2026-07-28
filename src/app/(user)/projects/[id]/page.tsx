import PagesHero from '@/components/PagesHero';
import React from 'react'
import Image from 'next/image';
import ProjectInfo from '@/components/ProjectInfo';

async function page({ params }: { params: Promise<{ id: string }> }) {
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
projects:projects {
    edges {
      node {
        id
        slug
        title
        content
        featuredImage {
          node {
            altText
            mediaDetails {
              height
              width
            }
            mediaItemUrl
          }
        }
        projectFields {
          information {
            title
            fields {
              key
              value
            }
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
const resolvedParams = await params;
const slug = resolvedParams.id;
const data = await result.json();
const allProjects = data.data.projects.edges;
const project = allProjects.find((p: any) => p.node.slug === slug);
const otherProjects = allProjects.filter((p: any) => p.node.slug !== slug);
const topimageUrl = project.node.featuredImage?.node?.mediaItemUrl || "/images/projectdetails.webp";
const projectInfo = project.node.projectFields?.information;
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
            src={topimageUrl}
            alt="Fine Work Kenya Limited Project"
            width={1170}
            height={439}
          />
          <div className="body stats flex flex-col lg:flex-row gap-8 mt-8">
            <aside className="lg:basis-1/3">
              <ProjectInfo fields={projectInfo} />
            </aside>
            <main className="lg:basis-2/3">
              <div className="" dangerouslySetInnerHTML={{ __html: project?.node.content || "" }} />
            </main>
          </div>
          <footer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
            {[1,2,3,4,5,6,7,8].map((pic:any, index:number) =>(
              <Image src="/images/projthumb.webp" alt="Fine Work Kenya Project Image" width={440} height={360} key={index}/>
            ))}
          </footer>
        </div>
      </section>
    </article>
  );
}

export default page