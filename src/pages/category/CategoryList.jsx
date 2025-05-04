import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CategoryList() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://techstationapi-epe0ggbffchncbbc.canadacentral-01.azurewebsites.net/api/Categories/GetAll');
                setCategories(response.data.data.categories);
            } catch (err) {
                console.error('Kategoriya olishda xatolik:', err);
                setError("Ma'lumotlarni yuklashda xatolik yuz berdi.");
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b p-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
                    Kategoriya Ro‘yxati
                </h2>

                {loading ? (
                    <div className="flex justify-center items-center h-40">
                        <span className="ml-2 text-blue-700 font-medium">Yuklanmoqda...</span>
                    </div>
                ) : error ? (
                    <p className="text-center text-red-600">{error}</p>
                ) : categories.length === 0 ? (
                    <p className="text-center text-gray-500">Hech qanday kategoriya topilmadi.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border border-gray-300">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="p-2 border">#</th>
                                    <th className="p-2 border">Kategoriya nomi</th>
                                    <th className="p-2 border">Kategoriya tavsifi</th>
                                    <th className="p-2 border text-gray-600">Katalog id</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((category, idx) => (
                                    <tr key={category.id} className="hover:bg-gray-50">
                                        <td className="p-2 border text-center">{idx + 1}</td>
                                        <td className="p-2 border">{category.categoryName}</td>
                                        <td className="p-2 border">{category.description}</td>
                                        <td className="p-2 border text-center text-gray-500">{category.catalogId}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CategoryList;
