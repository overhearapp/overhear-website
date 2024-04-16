import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Heroslice from '@/components/Heroslice'
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heroslice slice={slice} />
    </section>
  );
};

export default Hero;
