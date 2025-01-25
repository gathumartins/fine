import type { Metadata } from "next";
import "./globals.css";
import { Rajdhani } from "next/font/google";
import { Providers } from "@/lib/providers";

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
            <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
