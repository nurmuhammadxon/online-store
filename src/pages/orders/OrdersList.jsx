import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchData } from '../../util/fetchdata';
import { Modal } from '../../components';

function OrdersList() {
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [modalMessage, setModalMessage] = useState('');

    useEffect(() => {
        fetchData('Orders/GetAll', 'orders', setOrders, setError, setLoading);
    }, []);

    useEffect(() => {
        if (orders.length > 0) {
            const productIds = [...new Set(orders.map(order => order.productId))];
            const userIds = [...new Set(orders.map(order => order.userId))];

            fetchProducts(productIds);
            fetchUsers(userIds);
        }
    }, [orders]);

    const fetchProducts = async (productIds) => {
        try {
            const res = await axios.get('https://165.232.87.222/api/Products/GetAllProducts', {
                params: {
                    ids: productIds.join(','),
                    sort: false
                }
            });
            setProducts(res.data.data.products);
        } catch (err) {
            setError("Mahsulotlarni olishda xatolik yuz berdi.");
        }
    };

    const fetchUsers = async (userIds) => {
        try {
            const res = await axios.get('https://165.232.87.222/api/Users/GetAll', {
                params: {
                    ids: userIds.join(',')
                }
            });
            setUsers(res.data.data.users);
        } catch (err) {
            setError("Foydalanuvchilarni olishda xatolik yuz berdi.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
                    Buyurtmalar Ro‘yxati
                </h2>

                {modalMessage && (
                    <Modal
                        message={modalMessage}
                        type="info"
                        onClose={() => setModalMessage('')}
                    />
                )}

                {loading ? (
                    <div className="flex justify-center items-center h-40">
                        <span className="text-blue-700">Yuklanmoqda...</span>
                    </div>
                ) : error ? (
                    <p className="text-center text-red-600">{error}</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border border-gray-300 text-sm">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="p-2 border">#</th>
                                    <th className="p-2 border">Buyurtmachi</th>
                                    <th className="p-2 border">Mahsulot</th>
                                    <th className="p-2 border">Miqdor</th>
                                    <th className="p-2 border">Umumiy narx</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, idx) => {
                                    const product = products.find(p => p.id === order.productId);
                                    const user = users.find(u => u.id === order.userId);

                                    return (
                                        <tr key={order.id} className="hover:bg-gray-50">
                                            <td className="p-2 border text-center">{idx + 1}</td>
                                            <td className="p-2 border">
                                                {user ? `${user.firstName} ${user.lastName}` : 'Nomaʼlum'}
                                            </td>
                                            <td className="p-2 border">
                                                {product ? product.productName : 'Nomaʼlum'}
                                            </td>
                                            <td className="p-2 border text-center">{order.quantity}</td>
                                            <td className="p-2 border text-center">{order.totalAmount} so'm</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default OrdersList;
