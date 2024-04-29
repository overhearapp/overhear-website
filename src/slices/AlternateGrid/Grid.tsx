

import { Content, FilledLinkToWebField } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'



export type AlternateGridProps =
    SliceComponentProps<Content.AlternateGridSlice>;

export default function Grid({ slice }: AlternateGridProps) {
    const imgRight = slice.primary.ImageOnTheRight;


    const cta_link = slice.primary.cta_link as any
    return (
        <div className={`relative bg-primary py-16 sm:py-24`}>
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
                <div className={`${imgRight ? 'order-last' : ''} relative sm:py-16 lg:py-0`}>
                    <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">

                        <svg
                            className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                            width={404}
                            height={392}
                            fill="none"
                            viewBox="0 0 404 392"
                        >
                            <defs>
                                <pattern
                                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
                        </svg>
                    </div>
                    <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
                        {/* Testimonial card*/}
                        <div className="relative rounded-2xl pt-64 pb-10 shadow-xl">
                            <PrismicNextImage
                                className="absolute rounded-2xl inset-0 h-full w-full object-cover"
                                field={slice.primary.image}

                            />


                        </div>
                    </div>
                </div>

                <div className=" relative flex flex-col align-center mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
                    {/* Content area */}
                    <div className="pt-12 sm:pt-16 lg:pt-20">
                        <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold leading-6 text-primary mb-4 ring-1 ring-inset ring-indigo-600/10">
                            {slice.primary.eyebrow_text}
                        </span>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            {slice.primary.title}
                        </h2>
                        <div className="mt-6 space-y-6 text-lg text-gray-300">
                            <PrismicRichText field={slice.primary.content} />


                        </div>
                    </div>

                    {/* cta section */}
                    {slice.primary.cta && (<div className="mt-10">
                        <PrismicNextLink field={cta_link}
                            className="z-10 text-base font-medium 
                        text-white">
                            {slice.primary.cta_label}
                            <span aria-hidden="true"> &rarr;</span>
                        </PrismicNextLink>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}
