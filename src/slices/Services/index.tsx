import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Services`.
 */
export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

/**
 * Component for "Services" Slices.
 */
const Services = ({ slice }: ServicesProps): JSX.Element => {
  return (
    <section 
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-transparent py-20 text-center"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {slice.primary.title || "Services"}
        </h2>
        
        {/* Subtitle */}
        {slice.primary.subtitle && (
          <div className="text-white opacity-90 max-w-4xl mx-auto mb-16 text-lg leading-relaxed">
            {slice.primary.subtitle}
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {slice.items.map((item: any, index: number) => (
            <div 
              key={index} 
              className="text-center p-10 text-white transition-transform duration-200 hover:-translate-y-1"
            >
              {/* Service Icon/Image */}
              <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center gap-2">
                {item.service_image ? (
                  item.service_secondary_image ? (
                    // Display two images side by side
                    <>
                      <PrismicNextImage 
                        field={item.service_image}
                        className="w-1/2 h-full object-contain brightness-110"
                        alt=""
                      />
                      <PrismicNextImage 
                        field={item.service_secondary_image}
                        className="w-1/2 h-full object-contain brightness-110"
                        alt=""
                      />
                    </>
                  ) : (
                    // Display single image
                    <PrismicNextImage 
                      field={item.service_image}
                      className="w-full h-full object-contain brightness-110"
                      alt=""
                    />
                  )
                ) : (
                  <span className="text-5xl">{item.service_icon || "🔧"}</span>
                )}
              </div>
              
              {/* Service Title */}
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                {item.service_title}
              </h3>
              
              {/* Service Description */}
              <p className="text-white opacity-90 leading-relaxed max-w-xs mx-auto">
                {item.service_description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
