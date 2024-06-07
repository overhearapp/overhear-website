import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'




const Heroslice = ({ slice, showImg = true }: any) => {


  return (

    <div className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-6 py-10   lg:flex lg:flex-col lg:items-center lg:gap-x-10 lg:px-8  ">
        <div className="mx-auto max-w-2xl py-8 sm:py-32  lg:py-12">


          {/* hero text */}
          <div className="text-center">
            <h1 className=" text-lg tracking-tight font-medium leading-loose text-white sm:text-6xl">
              {slice.primary.heading}&nbsp;
              <span className="text-lg sm:text-6xl p-2 sm:p-4 font-bold text-blue-600 bg-gray-200 rounded-full">{slice.primary.heading_secondary}</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-200">
              {slice.primary.subtext}
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center my-4">


              {
                slice.items.map((item: any, index: number) => {
                  return (

                    <div key={index} className="flex items-center justify-center flex-col space-x-2 text-center">
                      <svg width="105" height="20" viewBox="0 0 105 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.6533 8.93578L15.1299 12.0108L16.1854 16.5889C16.2412 16.8282 16.2253 17.0787 16.1395 17.309C16.0538 17.5394 15.9021 17.7393 15.7033 17.8839C15.5046 18.0284 15.2676 18.1112 15.0221 18.1218C14.7766 18.1324 14.5334 18.0704 14.3229 17.9436L10.3299 15.5217L6.34552 17.9436C6.13503 18.0704 5.89182 18.1324 5.64629 18.1218C5.40075 18.1112 5.1638 18.0284 4.96505 17.8839C4.7663 17.7393 4.61458 17.5394 4.52884 17.309C4.44311 17.0787 4.42717 16.8282 4.48302 16.5889L5.53693 12.0155L2.01271 8.93578C1.82631 8.77502 1.69153 8.5628 1.62526 8.32574C1.55899 8.08868 1.56418 7.83733 1.64019 7.60321C1.7162 7.36909 1.85964 7.16262 2.05252 7.0097C2.24541 6.85678 2.47915 6.76421 2.72443 6.74359L7.36974 6.34125L9.18302 2.01625C9.27772 1.78931 9.43744 1.59546 9.64208 1.45911C9.84671 1.32276 10.0871 1.25 10.333 1.25C10.5789 1.25 10.8193 1.32276 11.024 1.45911C11.2286 1.59546 11.3883 1.78931 11.483 2.01625L13.3018 6.34125L17.9455 6.74359C18.1908 6.76421 18.4245 6.85678 18.6174 7.0097C18.8103 7.16262 18.9538 7.36909 19.0298 7.60321C19.1058 7.83733 19.111 8.08868 19.0447 8.32574C18.9784 8.5628 18.8436 8.77502 18.6572 8.93578H18.6533Z" fill="#FFD700" />
                        <path d="M39.6533 8.93578L36.1299 12.0108L37.1854 16.5889C37.2412 16.8282 37.2253 17.0787 37.1395 17.309C37.0538 17.5394 36.9021 17.7393 36.7033 17.8839C36.5046 18.0284 36.2676 18.1112 36.0221 18.1218C35.7766 18.1324 35.5334 18.0704 35.3229 17.9436L31.3299 15.5217L27.3455 17.9436C27.135 18.0704 26.8918 18.1324 26.6463 18.1218C26.4008 18.1112 26.1638 18.0284 25.9651 17.8839C25.7663 17.7393 25.6146 17.5394 25.5288 17.309C25.4431 17.0787 25.4272 16.8282 25.483 16.5889L26.5369 12.0155L23.0127 8.93578C22.8263 8.77502 22.6915 8.5628 22.6253 8.32574C22.559 8.08868 22.5642 7.83733 22.6402 7.60321C22.7162 7.36909 22.8596 7.16262 23.0525 7.0097C23.2454 6.85678 23.4791 6.76421 23.7244 6.74359L28.3697 6.34125L30.183 2.01625C30.2777 1.78931 30.4374 1.59546 30.6421 1.45911C30.8467 1.32276 31.0871 1.25 31.333 1.25C31.5789 1.25 31.8193 1.32276 32.024 1.45911C32.2286 1.59546 32.3883 1.78931 32.483 2.01625L34.3018 6.34125L38.9455 6.74359C39.1908 6.76421 39.4245 6.85678 39.6174 7.0097C39.8103 7.16262 39.9538 7.36909 40.0298 7.60321C40.1058 7.83733 40.111 8.08868 40.0447 8.32574C39.9784 8.5628 39.8436 8.77502 39.6572 8.93578H39.6533Z" fill="#FFD700" />
                        <path d="M60.6533 8.93578L57.1299 12.0108L58.1854 16.5889C58.2412 16.8282 58.2253 17.0787 58.1395 17.309C58.0538 17.5394 57.9021 17.7393 57.7033 17.8839C57.5046 18.0284 57.2676 18.1112 57.0221 18.1218C56.7766 18.1324 56.5334 18.0704 56.3229 17.9436L52.3299 15.5217L48.3455 17.9436C48.135 18.0704 47.8918 18.1324 47.6463 18.1218C47.4008 18.1112 47.1638 18.0284 46.9651 17.8839C46.7663 17.7393 46.6146 17.5394 46.5288 17.309C46.4431 17.0787 46.4272 16.8282 46.483 16.5889L47.5369 12.0155L44.0127 8.93578C43.8263 8.77502 43.6915 8.5628 43.6253 8.32574C43.559 8.08868 43.5642 7.83733 43.6402 7.60321C43.7162 7.36909 43.8596 7.16262 44.0525 7.0097C44.2454 6.85678 44.4791 6.76421 44.7244 6.74359L49.3697 6.34125L51.183 2.01625C51.2777 1.78931 51.4374 1.59546 51.6421 1.45911C51.8467 1.32276 52.0871 1.25 52.333 1.25C52.5789 1.25 52.8193 1.32276 53.024 1.45911C53.2286 1.59546 53.3883 1.78931 53.483 2.01625L55.3018 6.34125L59.9455 6.74359C60.1908 6.76421 60.4245 6.85678 60.6174 7.0097C60.8103 7.16262 60.9538 7.36909 61.0298 7.60321C61.1058 7.83733 61.111 8.08868 61.0447 8.32574C60.9784 8.5628 60.8436 8.77502 60.6572 8.93578H60.6533Z" fill="#FFD700" />
                        <path d="M81.6533 8.93578L78.1299 12.0108L79.1854 16.5889C79.2412 16.8282 79.2253 17.0787 79.1395 17.309C79.0538 17.5394 78.9021 17.7393 78.7033 17.8839C78.5046 18.0284 78.2676 18.1112 78.0221 18.1218C77.7766 18.1324 77.5334 18.0704 77.3229 17.9436L73.3299 15.5217L69.3455 17.9436C69.135 18.0704 68.8918 18.1324 68.6463 18.1218C68.4008 18.1112 68.1638 18.0284 67.9651 17.8839C67.7663 17.7393 67.6146 17.5394 67.5288 17.309C67.4431 17.0787 67.4272 16.8282 67.483 16.5889L68.5369 12.0155L65.0127 8.93578C64.8263 8.77502 64.6915 8.5628 64.6253 8.32574C64.559 8.08868 64.5642 7.83733 64.6402 7.60321C64.7162 7.36909 64.8596 7.16262 65.0525 7.0097C65.2454 6.85678 65.4791 6.76421 65.7244 6.74359L70.3697 6.34125L72.183 2.01625C72.2777 1.78931 72.4374 1.59546 72.6421 1.45911C72.8467 1.32276 73.0871 1.25 73.333 1.25C73.5789 1.25 73.8193 1.32276 74.024 1.45911C74.2286 1.59546 74.3883 1.78931 74.483 2.01625L76.3018 6.34125L80.9455 6.74359C81.1908 6.76421 81.4245 6.85678 81.6174 7.0097C81.8103 7.16262 81.9538 7.36909 82.0298 7.60321C82.1058 7.83733 82.111 8.08868 82.0447 8.32574C81.9784 8.5628 81.8436 8.77502 81.6572 8.93578H81.6533Z" fill="#FFD700" />
                        <path d="M102.653 8.93578L99.1299 12.0108L100.185 16.5889C100.241 16.8282 100.225 17.0787 100.14 17.309C100.054 17.5394 99.9021 17.7393 99.7033 17.8839C99.5046 18.0284 99.2676 18.1112 99.0221 18.1218C98.7766 18.1324 98.5334 18.0704 98.3229 17.9436L94.3299 15.5217L90.3455 17.9436C90.135 18.0704 89.8918 18.1324 89.6463 18.1218C89.4008 18.1112 89.1638 18.0284 88.9651 17.8839C88.7663 17.7393 88.6146 17.5394 88.5288 17.309C88.4431 17.0787 88.4272 16.8282 88.483 16.5889L89.5369 12.0155L86.0127 8.93578C85.8263 8.77502 85.6915 8.5628 85.6253 8.32574C85.559 8.08868 85.5642 7.83733 85.6402 7.60321C85.7162 7.36909 85.8596 7.16262 86.0525 7.0097C86.2454 6.85678 86.4791 6.76421 86.7244 6.74359L91.3697 6.34125L93.183 2.01625C93.2777 1.78931 93.4374 1.59546 93.6421 1.45911C93.8467 1.32276 94.0871 1.25 94.333 1.25C94.5789 1.25 94.8193 1.32276 95.024 1.45911C95.2286 1.59546 95.3883 1.78931 95.483 2.01625L97.3018 6.34125L101.946 6.74359C102.191 6.76421 102.425 6.85678 102.617 7.0097C102.81 7.16262 102.954 7.36909 103.03 7.60321C103.106 7.83733 103.111 8.08868 103.045 8.32574C102.978 8.5628 102.844 8.77502 102.657 8.93578H102.653Z" fill="#FFD700" />
                      </svg>

                      <p className="text-white text-sm">&#34;{item.testimonial}&#34;</p>
                    </div>

                  )
                }
                )
              }

            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <PrismicNextLink field={slice.primary.google_app}
              >
                <PrismicNextImage field={slice.primary.google_store} width={202} height={60} />
              </PrismicNextLink>
              <PrismicNextLink field={slice.primary.apple_app}
              >
                <PrismicNextImage field={slice.primary.apple_store} width={180} height={60} />
              </PrismicNextLink>

            </div>
          </div>
        </div>
        {/* phone screenshot */}
        {!showImg && (<div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">

          <PrismicNextImage className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
            field={slice.primary.heroimg} width={726} height={923} />
        </div>)}
      </div>
    </div>


  )
}

export default Heroslice
