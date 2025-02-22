import MyPagination from '@/components/MyPagination';
import PagesHero from '@/components/PagesHero'
import ProCats from '@/components/ProCats';
import React from 'react';

const page = async() => {
const query = `{
  page:page(id: "cG9zdDoyMg==", idType: ID) {
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
  proCats:prosyss {
    edges {
      node {
        id
        name
        slug
        prosysId
        products {
          edges {
            node {
              id
              title
              slug
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
              productFields {
                variations {
                  variation {
                    label
                    percentdiscount
                    price
                  }
                }
              }
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
const data = await result.json();
  const itemsPerPage = 6;
  const comp = "product";
  const products = [1,2,3,4,5,6]
  const sortedCats = data.data.proCats.edges.sort(
    (a:any, b:any) => a.node.prosysId - b.node.prosysId
  );
  return (
    <article className="page">
      <section className="">
        <header className="bg-fsecondary/80 pt-[87px] w-full">
          <PagesHero data={data.data.page.minibanner.header} />
        </header>
      </section>
      <ProCats ipp={itemsPerPage} items={products} comp={comp} sortedCats={sortedCats} />
    </article>
  );
}

export default page