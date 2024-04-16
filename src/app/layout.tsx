import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from './Navbar';
import Footer from './Footer';
import Header from '../components/Header';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Overhear: Transforming spaces, connecting souls",
  description: "Overhear utilises cutting-edge technology to create immersive soundscapes tailored to your location.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
