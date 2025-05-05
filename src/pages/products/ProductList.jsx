import React, { useEffect, useState } from 'react';
import { fetchData } from '../../util/fetchdata';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData(
            'Products/GetAllProducts?sort=false',
            'products',
            setProducts,
            setError,
            setLoading
        )
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b p-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
                    Mahsulotlar Ro‘yxati
                </h2>

                {loading ? (
                    <div className="flex justify-center items-center h-40">
                        <span className="ml-2 text-blue-700 font-medium">Yuklanmoqda...</span>
                    </div>
                ) : error ? (
                    <p className="text-center text-red-600">{error}</p>
                ) : products.length === 0 ? (
                    <p className="text-center text-gray-500">Hech qanday mahsulot topilmadi.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border border-gray-300">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="p-2 border">#</th>
                                    <th className="p-2 border">Mahsulot nomi</th>
                                    <th className="p-2 border">Mahsulot tavsifi</th>
                                    <th className="p-2 border">Mahsulot narxi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, idx) => {
                                    return (
                                        <tr key={product.id} className="hover:bg-gray-50">
                                            <td className="p-2 border text-center">{idx + 1}</td>
                                            <td className="p-2 border">{product.productName}</td>
                                            <td className="p-2 border">{product.description}</td>
                                            <td className="p-2 border">{product.price}</td>
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

export default ProductList;
