"use client"

import React from 'react';
import Slider from 'react-slick';

export const ImageSlider = () => {

    const settings = {
        dots: true,
        infinite: false,
        navs: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <div>
                        <img src="https://picsum.photos/200/300" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src="https://picsum.photos/200/300" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src="https://picsum.photos/200/300" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src="https://picsum.photos/200/300" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src="https://picsum.photos/200/300" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src="https://picsum.photos/200/300" />
                    </div>
                </div>
            </Slider>
        </div>
    );
}
