import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductCard } from '../components';
import { fetchData } from '../util/fetchdata';
// swiper
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper stilini import qilish
import 'swiper/css';
import 'swiper/css/navigation';

function ProductCategories({ category }) {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData(
            'Products/GetAllProducts?sort=false',
            'products',
            setProducts,
        );
    }, []);

    const filteredProducts = products.filter(p => p.categoryId === category.id);

    return (
        <div className={`${filteredProducts.length === 0 ? 'hidden' : 'block'} py-4`}>
            <div className="flex justify-between items-center mb-4">
                <h2
                    className="text-xl font-bold capitalize cursor-pointer"
                    onClick={() => navigate(`/category/${category.categoryName}`)}
                >
                    {category.categoryName}
                </h2>
            </div>
            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={4}
                navigation
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                {filteredProducts.map(product => (
                    <SwiperSlide
                        key={product.id}
                    >
                        <ProductCard data={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ProductCategories;
