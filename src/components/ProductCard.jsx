import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaPhoneAlt, FaRegHeart, FaHeart } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";

function ProductCard({ data }) {
    const [isLike, setIsLike] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const likedStatus = localStorage.getItem(`isLike_${data.id}`);
        if (likedStatus === 'true') {
            setIsLike(true);
        }
    }, [data.id]);

    const handleLike = () => {
        const newLikeStatus = !isLike;
        setIsLike(newLikeStatus);
        localStorage.setItem(`isLike_${data.id}`, newLikeStatus);
    };

    const addToCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(data);
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    return (
        <div
            className="w-full max-w-[250px] sm:max-w-[280px] md:max-w-[300px] py-4 px-6 cursor-pointer group flex flex-col justify-between hover:shadow-lg rounded-md transition-all duration-200"
            key={data.id}
        >
            <div className="relative pt-3.5 group">
                <div onClick={() => navigate(`/products/${data.id}`)}>
                    <img
                        src={data.image}
                        alt={data.title}
                        className="mt-2.5 w-full h-auto group-hover:scale-105 transition-transform duration-200"
                    />
                </div>
                <span
                    className={`absolute font-normal text-xs flex gap-2 items-center justify-center top-0 left-0 
                    ${data.in_stock ? 'text-[#78A962]' : 'text-[#C94D3F]'}`}
                >
                    {data.in_stock ? (
                        <>
                            <FaCircleCheck />
                            in stock
                        </>
                    ) : (
                        <>
                            <span className="size-3.5 bg-[#C94D3F] text-white rounded-full text-[6px] flex items-center justify-center">
                                <FaPhoneAlt />
                            </span>
                            check availability
                        </>
                    )}
                </span>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200 z-40">
                    <span
                        className="text-red-600 text-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
                        onClick={handleLike}
                    >
                        {isLike ? <FaHeart color="red" /> : <FaRegHeart />}
                    </span>
                </div>
            </div>

            <div onClick={() => navigate(`/products/${data.id}`)}>
                <div className="flex items-center gap-2 mt-2.5">
                    <div className="flex items-center gap-0.5 text-xs">
                        {Array.from({ length: 5 }, (_, i) => (
                            <span key={i}>
                                <FaStar className={i < data.star ? 'text-[#E9A426]' : 'text-[#C4C4C4]'} />
                            </span>
                        ))}
                    </div>
                    <span className="text-xs font-normal text-[#C4C4C4]">
                        Reviews ({data.reviews})
                    </span>
                </div>
                <p className="font-normal text-xs text-black leading-5 mt-2.5 transition-all duration-300 ease-in-out line-clamp-2">
                    {data.aboutProduct}
                </p>

                <span className="inline-block w-full mt-2.5">
                    <del className="font-normal text-[#6B6B6B]">
                        {parseFloat(data.old_price).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        })}
                    </del>
                    <p className="font-semibold text-lg">
                        {parseFloat(data.price).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        })}
                    </p>
                </span>
            </div>

            <button
                className="py-2 px-5 md:w-[80%] md:mx-auto ml-auto flex items-center gap-2.5 border-2 border-primary rounded-[50px] text-strongBlue font-semibold text-sm mt-2.5 opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer hover:scale-105"
                onClick={addToCart}
            >
                <MdOutlineShoppingCart  className='text-lg'/>
                <span className='hidden sm:block'>Add To Cart</span>
            </button>
        </div>
    );
}

export default ProductCard;
