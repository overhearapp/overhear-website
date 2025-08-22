import { Metadata } from "next";
import BuilderHomePage from "@/components/BuilderHomePage";

export default async function Page() {
  return <BuilderHomePage />;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "OVERHEAR - Discover Hidden Stories Through Sound",
    description: "Explore Meaningful Soundscapes",
  };
}
