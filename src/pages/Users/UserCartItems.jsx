import React, { useState, useEffect } from 'react';

function UserCartItems() {
    const [cartItems, setCartItems] = useState([]);
    const [orders, setOrders] = useState([]);

    // localStorage'dan savatdagi buyurtmalarni olish
    useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(savedCartItems);

        const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        setOrders(savedOrders);
    }, []);

    // Savatdan buyurtmani rasmiylashtirish
    const handleFinalizeOrder = (item) => {
        // Savatdagi buyurtmani o'chirish
        const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

        // Buyurtmani orders ro'yxatiga qo'shish
        const updatedOrders = [...orders, { ...item, status: 'Yetkazildi' }];
        setOrders(updatedOrders);
        localStorage.setItem('orders', JSON.stringify(updatedOrders));
    };

    // Savatdan buyurtmani o'chirish
    const handleRemoveItem = (id) => {
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    return (
        <div className="container p-6 mx-auto">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">Savatdagi Mahsulotlar</h2>
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
                                    className="font-semibold text-green-600 hover:text-green-800"
                                    onClick={() => handleFinalizeOrder(item)}
                                >
                                    Rasmiylashtirish
                                </button>
                                <button
                                    className="font-semibold text-red-600 hover:text-red-800"
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
