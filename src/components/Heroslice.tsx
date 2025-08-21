import React from 'react'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'

const Heroslice = ({ slice, showImg = true }: any) => {
  return (
    <div className="relative px-6 lg:px-8 bg-overhear-blue min-h-screen flex flex-col justify-center">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:flex lg:flex-col lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl py-8 sm:py-32 lg:py-12">
          {/* Hero text */}
          <div className="text-center">
            {/* Logo */}
            {slice.primary.logo_image && (
              <div className="mb-5">
                <PrismicNextImage 
                  field={slice.primary.logo_image}
                  className="mx-auto h-auto max-h-[400px] w-auto object-contain"
                  alt=""
                />
              </div>
            )}
            
            {/* Main heading */}
            <h1 className="font-normal tracking-wider text-white mb-6 font-sifonn" style={{ fontSize: '6rem' }}>
              OVERHEAR
            </h1>



            {/* App store badges */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {slice.primary.google_app && (
                <PrismicNextLink field={slice.primary.google_app}>
                  <PrismicNextImage 
                    field={slice.primary.google_store} 
                    width={202} 
                    height={60}
                    alt=""
                  />
                </PrismicNextLink>
              )}
              {slice.primary.apple_app && (
                <PrismicNextLink field={slice.primary.apple_app}>
                  <PrismicNextImage 
                    field={slice.primary.apple_store} 
                    width={180} 
                    height={60}
                    alt=""
                  />
                </PrismicNextLink>
              )}
            </div>


          </div>
        </div>
        
        {/* Phone screenshot */}
        {showImg && slice.primary.heroimg && (
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <PrismicNextImage 
              className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
              field={slice.primary.heroimg} 
              width={726} 
              height={923}
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Heroslice
