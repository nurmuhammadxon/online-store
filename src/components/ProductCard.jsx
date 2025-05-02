import React, { use, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaPhoneAlt, FaRegHeart, FaHeart } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import axios from 'axios';

function ProductCard({ data }) {
    const [isLike, setIsLike] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('user'));
        if (user) {
            const favourites = JSON.parse(localStorage.getItem('Favourites')) || [];

            const isLiked = favourites.some(item => item.id === data.id);
            setIsLike(isLiked);
        }
    }, [data.id]);

    const handleLike = async () => {
        const newLikeStatus = !isLike;
        const user = JSON.parse(sessionStorage.getItem('user'));

        if (!user) {
            navigate('/signin');
            return;
        }

        let favourites = JSON.parse(localStorage.getItem('Favourites')) || [];

        if (newLikeStatus) {
            favourites.push(data);
            localStorage.setItem('Favourites', JSON.stringify(favourites));
        } else {
            favourites = favourites.filter(item => item.id !== data.id);
            localStorage.setItem('Favourites', JSON.stringify(favourites));
        }
        setIsLike(newLikeStatus);

        // try {
        //     if (newLikeStatus) {
        //         const response = await axios.post('/api/Favourites/AddFavourite/add', {
        //             userId: user.id,
        //             productId: data.id
        //         });
        //         setIsLike(true);
        //         setFavouriteId(response.data.id);
        //         localStorage.setItem(`isLike_${data.id}`, 'true');
        //     } else {
        //         await axios.delete(`/api/Favourites/RemoveFavourite/remove/${favouriteId}`);
        //         setIsLike(false);
        //         setFavouriteId(null);
        //         localStorage.setItem(`isLike_${data.id}`, 'false');
        //     }
        // } catch (error) {
        //     console.error("Favourites error:", error);
        // }
    };

    const addToOrders = async (productId) => {
        const user = JSON.parse(sessionStorage.getItem('user'));

        if (!user) {
            navigate('/signin');
            return;
        }

        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        cartItems.push(data);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        user.cartItems.push(cartItems);
        sessionStorage.setItem('user', JSON.stringify(user));

        // try {
        // Yangilangan userni sessionStorage ga qaytadan saqlaymiz
        //     await axios.post('/api/Orders/Add', {
        //         userId: user.id,
        //         productId: productId,
        //         quantity: 1
        //     });
        //     alert("Buyurtma muvaffaqiyatli yaratildi!");
        // } catch (error) {
        //     console.error("Buyurtma yaratishda xatolik:", error);
        //     alert("Buyurtma yaratishda xatolik yuz berdi.");
        // }
    };

    return (
        <div
            className="w-52 py-2.5 md:py-4 px-2.5 lg:px-6 cursor-pointer group flex flex-col justify-between hover:shadow-lg rounded-md transition-all duration-200"
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
                <div className="absolute z-40 transition-all duration-200 opacity-100 top-3 right-3 md:opacity-0 md:group-hover:opacity-100">
                    <span
                        className="flex items-center justify-center text-xl text-red-600 transition-all duration-300 cursor-pointer hover:scale-110"
                        onClick={handleLike}
                    >
                        {isLike ? <FaHeart color="red" /> : <FaRegHeart />}
                    </span>
                </div>
            </div>

            <div onClick={() => navigate(`/products/${data.id}`)}>
                <div className="flex items-start sm:items-center flex-col sm:flex-row gap-2 sm:mt-2.5">
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
                <p className="font-normal text-xs text-black leading-5 sm:mt-2.5 transition-all duration-300 ease-in-out line-clamp-2">
                    {data.aboutProduct}
                </p>

                <span className="inline-block w-full sm:mt-2.5">
                    <del className="font-normal text-sm md:text-lg text-[#6B6B6B]">
                        {parseFloat(data.old_price).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        })}
                    </del>
                    <p className="text-sm font-semibold md:text-lg">
                        {parseFloat(data.price).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        })}
                    </p>
                </span>
            </div>

            <button
                className="py-1 lg:py-2 px-5 lg:w-[80%] lg:mx-auto ml-auto mt-2.5 flex items-center gap-2.5 border-2 border-primary rounded-[50px] text-strongBlue font-semibold text-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-200 cursor-pointer hover:scale-105"
                onClick={() => addToOrders(data.id)}
            >
                <MdOutlineShoppingCart className='text-lg' />
                <span className='hidden lg:block'>Add To Cart</span>
            </button>
        </div>
    );
}
export default ProductCard;
