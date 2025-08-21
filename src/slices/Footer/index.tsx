import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Footer`.
 */
export type FooterProps = SliceComponentProps<Content.FooterSlice>;

/**
 * Component for "Footer" Slices.
 */
const Footer = ({ slice }: FooterProps): JSX.Element => {
  // Group items by section title
  const sections = slice.items.reduce((acc: any[], item: any) => {
    const existingSection = acc.find(section => section.title === item.section_title);
    if (existingSection) {
      existingSection.links.push({ text: item.link_text, link: item.link });
    } else {
      acc.push({
        title: item.section_title,
        links: [{ text: item.link_text, link: item.link }]
      });
    }
    return acc;
  }, []);

  return (
    <section 
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-transparent py-10 text-center border-t border-white/10 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {sections.map((section: any, index: number) => (
            <div key={index} className="text-center">
              <h6 className="text-lg font-bold mb-4 text-white">
                {section.title}
              </h6>
              
              <div className="space-y-2">
                {section.links.map((link: any, linkIndex: number) => (
                  <PrismicNextLink 
                    key={linkIndex}
                    field={link.link}
                    className="block text-sm text-white/80 hover:text-white transition-opacity duration-200"
                  >
                    {link.text}
                  </PrismicNextLink>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="text-sm text-white/70">
            {slice.primary.copyright_text ? (
              <p>{slice.primary.copyright_text}</p>
            ) : (
              <p>© {new Date().getFullYear()} Overhear Ltd. All rights reserved.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
