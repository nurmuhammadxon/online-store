import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchData } from '../../util/fetchdata';
import { Modal } from '../../components';

function Orders() {
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [modalMessage, setModalMessage] = useState('');

    useEffect(() => {
        fetchData('Orders/GetAll', 'orders', setOrders, setError, setLoading);
    }, []);

    useEffect(() => {
        if (orders.length > 0) {
            const productIds = orders.map(item => item.productId);
            fetchProducts(productIds);
        }
    }, [orders]);

    const fetchProducts = async (productIds) => {
        try {
            const response = await axios.get(
                'https://techstationapi-epe0ggbffchncbbc.canadacentral-01.azurewebsites.net/api/Products/GetAllProducts',
                {
                    params: {
                        sort: false,
                        ids: productIds.join(','),
                    },
                }
            );
            setProducts(response.data.data.products);
        } catch {
            setError('Mahsulotlarni olishda xatolik yuz berdi');
        }
    };

    const getDeliveryTime = () => {
        const deliveryTime = new Date();
        deliveryTime.setDate(deliveryTime.getDate() + 1);
        return deliveryTime.toLocaleDateString();
    };

    const removeOrder = async (order) => {
        const created = new Date(order.createdAt);
        const now = new Date();
        const diffHours = (now - created) / (1000 * 60 * 60);

        if (diffHours > 5) {
            setModalMessage('Buyurtma rasmiylashtirilganidan beri 5 soatdan oshdi. Endi uni o‘chirib bo‘lmaydi.');
            return;
        }

        try {
            await axios.delete(
                `https://techstationapi-epe0ggbffchncbbc.canadacentral-01.azurewebsites.net/api/Orders/DeleteOrder/${order.id}`,
                { params: { token: true } }
            );
            setOrders(prev => prev.filter(o => o.id !== order.id));
        } catch {
            setError("Buyurtmani o'chirishda xatolik yuz berdi.");
        }
    };

    if (loading) return <p className="text-center text-gray-500">Yuklanmoqda...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="container p-6 mx-auto">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">Rasmiylashtirilgan Buyurtmalar</h2>

            {modalMessage && (
                <Modal
                    message={modalMessage}
                    type="info"
                    onClose={() => setModalMessage('')}
                />
            )}

            {orders.length > 0 ? (
                orders.map(order => {
                    const product = products.find(p => p.id === order.productId);
                    if (!product) return null;

                    return (
                        <div key={order.id} className="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow-md hover:shadow-xl">
                            <div className="flex items-center gap-4">
                                <img
                                    src={`https://techstationapi-epe0ggbffchncbbc.canadacentral-01.azurewebsites.net/${product.images?.split(';')[0]}`}
                                    alt={product.productName}
                                    className="object-cover w-20 h-20 rounded-md"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">{product.productName}</h3>
                                    <p className="text-gray-500">Narx: ${product.price} x {order.quantity}</p>
                                    <p className="font-semibold text-green-500">Yetkazib beriladi</p>
                                    <p className="text-sm text-gray-500 mt-1">Yetkazib berish sanasi: {getDeliveryTime()}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <p className="font-semibold text-gray-800">Jami: ${(product.price * order.quantity).toLocaleString()}</p>
                                <button
                                    className="font-semibold text-red-600 hover:text-red-800"
                                    onClick={() => removeOrder(order)}
                                >
                                    O‘chirish
                                </button>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p className="text-gray-500">Hali buyurtmalaringiz yo'q.</p>
            )}
        </div>
    );
}

export default Orders;
