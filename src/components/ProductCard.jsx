import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Modal } from '../components';

function ProductCard({ data }) {
    const [isLike, setIsLike] = useState(false);
    const [favouriteId, setFavouriteId] = useState(null);
    const [modalMessage, setModalMessage] = useState('');
    const [modalType, setModalType] = useState('');
    const navigate = useNavigate();

    const user = JSON.parse(sessionStorage.getItem('user'));
    const auth = sessionStorage.getItem('auth');
    const userId = user?.id;

    useEffect(() => {
        const fetchFavourites = async () => {
            try {
                const response = await axios.get(
                    'https://techstationapi-epe0ggbffchncbbc.canadacentral-01.azurewebsites.net/api/Favourites/GetAll',
                );
                const favourites = response.data.data.favourites;
                const favouriteItem = favourites.find(fav => fav.productId === data.id);

                if (favouriteItem) {
                    setIsLike(true);
                    setFavouriteId(favouriteItem.id);
                } else {
                    setIsLike(false);
                    setFavouriteId(null);
                }
            } catch (error) {
                console.error('Sevimlilarni olishda xatolik:', error);
            }
        };

        if (userId && auth) {
            fetchFavourites();
        }
    }, [data.id, userId, auth]);

    const truncateWords = (text, wordLimit) => {
        if (!text) return '';
        const words = text.split(' ');
        return words.length > wordLimit
            ? words.slice(0, wordLimit).join(' ') + '...'
            : text;
    };

    const handleLike = async () => {
        if (!userId || !auth) {
            navigate('/signin');
            return;
        }

        const newLikeStatus = !isLike;
        setIsLike(newLikeStatus);

        try {
            if (newLikeStatus) {
                await axios.post(
                    'https://techstationapi-epe0ggbffchncbbc.canadacentral-01.azurewebsites.net/api/Favourites/AddFavourite/add',
                    {
                        userId: userId,
                        productId: data.id,
                    },
                    {
                        params: {
                            token: true,
                        },
                    }
                );
            } else {
                await axios.delete(
                    `https://techstationapi-epe0ggbffchncbbc.canadacentral-01.azurewebsites.net/api/Favourites/RemoveFavourite/remove/${favouriteId}`,
                    {
                        params: {
                            token: true,
                        },
                    }
                );
            }
            
        } catch (error) {
            console.error('Xatolik:', error);
        }
    };

    const addToOrders = async (productId) => {
        if (!userId || !auth) {
            navigate('/signin');
            return;
        }

        try {
            await axios.post(
                'https://techstationapi-epe0ggbffchncbbc.canadacentral-01.azurewebsites.net/api/CartItems/AddCart/add-cart',
                {
                    userId: userId,
                    productId: productId,
                    quantity: 1,
                },
                {
                    params: {
                        token: true,
                        operation: "add",
                    },
                }
            );
            setModalMessage("Mahsulot savatga qo'shildi");
            setModalType('info');
        } catch (error) {
            setModalMessage("Mahsulotni savatga qo'shishda xatolik");
            setModalType('error');
            console.error('Savatchaga qo‘shishda xatolik:', error);
        }
    };

    return (
        <div className="w-52 py-2.5 md:py-4 px-2.5 lg:px-6 cursor-pointer group flex flex-col justify-between hover:shadow-lg rounded-md transition-all duration-200">
            {modalMessage && (
                <Modal message={modalMessage} type={modalType} onClose={() => setModalMessage('')} />
            )}

            <div className="relative pt-3.5 group">
                <div onClick={() => navigate(`/products/${data.id}`)}>
                    <img
                        src={`https://techstationapi-epe0ggbffchncbbc.canadacentral-01.azurewebsites.net/${data.images.split(';')[0]}`}
                        alt={`${data.productName} image`}
                        className="mt-2.5 w-full h-auto group-hover:scale-105 transition-transform duration-200"
                    />
                </div>

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
                <h3 className="text-base text-black leading-5 sm:mt-2.5">{data.productName}</h3>
                <p className="font-normal text-sm text-gray-500 leading-5 sm:mt-2.5">
                    {truncateWords(data.description, 10)}
                </p>
                <div className="flex items-end gap-2 sm:mt-2.5">
                    <p className="text-sm font-semibold md:text-lg">{parseFloat(data.price)}</p>
                    <p className="text-xs md:text-base text-gray-500 font-medium">so'm</p>
                </div>
            </div>

            <button
                className="py-2 px-5 ml-auto mt-2.5 flex items-center gap-2.5 border-2 border-primary rounded-[50px] text-strongBlue font-semibold text-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-200 cursor-pointer hover:scale-105"
                onClick={() => addToOrders(data.id)}
            >
                <MdOutlineShoppingCart className="text-lg" />
            </button>
        </div>
    );
}

export default ProductCard;
