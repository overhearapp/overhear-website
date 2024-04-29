
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";


export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

export function Reviews({ slice }: TestimonialsProps): JSX.Element {

    const reviews = slice.items.map((item: any, index: number) => {
        const [text] = item.testimonial

        return {
            name: item.name,
            testimonial: text?.text,
            avatar: item.avatar.url
        }
    })

    return (
        <div className="h-[54rem] rounded-md flex flex-col antialiased bg-primary  bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <div className="mt-24 sm:mt-32 lg:mt-16">
                <a href="#" className="inline-flex space-x-6">
                    <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-indigo-600/10">
                        {slice.primary.eyebrow_text}
                    </span>

                </a>
            </div>
            <div className="text-center my-4 space-y-2">
                <h2 className="text-4xl font-bold text-white">{slice.primary.title}</h2>
                <p className="text-white text-lg">{slice.primary.subtitle}</p>
            </div>
            <InfiniteMovingCards
                items={reviews}
                direction="right"
                speed="slow"
            />
            <InfiniteMovingCards
                items={reviews}
                direction="left"
                speed="slow"
            />
        </div>
    );
}

