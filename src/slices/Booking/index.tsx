import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import { FiPhoneOutgoing } from "react-icons/fi";
import SliderOne from '../../components/SliderOne';
import { PrismicNextLink } from '@prismicio/next';
/**
 * Props for `Booking`.
 */
export type BookingProps = SliceComponentProps<Content.BookingSlice>;

/**
 * Component for "Booking" Slices.
 */
const Booking = ({ slice }: BookingProps): JSX.Element => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="bg-primary">
        <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <p className="inline-block mb-4 rounded-full bg-white px-3 py-1 text-sm font-semibold leading-6 text-primary  ring-1 ring-inset ring-indigo-600/10">
              {slice.primary.eyebrow_text}
            </p>
            <h1 className="mt-1 text-4xl font-bold tracking-loose text-white sm:text-5xl lg:text-6xl">

              <PrismicRichText field={slice.primary.heading} />
            </h1>
            <div className="mx-auto mt-5 max-w-xl text-xl text-gray-300">
              <PrismicRichText field={slice.primary.subtext} />
            </div>
            <PrismicNextLink field={slice.primary.booking_link}>
              <button
                type="button"
                className="my-8 inline-flex items-center rounded-md border border-transparent bg-dark px-6 py-4 text-sm font-medium leading-4 text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2"
              >
                Book Now
                <FiPhoneOutgoing className="-mr-0.5 ml-2 h-4 w-4" aria-hidden="true" />
              </button>
            </PrismicNextLink>
          </div>

          <SliderOne items={slice.items} />
        </div>
      </div>

    </section>
  );
};

export default Booking;
