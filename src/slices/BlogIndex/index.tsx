

import { PrismicNextImage } from '@prismicio/next';
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import Bounded from '@/components/Bounded'
import ContentList from './ContentList'

/**
 * Props for `BlogIndex`.
 */
export type BlogIndexProps = SliceComponentProps<Content.BlogIndexSlice>;

// /**
//  * Component for "BlogIndex" Slices.
//  */
const BlogIndex = async ({ slice }: BlogIndexProps): Promise<JSX.Element> => {
  const client = createClient();
  const blogPosts = await client.getAllByType('blog_post');
  console.log('blogs', blogPosts);
  return (
    <Bounded>
      <section className=" flex flex-col antialiased bg-primary  bg-grid-white/[0.05] items-center justify-center ">
        <div className="mt-12 ">
          <a href="#" className="inline-flex space-x-6">
            <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-indigo-600/10">
              {slice.primary.eyebrow}
            </span>
          </a>
        </div>
        <div className="text-center mt-4 mb-8 space-y-2">
          <div className="text-4xl font-bold text-white">
            {slice.primary.title}
          </div>
          <div className="text-white text-lg max-w-xl">
            <PrismicRichText field={slice.primary.subtext} />
          </div>
        </div>
      </section>
      <ContentList items={blogPosts} fallbackItemImage={slice.primary.fallback} />
    </Bounded>
  );
};

export default BlogIndex;
