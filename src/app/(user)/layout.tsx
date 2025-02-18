import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const query = `{
  layout:layout(id: "cG9zdDo3MQ==", idType: ID) {
    id
    title
    headerFooter {
      header {
        phone
        time
        email
        logo {
          node {
            altText
            mediaDetails {
              height
              width
            }
            mediaItemUrl
          }
        }
        whitelogo {
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
      footer {
        purpose
        socials {
          social {
            label
            link
          }
        }
        copyright
        contacts {
          email {
            address
          }
          phone {
            number
          }
          location
        }
      }
      newsletter {
        title
        subtitle
      }
    }
  }
  quick:menu(id: "dGVybToz") {
    menuItems {
      edges {
        node {
          id
          label
          uri
        }
      }
    }
    name
  }
  clients:clients {
    edges {
      node {
        id
        featuredImage {
          node {
            mediaDetails {
              height
              width
            }
            mediaItemUrl
            altText
          }
        }
      }
    }
  }
}`;
  const res = await fetch(
    `${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`,
    {
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 60 },
    }
  );
  const data = await res.json();
  // console.log(data.data.clients.edges[0].node)
  return (
    <>
      <Header />
      <Navbar />
      <main className="min-h-lvh">{children}</main>
      <Footer
        footer={data.data.layout.headerFooter.footer}
        news={data.data.layout.headerFooter.newsletter}
        quick={data.data.quick.menuItems.edges}
        clients={data.data.clients.edges}
      />
    </>
  );
}
