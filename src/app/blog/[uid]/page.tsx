import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { DateField, isFilled } from '@prismicio/client'

import Bounded from '@/components/Bounded';

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
    const client = createClient();
    const page = await client
        .getByUID("blog_post", params.uid)
        .catch(() => notFound());

    function formatDate(date: DateField) {

        if (isFilled.date(date)) {
            const dateOptions: Intl.DateTimeFormatOptions = {

                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }

            return new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(date))
        }
    }

    const formattedDate = formatDate(page.data.date);
    return (
        <Bounded as='article'>
            <div className=" text-center rounded-2xl border-2 border-accent bg-primary px-4 py-10 md:px-10 md:py-20">
                <p className="inline-block mb-2 rounded-full bg-white
               px-3 py-1 text-sm font-semibold leading-6 text-primary  ring-1 ring-inset ring-indigo-600/10">
                    Blog Post
                </p>
                <h1>
                    <span className="block text-center text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl md:text-6xl">
                        {page.data.title}
                    </span>
                </h1>
                <p className='font-medium mt-2'>{formattedDate}</p>
                <div className="flex gap-4 justify-center my-4 text-white text-lg font-bold">
                    {page.tags.map((tag, index) => (
                        <span className=' text-sm text-accent' key={index}>{tag}</span>
                    ))}
                </div>


                <div className="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20">
                    <SliceZone slices={page.data.slices} components={components} />
                </div>

            </div>



        </Bounded>
    );
}

export async function generateMetadata({
    params,
}: {
    params: Params;
}): Promise<Metadata> {
    const client = createClient();
    const page = await client
        .getByUID("blog_post", params.uid)
        .catch(() => notFound());

    return {
        title: page.data.meta_title,
        description: page.data.meta_description,
    };
}

export async function generateStaticParams() {
    const client = createClient();
    const pages = await client.getAllByType("blog_post");

    return pages.map((page) => {
        return { uid: page.uid };
    });
}
