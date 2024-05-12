import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Booking from '@/components/Booking';



/**
 * Props for `Calendly`.
 */
export type CalendlyProps = SliceComponentProps<Content.CalendlySlice>;

/**
 * Component for "Calendly" Slices.
 */
const Calendly = ({ slice }: CalendlyProps): JSX.Element => {
  console.log('slice', slice)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Booking slice={slice} />
    </section>
  );
};

export default Calendly;
