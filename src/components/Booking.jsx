"use client";

import { InlineWidget } from "react-calendly";


const Booking = ({ slice }) => {
    return (
        <>
            <div className="flex flex-col   w-full py-5  h-screen bg-primary  bg-grid-white/[0.02]">

                <div className="text-4xl pb-5 md:text-6xl text-center 
        bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-bold">
                    {slice.primary.page_title}
                </div>

                <InlineWidget url={slice.primary.widget_link.url} />
            </div>
        </>
    );
};

export default Booking;