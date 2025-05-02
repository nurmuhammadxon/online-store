import React from 'react';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { banners } from '../util/Constants';

function Banner() {
    return (
        <div className="relative w-full overflow-hidden rounded-lg">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation
                pagination={{ clickable: true }}
            >
                {banners.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className="flex items-center justify-center"
                    >
                        <img
                            src={item.img}
                            alt={`Banner ${index}`}
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Banner;
