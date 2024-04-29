import { Content, FilledLinkToMediaField } from "@prismicio/client";
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

  return (
    <div className="overflow-hidden bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <a href="#" className="inline-flex space-x-6">
                  <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-indigo-600/10">
                    How it works
                  </span>

                </a>
              </div>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {slice.primary.title}
              </p>

              <h2 className="mt-6 text-lg leading-8 text-white">
                <PrismicRichText field={slice.primary.content}
                />
              </h2>

              <div className="mt-10 flex items-center gap-x-6">

                <a href="#" className="text-base font-semibold leading-7 text-white">
                  {slice.primary.link_label} <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-blue-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pl-16 sm:pr-0 lg:mx-0 lg:max-w-none">
              <div
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-blue-100 opacity-20 ring-1 ring-inset ring-white"
                aria-hidden="true"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">

                <video
                  width={580}
                  preload='none'
                  height={300}
                  controls
                  className="w-[57rem] rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                  src={video.url}  >


                </video>
              </div>
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;


