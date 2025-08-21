import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `ContentSection`.
 */
export type ContentSectionProps = SliceComponentProps<Content.ContentSectionSlice>;

/**
 * Component for "ContentSection" Slices.
 */
const ContentSection = ({ slice }: ContentSectionProps): JSX.Element => {
  const imagePosition = slice.primary.image_position || 'right';
  const textAlign = slice.primary.text_align || 'center';
  const backgroundColor = slice.primary.background_color || 'transparent';
  const textColor = slice.primary.text_color || 'white';

  const isVerticalLayout = imagePosition === 'top' || imagePosition === 'bottom';
  const isImageFirst = imagePosition === 'left' || imagePosition === 'top';

  const TextContent = (
    <div className={`text-${textAlign} text-${textColor}`}>
      {slice.primary.title && (
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          {slice.primary.title}
        </h2>
      )}
      
      {slice.primary.subtitle && (
        <h3 className="text-xl md:text-2xl mb-6 opacity-90 text-white">
          {slice.primary.subtitle}
        </h3>
      )}
      
      {slice.primary.description && (
        <div className="mb-8 text-lg leading-relaxed opacity-90 text-white">
          {slice.primary.description}
        </div>
      )}
    </div>
  );

  const ImageContent = slice.primary.image ? (
    <div className="flex justify-center items-center">
      <PrismicNextImage 
        field={slice.primary.image}
        className={`w-full max-w-2xl h-auto rounded-lg shadow-lg ${
          isVerticalLayout ? 'max-w-2xl' : 'w-full'
        }`}
        alt=""
      />
    </div>
  ) : null;

  return (
    <section 
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`py-20 ${backgroundColor !== 'transparent' ? `bg-${backgroundColor}` : ''}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {!slice.primary.image ? (
            <div className="col-span-full">
              {TextContent}
            </div>
          ) : isVerticalLayout ? (
            <>
              <div className={`col-span-full ${isImageFirst ? 'order-1' : 'order-2'}`}>
                {ImageContent}
              </div>
              <div className={`col-span-full ${isImageFirst ? 'order-2' : 'order-1'}`}>
                {TextContent}
              </div>
            </>
          ) : (
            <>
              <div className={`${isImageFirst ? 'order-1' : 'order-2'}`}>
                {ImageContent}
              </div>
              <div className={`flex items-center ${isImageFirst ? 'order-2 pl-8' : 'order-1 pr-8'}`}>
                {TextContent}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
