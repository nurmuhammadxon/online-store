import React, { useState } from 'react';
import { ProductCard } from './index';
import { Products } from '../util/Constants';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function ProductsBox() {
    const [more, setMore] = useState(10);
    const navigate = useNavigate();
    const productsList = Products.slice(0, more);

    return (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <div
                className="flex items-center justify-between cursor-pointer mb-6"
                onClick={() => navigate('/')}
            >
                <h2 className="flex items-center gap-2 text-2xl sm:text-3xl font-semibold text-gray-800 hover:text-primary transition-colors duration-200">
                    Hammasi
                    <MdOutlineKeyboardArrowRight className="text-3xl sm:text-4xl" />
                </h2>
            </div>

            {/* Products grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {productsList.map(item => (
                    <ProductCard key={item.id} data={item} />
                ))}
            </div>

            {/* Load more button */}
            <div className="flex justify-center mt-8">
                <button
                    className="inline-block bg-primary hover:bg-primaryDark text-white font-semibold text-base sm:text-lg px-6 py-2.5 rounded-md transition duration-200"
                    onClick={() => setMore(prev => prev + 10)}
                >
                    Hammasini ko'rish
                </button>
            </div>
        </section>
    );
}

export default ProductsBox;
