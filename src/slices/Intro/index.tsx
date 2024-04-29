import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import IntroGrid from '../../components/IntroGrid';

/**
 * Props for `Intro`.
 */
export type IntroProps = SliceComponentProps<Content.IntroSlice>;

/**
 * Component for "Intro" Slices.
 */
const Intro = ({ slice }: IntroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <IntroGrid slice={slice} index={0} slices={[]} context={undefined} />

    </section>
  );
};

export default Intro;
