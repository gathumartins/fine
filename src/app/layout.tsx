import type { Metadata } from "next";
import "./globals.css";
import { Rajdhani } from "next/font/google";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const raj = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Finework Kenya Limited",
  description:
    "Leaders in Mechanical engineering, fire system installations and other related",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raj.className}>
        <div className="relative text-black">
          <Header />
          <Navbar />
          <main className="h-lvh">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
