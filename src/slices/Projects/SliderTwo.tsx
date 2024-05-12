"use client";

import Slider from 'react-slick';

import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrismicNextImage } from '@prismicio/next';

const SliderTwo = ({ items }: any) => {

    // const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    // const isSmallScreen = useMediaQuery({ maxWidth: 767 });

    const settings = {
        arrows: false,
        infinite: true,

        slidesToShow: 1,
        slidesToScroll: 1,
        // pauseOnHover:true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 1000,
        className: "w-full mx-auto center-mode",
    };

    // if (isMediumScreen) {
    //     settings.slidesToShow = 1.67;
    // } else if (isSmallScreen) {
    //     settings.slidesToShow = 1;
    // }

    return (
        <div className='slider-container'>
            <Slider {...settings}>

                {
                    items.map((item: any, index: number) => {

                        return (

                            <div key={index} className="relative  h-[800px]">


                                <PrismicNextImage field={item.image}
                                    loading='lazy'
                                    fill
                                    height={700}
                                    className="object-contain rounded-lg "
                                />

                            </div>

                        )
                    })
                }
            </Slider>
        </div>
    );
};

export default SliderTwo;