import React, { useState, useEffect } from 'react';

function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        setOrders(savedOrders);
    }, []);

    const removeOrder = (id) => {
        const updatedOrders = orders.filter(order => order.id !== id);
        setOrders(updatedOrders);
        localStorage.setItem('orders', JSON.stringify(updatedOrders));
    };

    const finalizeOrder = (id) => {
        const updatedOrders = orders.map(order =>
            order.id === id ? { ...order, status: 'Yetkazildi' } : order
        );
        setOrders(updatedOrders);
        localStorage.setItem('orders', JSON.stringify(updatedOrders));
    };

    return (
        <div className="container p-6 mx-auto">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">Rasmiylashtirilgan Buyurtmalar</h2>
            {orders.length > 0 ? (
                orders.map(order => (
                    <div key={order.id} className="flex items-center justify-between p-4 mb-4 transition-shadow bg-white rounded-lg shadow-md hover:shadow-xl">
                        <div className="flex items-center gap-4">
                            <img src={order.image} alt={order.name} className="object-cover w-20 h-20 rounded-md" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">{order.name}</h3>
                                <p className="text-gray-500">Narx: ${order.price} x {order.quantity}</p>
                                <p className={`font-semibold ${order.status === 'Yetkazildi' ? 'text-green-500' : 'text-blue-500'}`}>{order.status}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6">
                            <p className="font-semibold text-gray-800">Jami: ${order.price * order.quantity}</p>
                            <div className="flex items-center gap-4">
                                {order.status !== 'Yetkazildi' && (
                                    <button
                                        className="font-semibold text-blue-600 hover:text-blue-800"
                                        onClick={() => finalizeOrder(order.id)}
                                    >
                                        Rasmiylashtirish
                                    </button>
                                )}
                                <button
                                    className="font-semibold text-red-600 hover:text-red-800"
                                    onClick={() => removeOrder(order.id)}
                                >
                                    O'chirish
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-gray-500">Hali buyurtmalaringiz yo'q.</p>
            )}
        </div>
    );
}

export default Orders;
