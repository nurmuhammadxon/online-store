import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// icons
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

import { fetchData } from '../util/fetchdata'

function ProductCard() {
    const [isLike, setIsLike] = useState(false);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData(
            'Products/GetAllProducts?sort=false',
            'products',
            setProducts,
        );
    }, []);

    const truncateWords = (text, wordLimit) => {
        if (!text) return '';
        const words = text.split(' ');
        return words.length > wordLimit
            ? words.slice(0, wordLimit).join(' ') + '...'
            : text;
    };

    const handleLike = () => {
        setIsLike(!isLike);
    };

    const addToOrders = (productId) => {
        // console.log(`Product ${productId} added to orders.`);
    };

    return (
        <div className="flex flex-wrap gap-4">
            {products.length > 0 ? (
                products.map((data) => {
                    return (
                        <div
                            className="w-52 py-2.5 md:py-4 px-2.5 lg:px-6 cursor-pointer group flex flex-col justify-between hover:shadow-lg rounded-md transition-all duration-200"
                            key={data.id}
                        >
                            <div className="relative pt-3.5 group">
                                {/* image */}
                                <div onClick={() => navigate(`/products/${data.id}`)}>
                                    <img
                                        src={`https://techstationapi-epe0ggbffchncbbc.canadacentral-01.azurewebsites.net/${data.images.split(';')[0]}`}
                                        alt={`${data.productName} image`}
                                        className="mt-2.5 w-full h-auto group-hover:scale-105 transition-transform duration-200"
                                    />
                                </div>
                                {/* islike */}
                                <div className="absolute z-40 transition-all duration-200 opacity-100 top-3 right-3 md:opacity-0 md:group-hover:opacity-100">
                                    <span
                                        className="flex items-center justify-center text-xl text-red-600 transition-all duration-300 cursor-pointer hover:scale-110"
                                        onClick={handleLike}
                                    >
                                        {isLike ? <FaHeart color="red" /> : <FaRegHeart />}
                                    </span>
                                </div>
                            </div>
                            {/* product about */}
                            <div onClick={() => navigate(`/products/${data.id}`)}>
                                {/* star and comment */}
                                <h3 className="text-base text-black leading-5 sm:mt-2.5 transition-all duration-300 ease-in-out">
                                    {data.productName}
                                </h3>
                                <p className="font-normal text-sm text-gray-500 leading-5 sm:mt-2.5 transition-all duration-300 ease-in-out">
                                    {truncateWords(data.description, 10)}
                                </p>
                                <div className="flex items-end gap-2 w-full sm:mt-2.5">
                                    <p className="text-sm font-semibold md:text-lg">
                                        {parseFloat(data.price)}
                                    </p>
                                    <p className='text-xs md:text-base text-gray-500 font-medium'>so'm</p>
                                </div>
                            </div>

                            <button
                                className="py-2 px-5 ml-auto mt-2.5 flex items-center gap-2.5 border-2 border-primary rounded-[50px] text-strongBlue font-semibold text-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-200 cursor-pointer hover:scale-105"
                                onClick={() => addToOrders(data.id)}
                            >
                                <MdOutlineShoppingCart className='text-lg' />
                            </button>
                        </div>
                    )
                })
            ) : (
                <p>No products available.</p>
            )}
        </div>
    );
}

export default ProductCard;
