"use client";

import Slider from 'react-slick';

import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrismicNextImage } from '@prismicio/next';

const SliderOne = ({ items }: any) => {

    const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isSmallScreen = useMediaQuery({ maxWidth: 767 });

    const settings = {
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        // pauseOnHover:true,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 1000,
        className: "w-full mx-auto cursor-pointer center-mode",
    };

    if (isMediumScreen) {
        settings.slidesToShow = 1.67;
    } else if (isSmallScreen) {
        settings.slidesToShow = 1;
    }

    return (
        <div>
            <Slider {...settings}>

                {
                    items.map((item: any, index: number) => {

                        return (

                            <div key={index} className="rounded-md px-2 md:p-10">


                                <PrismicNextImage field={item.image}
                                    priority
                                    width={500}
                                    height={1000}
                                    className="rounded-2xl"
                                />

                            </div>

                        )
                    })
                }
            </Slider>
        </div>
    );
};

export default SliderOne;