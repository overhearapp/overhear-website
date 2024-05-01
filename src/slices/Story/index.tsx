import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Story`.
 */
export type StoryProps = SliceComponentProps<Content.StorySlice>;

/**
 * Component for "Story" Slices.
 */



const Story = ({ slice }: StoryProps): JSX.Element => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className=' bg-accent  py-24 sm:py-32'
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* heading */}
        <div className="text-center mx-auto space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">

          <p className="inline-block mb-2 rounded-full bg-white
 px-3 py-1 text-sm font-semibold leading-6 text-primary  ring-1 ring-inset ring-indigo-600/10">
            {slice.primary.eyebrow_text}
          </p>
          <div className=" text-centre text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {slice.primary.heading}
          </div>
          <div className="text-center text-xl text-gray-300">
            <PrismicRichText field={slice.primary.subtext} />
          </div>
        </div>
        {/* timeline */}

        <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-2">
            <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">

              <div className="w-full max-w-3xl mx-auto">

                {/* <!-- Vertical Timeline #1 --> */}
                <div className="-my-6">

                  {
                    slice.items.map((item: any, index: number) => {
                      return <TimelineItem key={item.date} item={item} />

                    })
                  }
                </div>
                {/* <!-- End: Vertical Timeline #1 --> */}


              </div>

            </div>
          </div>
        </div>

      </div>


    </section>
  );
};

const TimelineItem = ({ item }: any) => {
  return (

    < div className="relative pl-8 sm:pl-32 py-6 group" >

      <div className="font-caveat font-medium text-2xl text-white mb-1 sm:mb-0" > {item.milestone}</div >
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5" >
        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">{item.date}</time>
        <div className="text-xl font-bold text-primary">{item.title}</div>
      </div>
      {/* <!-- Content --> */}
      <div className="text-gray-200" >
        <PrismicRichText field={item.summary} />
      </div>
    </div >

  )
}


export default Story;
