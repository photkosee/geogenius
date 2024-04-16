import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GeoGenius",
  description:
    "Explore the information, name, capital, and flag of each country with just a click on a world map! By Phot Koseekrainiramon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="A web application that allows you to explore the information, name, capital, and flag of each country with just a click on a world map."
        />
        <link rel="author" href="https://github.com/photkosee" />
        <meta name="author" content="Phot Koseekrainiramon" />
        <meta name="creator" content="Phot Koseekrainiramon" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
