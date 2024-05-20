import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BlogContent`.
 */
export type BlogContentProps = SliceComponentProps<Content.BlogContentSlice>;

/**
 * Component for "BlogContent" Slices.
 */
const BlogContent = ({ slice }: BlogContentProps): JSX.Element => {
  return (
    <div
      className='max-w-prose mx-auto text-center'
    >
      <PrismicRichText field={slice.primary.blog_content} />
    </div>
  );
};

export default BlogContent;
