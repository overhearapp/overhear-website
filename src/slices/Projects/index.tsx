import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import SliderTwo from './SliderTwo';
import {
  TbCircleDashedNumber1,
  TbCircleDashedNumber2,
  TbCircleDashedNumber3,
  TbCircleDashedNumber4,
  TbCircleDashedNumber5,
  TbCircleDashedNumber6,
} from "react-icons/tb";


/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */


const Projects = ({ slice }: ProjectsProps): JSX.Element => {
  const projects = slice.items.map((item, index) => {
    const projectIcon = [
      TbCircleDashedNumber1,
      TbCircleDashedNumber2,
      TbCircleDashedNumber3,
      TbCircleDashedNumber4,
      TbCircleDashedNumber5,
      TbCircleDashedNumber6,
    ]
    return {

      name: item.project_title,
      description: item.project_description,
      icon: projectIcon[index],

    }
  })
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="bg-accent">
        <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <p className="inline-block mb-4 rounded-full bg-white px-3 py-1 text-sm font-semibold leading-6 text-primary  ring-1 ring-inset ring-indigo-600/10">
              {slice.primary.eyebrow_text}
            </p>
            <h1 className="mt-1 text-4xl font-bold tracking-loose text-white sm:text-5xl lg:text-6xl">

              <PrismicRichText field={slice.primary.title} />
            </h1>
            <div className="mx-auto my-5  max-w-xl text-xl text-white">
              <PrismicRichText field={slice.primary.subtext} />
            </div>

          </div>

          <SliderTwo items={slice.items} />
          <hr className='my-4' />

          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {projects.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="block font-semibold text-lg text-white">
                    <feature.icon className="absolute top-1 left-1 h-5 w-5 text-white" aria-hidden="true" />
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline text-dark font-medium ">
                    <PrismicRichText field={feature.description} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

    </section>
  );
};




export default Projects;
