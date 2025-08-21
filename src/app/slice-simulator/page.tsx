import {
  SliceSimulator,
  SliceSimulatorParams,
  getSlices,
} from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";

import { components } from "../../slices";

export default async function SliceSimulatorPage({
  searchParams,
}: SliceSimulatorParams) {
  const params = await searchParams;
  const slices = await getSlices(params.state);

  return (
    <SliceSimulator background='#244473'>
      <SliceZone slices={slices} components={components} />
    </SliceSimulator>
  );
}
