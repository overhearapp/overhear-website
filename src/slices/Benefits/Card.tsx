import React from 'react'
import { BsFillBalloonHeartFill } from "react-icons/bs";

import { GiHorizonRoad } from "react-icons/gi";
import { FaEarthAfrica } from "react-icons/fa6";
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import { CardProps } from './CardProps';

const Card = ({ item }: CardProps) => {

    const icon = {
        'first': (<FaEarthAfrica />),
        'second': (<BsFillBalloonHeartFill />),
        'third': (<GiHorizonRoad />),
    }

    // Determine the icon based on item.card_icon or provide a default icon for invalid/null values
    const cardIcon = item.card_icon && icon[item.card_icon];

    if (!cardIcon) {
        console.log('select a card icon from dropdown!')
        // Handle case where cardIcon is undefined or null (invalid card_icon value)
        return null; // Or render a default icon or placeholder
    }

    return (


        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  ">

            <PrismicNextImage
                className="rounded-t-lg h-[380px] object-fit "
                field={item.card_image} />


            <div className="p-5">

                <div className="flex items-center  space-x-4">
                    <div className="bg-gray-200 text-dark text-xl p-4 rounded-full ">
                        {cardIcon}
                    </div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary ">
                        <PrismicRichText field={item.card_title} /> </h5>
                </div>

                <div className="mb-3 font-normal text-primary">
                    <PrismicRichText field={item.card_content} />
                </div>

            </div>
        </div>

    )
}

export default Card