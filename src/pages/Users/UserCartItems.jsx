import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from '../../components';
import { fetchData } from '../../util/fetchdata';

function UserCartItems() {
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [modalType, setModalType] = useState('');
    const [quantity, setQuantity] = useState({});

    useEffect(() => {
        fetchData('CartItems/GetAll', 'cartItems', setCartItems, setError, setLoading);
    }, []);

    useEffect(() => {
        if (cartItems.length > 0) {
            const productIds = cartItems.map(item => item.productId);
            fetchProducts(productIds);
        }
    }, [cartItems]);

    const fetchProducts = async (productIds) => {
        try {
            const response = await axios.get(
                `https://165.232.87.222/api/Products/GetAllProducts`,
                {
                    params: {
                        sort: false,
                        ids: productIds.join(','),
                    },
                }
            );
            setProducts(response.data.data.products);
        } catch (error) {
            setError('Mahsulotlarni olishda xatolik yuz berdi');
        }
    };

    const handleIncreaseQuantity = (id) => {
        setQuantity((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 1) + 1,
        }));
    };

    const handleDecreaseQuantity = (id) => {
        setQuantity((prevState) => ({
            ...prevState,
            [id]: prevState[id] && prevState[id] > 1 ? prevState[id] - 1 : 1,
        }));
    };

    const handleRemoveItem = async (id) => {
        try {
            await axios.delete(
                `https://165.232.87.222/api/CartItems/RemoveCartItem/remove/${id}`,
                {
                    params: {
                        token: true
                    }
                }
            );

            setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));

            setModalMessage('Mahsulot o\'chirildi');
            setModalType('info');
        } catch (error) {
            setModalMessage('Mahsulotni o\'chirishda xatolik yuz berdi');
            setModalType('error');
            console.log(error);
        }
    };

    const handleRemoveAll = async () => {
        try {
            await axios.delete(
                'https://165.232.87.222/api/CartItems/ClearAllCartItems/clear',
                {
                    params: { clear: true }
                }
            );
            setCartItems([]);
        } catch (error) {
            console.error("Savatni o'chirishda xatolik:", error);
        }
    };

    const handleFinalizeOrder = async (item) => {
        const updatedQuantity = quantity[item.id] || 1;

        const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);
        const userId = cartItem ? cartItem.userId : 0;

        const order = {
            userId: userId,
            productId: item.productId,
            quantity: updatedQuantity,
        };

        try {
            await axios.post(
                'https://165.232.87.222/api/Orders/Add',
                order
            );

            await handleRemoveItem(item.id);

            setModalMessage('Buyurtma rasmiylashtirildi');
            setModalType('info');
        } catch (error) {
            setModalMessage('Buyurtma rasmiylashtirishda xatolik yuz berdi');
            setModalType('error');
            console.log(error);
        }
    };

    if (loading) return <p className="text-center text-gray-500">Yuklanmoqda...</p>;

    return (
        <div className="container p-6 mx-auto max-w-7xl">
            <div className='w-full flex items-center justify-between'>
                <h2 className="mb-6 text-3xl font-semibold text-gray-900">Savatdagi Mahsulotlar</h2>
                <button
                    className="px-4 py-2 bg-red-600 border-none text-white rounded hover:bg-red-700 transition"
                    onClick={handleRemoveAll}
                >
                    Hammasini o'chirish
                </button>
            </div>
            {modalMessage && (
                <Modal message={modalMessage} type={modalType} onClose={() => setModalMessage('')} />
            )}

            {cartItems.length > 0 ? (
                cartItems.map((item) => {
                    const product = products.find((prod) => prod.id === item.productId);

                    return product ? (
                        <div
                            key={item.id}
                            className="flex flex-col lg:flex-row items-center justify-between gap-4 p-5 mb-5 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-start gap-6 w-full lg:w-2/3">
                                <img
                                    src={`https://165.232.87.222/${product.images.split(';')[0]
                                        }`}
                                    alt={`${product.productName} image`}
                                    className="object-cover w-24 h-24 rounded-md shadow-md"
                                />
                                <div className="w-full">
                                    <h3 className="text-xl font-semibold text-gray-800">{product.productName}</h3>
                                    <p className="text-gray-500">Narx: ${product.price}</p>
                                    {/* Quantity control with + and - buttons */}
                                    <div className="flex items-center gap-4 mt-2">
                                        <button
                                            onClick={() => handleDecreaseQuantity(item.id)}
                                            className="bg-gray-200 px-2.5 py-1 rounded-lg text-gray-800 transition-colors hover:bg-gray-300"
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            value={quantity[item.id] || 1}
                                            readOnly
                                            className="w-16 text-center border border-gray-300 rounded-md shadow-sm"
                                        />
                                        <button
                                            onClick={() => handleIncreaseQuantity(item.id)}
                                            className="bg-gray-200 px-2.5 py-1 rounded-lg text-gray-800 transition-colors hover:bg-gray-300"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-end lg:justify-between gap-4 w-full lg:w-1/3 mt-4 sm:mt-0">
                                <p className="font-semibold text-gray-900">
                                    Jami: ${(product.price * (quantity[item.id] || 1)).toFixed(2)}
                                </p>
                                <div className="flex gap-4 w-full sm:w-auto">
                                    <button
                                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors w-full sm:w-auto"
                                        onClick={() => handleFinalizeOrder(item)}
                                    >
                                        Rasmiylashtirish
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors w-full sm:w-auto"
                                        onClick={() => handleRemoveItem(item.id)}
                                    >
                                        O'chirish
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p className="text-gray-500">Mahsulot topilmadi</p>
                    );
                })
            ) : (
                <p className="text-gray-500">Savatda hech qanday mahsulot yo'q.</p>
            )}
        </div>
    );
}

export default UserCartItems;
