import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Card from './Card';
import { CardProps } from './CardProps';


/**
 * Props for `Benefits`.
 */

export type BenefitsProps = SliceComponentProps<Content.BenefitsSlice>;

/**
 * Component for "Benefits" Slices.
 */
const Benefits = ({ slice }: BenefitsProps): JSX.Element => {
  return (
    <div className="rounded-md flex flex-col antialiased bg-primary  bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="mt-24 sm:mt-32 lg:mt-16">
        <a href="#" className="inline-flex space-x-6">
          <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-indigo-600/10">
            {slice.primary.eyebrow_text}
          </span>

        </a>
      </div>
      <div className="text-center my-4 space-y-2">
        <h2 className="text-4xl font-bold text-white">{slice.primary.title}</h2>
        <div className="text-white text-lg">
          <PrismicRichText field={slice.primary.subtitle} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 py-8
      items-stretch gap-8">
        {slice.items.map((item: any, index: number) => {
          return (
            <Card key={index}
              item={item} />
          )
        })}

      </div>

    </div>
  );
};

export default Benefits;
