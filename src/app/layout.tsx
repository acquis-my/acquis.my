import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Navbar from "~/components/Navbar";

const sans = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Acquis",
  description: "Bespoke software development for the small business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
