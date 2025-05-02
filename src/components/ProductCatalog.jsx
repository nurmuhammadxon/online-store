import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ProductCard } from './index'

// icons
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

// swiper js
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

function ProductCatalog({ data, title, link }) {
    const navigate = useNavigate()

    return (
        <div className='p-3 sm:p-5'>
            <div onClick={() => navigate(link)}>
                <h2 className='flex items-center gap-2 text-2xl md:text-3xl font-bold cursor-pointer'>
                    {title}
                    <MdOutlineKeyboardArrowRight className='translate-y-1' />
                </h2>
            </div>
            <div className='mt-4'>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={5}
                    navigation
                    breakpoints={{
                        1200: {
                            slidesPerView: 5,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        480: {
                            slidesPerView: 2,
                        },
                        320: {
                            slidesPerView: 2,
                        }
                    }}
                >
                    {
                        data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <ProductCard data={item} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default ProductCatalog
