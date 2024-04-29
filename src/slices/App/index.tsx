import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Heroslice from '../../components/Heroslice';

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
      <Heroslice showImg={false} slice={slice} />

    </section>
  );
};

export default App;
