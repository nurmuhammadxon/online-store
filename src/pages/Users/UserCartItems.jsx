import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from '../../components';

function UserCartItems() {
    const [cartItems, setCartItems] = useState([]);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [modalType, setModalType] = useState('');

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get('/api/cart-items'); // API endpointini almashtiring
                setCartItems(response.data.cartItems || []);
                setOrders(response.data.orders || []);
            } catch (err) {
                setError('Savatdagi buyurtmalarni olishda xatolik yuz berdi.');
            } finally {
                setLoading(false);
            }
        };

        fetchCartItems();
    }, []);

    // Savatdan buyurtmani rasmiylashtirish
    const handleFinalizeOrder = async (item) => {
        try {
            // Savatdagi buyurtmani o'chirish
            const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
            setCartItems(updatedCartItems);

            // Buyurtmani orders ro'yxatiga qo'shish
            const updatedOrders = [...orders, { ...item, status: 'Yetkazildi' }];
            setOrders(updatedOrders);

            // API-ga buyurtmani yuborish
            await axios.post('/api/orders', { ...item, status: 'Yetkazildi' }); // Orders API endpointini almashtiring

            // Modalda muvaffaqiyatli xabarni ko'rsatish
            setModalMessage('Buyurtma rasmiylashtirildi');
            setModalType('success');
        } catch (err) {
            setError('Buyurtmani rasmiylashtirishda xatolik yuz berdi.');
            setModalMessage('Xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.');
            setModalType('error');
        }
    };

    // Savatdan buyurtmani o'chirish
    const handleRemoveItem = async (id) => {
        try {
            // API orqali buyurtmani o'chirish
            await axios.delete(`/api/cart-items/${id}`); // O'chirish uchun API endpointini almashtiring

            // Mahsulotni savatdan olib tashlash
            const updatedCartItems = cartItems.filter(item => item.id !== id);
            setCartItems(updatedCartItems);

            // Modalda o'chirish xabarini ko'rsatish
            setModalMessage('Mahsulot o\'chirildi');
            setModalType('info');
        } catch (err) {
            setError('Mahsulotni o\'chirishda xatolik yuz berdi.');
            setModalMessage('Xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.');
            setModalType('error');
        }
    };

    if (loading) return <p className="text-center text-gray-500">Yuklanmoqda...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="container p-6 mx-auto">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">Savatdagi Mahsulotlar</h2>

            {modalMessage && (
                <Modal
                    message={modalMessage}
                    type={modalType}
                    onClose={() => setModalMessage('')}
                />
            )}

            {cartItems.length > 0 ? (
                cartItems.map(item => (
                    <div key={item.id} className="flex items-center justify-between p-4 mb-4 transition-shadow bg-white rounded-lg shadow-md hover:shadow-xl">
                        <div className="flex items-center gap-4">
                            <img src={item.image} alt={item.name} className="object-cover w-20 h-20 rounded-md" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                                <p className="text-gray-500">Narx: ${item.price} x {item.quantity}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6">
                            <p className="font-semibold text-gray-800">Jami: ${item.price * item.quantity}</p>
                            <div className="flex items-center gap-4">
                                <button
                                    className="font-semibold text-green-600 hover:text-green-800 transition-colors duration-300"
                                    onClick={() => handleFinalizeOrder(item)}
                                >
                                    Rasmiylashtirish
                                </button>
                                <button
                                    className="font-semibold text-red-600 hover:text-red-800 transition-colors duration-300"
                                    onClick={() => handleRemoveItem(item.id)}
                                >
                                    O'chirish
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-gray-500">Savatda hech qanday mahsulot yo'q.</p>
            )}
        </div>
    );
}

export default UserCartItems;
