import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Orders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('/api/orders'); // API endpointini almashtiring
                setOrders(response.data || []);
            } catch (err) {
                setError('Buyurtmalarni olishda xatolik yuz berdi.');
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const removeOrder = async (id) => {
        try {
            await axios.delete(`/api/orders/${id}`); // Buyurtmani o'chirish API endpointini almashtiring
            setOrders(orders.filter(order => order.id !== id));
        } catch (err) {
            setError('Buyurtmani o\'chirishda xatolik yuz berdi.');
        }
    };

    const finalizeOrder = async (id) => {
        try {
            const updatedOrders = orders.map(order =>
                order.id === id ? { ...order, status: 'Yetkazildi', deliveryDate: getTomorrowDate() } : order
            );
            setOrders(updatedOrders);

            // API'ga buyurtmani rasmiylashtirish uchun so'rov yuborish
            await axios.put(`/api/orders/${id}`, updatedOrders.find(order => order.id === id));

        } catch (err) {
            setError('Buyurtmani rasmiylashtirishda xatolik yuz berdi.');
        }
    };

    const getTomorrowDate = () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow.toLocaleDateString(); // Formatni o'zingizga moslashtiring
    };

    if (loading) return <p className="text-center text-gray-500">Yuklanmoqda...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

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
                                <p className={`font-semibold ${order.status === 'Yetkazildi' ? 'text-green-500' : 'text-blue-500'}`}>
                                    {order.status}
                                </p>
                                {order.status === 'Yetkazildi' && (
                                    <p className="text-sm text-gray-500 mt-2">Buyurtma {order.deliveryDate} da yetkaziladi.</p>
                                )}
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
