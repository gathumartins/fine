import HomeHero from "@/components/HomeHero";
import HomeStats from "@/components/HomeStats";
import Proposition from "@/components/Proposition";
import Testimonials from "@/components/Testimonials";

export default async function Home() {
  const query = `{
  page:page(id: "cG9zdDoxNA==", idType: ID) {
    id
    title
    homeFields {
      hero {
        title
        subtitle
        link {
          label
          path
        }
        banner {
          node {
            altText
            mediaDetails {
              width
              height
            }
            mediaItemUrl
          }
        }
      }
      proposition {
        title
        subtitle
        images {
          image {
            node {
              altText
              mediaDetails {
                height
                width
              }
              mediaItemUrl
            }
          }
        }
        values {
          title
          body
          icon {
            node {
              altText
              mediaDetails {
                height
                width
              }
              mediaItemUrl
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
    // console.log(data.data.page.homeFields.hero)
  return (
    <article className="home">
      <HomeHero hero={data.data.page.homeFields.hero} />
      <HomeStats />
      <Proposition />
      <Testimonials />
    </article>
  );
}
