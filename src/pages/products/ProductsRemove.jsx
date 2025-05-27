import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { fetchData } from '../../util/fetchdata';

function ProductsRemove() {
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

    const deleteProduct = async (id) => {

        const confirmDelete = window.confirm("Haqiqatan ham o'chirmoqchimisiz?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`http://165.232.87.222:5000/api/Products/Remove/${id}`);
            alert("Mahsulot o'chirildi!");
        } catch (err) {
            setError("O'chirishda xatolik! Iltimos qayta urinib ko'ring");
        }
    };

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center text-primary">
                Masulotlar ro‘yxati
            </h1>

            {loading && <p className="text-center text-blue-500">Yuklanmoqda...</p>}
            {error && alert(error)}

            {!loading && products.length === 0 && (
                <p className="text-center text-gray-500">Mahsulotlar mavjud emas.</p>
            )}

            {!loading && products.length > 0 && (
                <div className="overflow-x-auto">
                    <table className="w-full table-auto border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-3 border">#</th>
                                <th className="p-3 border">Mahsulot nomi</th>
                                <th className="p-3 border">Mahsulot tavsifi</th>
                                <th className="p-3 border">Mahsulot narxi</th>
                                <th className="p-3 border">Amal</th>
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
                                        <td className='p-2 border'>
                                            <button
                                                onClick={() => deleteProduct(product.id)}
                                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition cursor-pointer"
                                            >
                                                O‘chirish
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default ProductsRemove