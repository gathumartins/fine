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
      testimonials {
        title
        subtitle
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
  about:page(id: "cG9zdDoxNg==", idType: ID) {
    content
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
  com:common(id: "cG9zdDoxNjE=", idType: ID) {
    stats {
      stats {
        title
        subtitle
        stat {
          item {
            title
            value
          }
        }
      }
    }
  }
  tests:testimonials {
    edges {
      node {
        id
        title
        content
        testimonialFields {
          company
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
  // console.log(data.data.page.homeFields.testimonials)
  return (
    <article className="home">
      <HomeHero hero={data.data.page.homeFields.hero} />
      <HomeStats
        stats={data.data.com.stats.stats}
        cont={data.data.about.content}
      />
      <Proposition vprop={data.data.page.homeFields.proposition} />
      <Testimonials
        tests={data.data.tests.edges}
        headings={data.data.page.homeFields.testimonials}
      />
    </article>
  );
}
