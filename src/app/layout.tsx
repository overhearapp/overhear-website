import type { Metadata, ResolvingMetadata } from 'next'

import { Inter, Caveat } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import { createClient, repositoryName } from '@/prismicio';
import { PrismicPreview } from '@prismicio/next'
import Footer from './Footer';
import Header from '../components/Header';

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-caveat',
})

const sifonn = localFont({
  src: '../fonts/SIFONN_BASIC_OUTLINE.otf',
  variable: '--font-sifonn',
  display: 'swap',
})

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(): Promise<Metadata> {
  const client = await createClient();
  const settings = await client.getSingle('settings')

  return {
    title: settings.data.site_title || "Overhear",
    description: settings.data.meta_description || "Discover Hidden Stories Through Sound",
    openGraph: {
      images: [settings.data.og_image?.url || ''],
    },
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={`${inter.variable} ${caveat.variable} ${sifonn.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
