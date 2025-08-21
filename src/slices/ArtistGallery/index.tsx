import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ArtistGallery from "@/components/ArtistGallery";

/**
 * Props for `ArtistGallery`.
 */
export type ArtistGalleryProps = SliceComponentProps<Content.ArtistGallerySlice>;

/**
 * Component for "ArtistGallery" Slices.
 */
const ArtistGallerySlice = ({ slice }: ArtistGalleryProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ArtistGallery
        title={slice.primary.title}
        subtitle={slice.primary.subtitle}
        backgroundColor={slice.primary.background_color}
      />
    </section>
  );
};

export default ArtistGallerySlice;
