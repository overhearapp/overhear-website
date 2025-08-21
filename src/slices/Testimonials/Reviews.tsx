
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

// Star Rating Component
const StarRating = () => (
  <div className="flex gap-1 mb-2 justify-center">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.6533 8.93578L15.1299 12.0108L16.1854 16.5889C16.2412 16.8282 16.2253 17.0787 16.1395 17.309C16.0538 17.5394 15.9021 17.7393 15.7033 17.8839C15.5046 18.0284 15.2676 18.1112 15.0221 18.1218C14.7766 18.1324 14.5334 18.0704 14.3229 17.9436L10.3299 15.5217L6.34552 17.9436C6.13503 18.0704 5.89182 18.1324 5.64629 18.1218C5.40075 18.1112 5.1638 18.0284 4.96505 17.8839C4.7663 17.7393 4.61458 17.5394 4.52884 17.309C4.44311 17.0787 4.42717 16.8282 4.48302 16.5889L5.53693 12.0155L2.01271 8.93578C1.82631 8.77502 1.69153 8.5628 1.62526 8.32574C1.55899 8.08868 1.56418 7.83733 1.64019 7.60321C1.7162 7.36909 1.85964 7.16262 2.05252 7.0097C2.24541 6.85678 2.47915 6.76421 2.72443 6.74359L7.36974 6.34125L9.18302 2.01625C9.27772 1.78931 9.43744 1.59546 9.64208 1.45911C9.84671 1.32276 10.0871 1.25 10.333 1.25C10.5789 1.25 10.8193 1.32276 11.024 1.45911C11.2286 1.59546 11.3883 1.78931 11.483 2.01625L13.3018 6.34125L17.9455 6.74359C18.1908 6.76421 18.4245 6.85678 18.6174 7.0097C18.8103 7.16262 18.9538 7.36909 19.0298 7.60321C19.1058 7.83733 19.111 8.08868 19.0447 8.32574C18.9784 8.5628 18.8436 8.77502 18.6572 8.93578H18.6533Z" fill="#FFD700"/>
      </svg>
    ))}
  </div>
);

// Quote Icon Component
const QuoteIcon = ({ className = "" }: { className?: string }) => (
  <div className={`text-2xl font-bold mb-2 text-center ${className}`}>
    "
  </div>
);

// Testimonial Card Component
const TestimonialCard = ({ item, index }: { item: any; index: number }) => {
  const [text] = item.testimonial || [{}];
  const headerType = item.header_type || "quotes";
  const backgroundType = item.background_type || "white";
  const hasBackgroundImage = backgroundType === "image" && item.background_image;
  
  // Get testimonial text
  const testimonialText = text?.text || item.testimonial || "";
  const characterCount = testimonialText.length;
  
  // Dynamic font size based on character count
  const getFontSize = (charCount: number) => {
    if (charCount <= 100) return "text-[12px]";
    if (charCount <= 150) return "text-[11px]";
    if (charCount <= 200) return "text-[10px]";
    if (charCount <= 250) return "text-[9px]";
    if (charCount <= 300) return "text-[8px]";
    return "text-[7px]";
  };
  
  const cardClasses = `
    relative p-2 sm:p-3 md:p-4 rounded-xl shadow-lg aspect-square flex flex-col
    ${hasBackgroundImage ? "bg-cover bg-center text-white" : "bg-white text-black"}
  `;

  const headerIcon = headerType === "stars" ? <StarRating /> : <QuoteIcon className={hasBackgroundImage ? "text-white" : "text-black"} />;

  return (
    <div 
      className={cardClasses}
      style={hasBackgroundImage ? { backgroundImage: `url(${item.background_image.url})` } : {}}
    >
      {hasBackgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80 rounded-xl"></div>
      )}
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex-shrink-0">
          {headerIcon}
        </div>
        
        <p className={`${getFontSize(characterCount)} leading-tight mb-2 flex-1 overflow-hidden text-center flex items-center justify-center`}>
          {testimonialText}
        </p>
        
        <div className="font-bold text-xs flex-shrink-0">
          {item.name}
        </div>
      </div>
    </div>
  );
};

export function Reviews({ slice }: TestimonialsProps): JSX.Element {
  return (
    <div className="py-16 bg-overhear-blue">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        {slice.primary.eyebrow_text && (
          <div className="text-center mb-8">
            <span className="inline-block bg-white text-overhear-blue px-4 py-2 rounded-full text-sm font-semibold">
              {slice.primary.eyebrow_text}
            </span>
          </div>
        )}
        
        {slice.primary.title && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{slice.primary.title}</h2>
            {slice.primary.subtitle && (
              <p className="text-white text-lg">{slice.primary.subtitle}</p>
            )}
          </div>
        )}

        {/* Testimonials Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {slice.items.map((item: any, index: number) => (
            <TestimonialCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

