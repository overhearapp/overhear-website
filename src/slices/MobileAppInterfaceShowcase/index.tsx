import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `MobileAppInterfaceShowcase`.
 */
export type MobileAppInterfaceShowcaseProps =
  SliceComponentProps<Content.MobileAppInterfaceShowcaseSlice>;

/**
 * Component for "MobileAppInterfaceShowcase" Slices.
 */
const MobileAppInterfaceShowcase: FC<MobileAppInterfaceShowcaseProps> = ({
  slice,
}) => {
  const backgroundColor = slice.primary.background_color || "#f8fafc";
  const devices = slice.primary.devices || [];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16 lg:py-24 relative overflow-hidden"
      style={{ backgroundColor: backgroundColor + 'FF' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-row items-center justify-center relative">
          {devices.map((device: any, index: number) => (
            <div
              key={index}
              className={`relative group ${
                index === 0 
                  ? "-mr-8 sm:-mr-12 lg:-mr-16 z-10" 
                  : "z-20"
              }`}
            >
              {/* Phone Mockup */}
              <div className="relative group">
                {/* Screenshot */}
                {device.screenshot && (
                  <PrismicNextImage
                    field={device.screenshot}
                    className={`${
                      index === 0 
                        ? "w-32 h-[250px] sm:w-40 sm:h-[315px] lg:w-52 lg:h-[410px]" 
                        : "w-40 h-[315px] sm:w-48 sm:h-[375px] lg:w-64 lg:h-[500px]"
                    } object-contain transition-transform duration-300 group-hover:scale-105 opacity-100`}
                    alt=""
                  />
                )}
                

              </div>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
};

export default MobileAppInterfaceShowcase;
