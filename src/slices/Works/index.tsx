import { Content, FilledLinkToMediaField } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from '@prismicio/react'


/**
 * Props for `Works`.
 */
export type WorksProps = SliceComponentProps<Content.WorksSlice>;

/**
 * Component for "Works" Slices.
 */
const Works = ({ slice }: WorksProps): JSX.Element => {
  const video = slice.primary.video as FilledLinkToMediaField;
  const { video_left, preview_image, show_links, app_cta, eyebrow, heading, content, google_app, google_store,
    apple_app, apple_store, cta_label, cta_link
  } = slice.primary

  return (
    <div className="relative bg-primary py-16 sm:py-24">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        <div className={`${video_left ? '' : 'order-last'} relative sm:py-16 lg:py-0`}>

          <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
            {/* video card*/}

            <video
              className="rounded-2xl h-full w-full object-cover"
              width={550}
              height={1000}
              controls
              poster={preview_image.url || '/'}

            >
              <source src={video.url} type='video/mp4' />
              Your browser does not support the video tag
            </video>






          </div>
        </div>

        <div className=" relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <p className="inline-block mb-4 rounded-full bg-white px-3 py-1 text-sm font-semibold leading-6 text-primary  ring-1 ring-inset ring-indigo-600/10">
              {eyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <PrismicRichText field={heading} />
            </h2>
            <div className="mt-6 space-y-6 text-gray-300 text-base leading-7">
              <PrismicRichText field={content} />
            </div>

            {/* CTA section */}
            {!show_links ? '' :
              app_cta ? (<div className="mt-10 flex items-center justify-start gap-x-6">
                <PrismicNextLink field={google_app as any}
                >
                  <PrismicNextImage field={google_store as any} width={202} height={60} />
                </PrismicNextLink>
                <PrismicNextLink field={apple_app as any}
                >
                  <PrismicNextImage field={apple_store as any} width={180} height={60} />
                </PrismicNextLink>

              </div>) : (
                <div className="mt-10">
                  <PrismicNextLink field={cta_link} className="text-base font-medium text-white">
                    {cta_label}
                    <span aria-hidden="true"> &rarr;</span>
                  </PrismicNextLink>
                </div>
              )
            }



          </div>
        </div>
      </div>
    </div >
  );
};

export default Works;


