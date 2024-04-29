import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Grid from './Grid';
/**
 * Props for `AlternateGrid`.
 */
export type AlternateGridProps =
  SliceComponentProps<Content.AlternateGridSlice>;

/**
 * Component for "AlternateGrid" Slices.
 */
const AlternateGrid = ({ slice }: AlternateGridProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Grid slice={slice} index={0} slices={[]} context={undefined} />
    </section>
  );
};

export default AlternateGrid;
