import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { defaultDataBanner } from '../util/Constants'

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Banner() {
    const [banners, setBanners] = useState([])

    useEffect(() => {
        const fetchDataGet = async () => {
            try {
                const res = await axios.get(`https://165.232.87.222/api/Banners/GetAll`);
                const data = res.data

                if (Array.isArray(data) && data.length === 0) {
                    setBanners(defaultDataBanner)
                } else {
                    setBanners(data);
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchDataGet()
    }, []);

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
                            src={`https://165.232.87.222/${item.images.split(';')[0]}`}
                            alt={`Banner ${index}`}
                            className="w-full h-80 object-cover transition-transform duration-500 ease-in-out rounded-md"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Banner;
