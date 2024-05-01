import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
/**
 * Props for `User`.
 */
export type UserProps = SliceComponentProps<Content.UserSlice>;

/**
 * Component for "User" Slices.
 */
const User = ({ slice }: UserProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="relative bg-white p-16 sm:p-24">
        <div className=" border relative  bg-white lg:rounded-l-lg lg:rounded-lg">
          <div className="relative px-6 pt-12 pb-16 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className="lg:col-end-2 lg:py-32">
              <div className="mx-auto max-w-prose text-base lg:mr-auto lg:ml-0 lg:max-w-lg">

                <svg aria-hidden="true" width={105} height={78} >
                  <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                </svg>
                <div className="mt-8 text-base font-bold text-gray-700">
                  <PrismicRichText field={slice.primary.testimonial} />
                </div>

                <h4 className="mt-4 text-md font-medium text-gray-600">
                  -{slice.primary.name}
                </h4>

              </div>
            </div>
          </div>
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 h-1200 lg:w-1/2">
              <PrismicNextImage
                className=" h-full w-full object-cover lg:absolute "
                field={slice.primary.user_image}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default User;
