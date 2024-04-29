import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `App`.
 */
export type AppProps = SliceComponentProps<Content.AppSlice>;

/**
 * Component for "App" Slices.
 */
const App = ({ slice }: AppProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for app (variation: {slice.variation}) Slices
    </section>
  );
};

export default App;
