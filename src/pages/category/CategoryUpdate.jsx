import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { InputField } from '../../components';
import { fetchData } from '../../util/fetchdata';

function CategoryUpdate() {
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        categoryName: '',
        description: '',
        id: 0
    });

    useEffect(() => {
        fetchData(
            'Categories/GetAll',
            'categories',
            setCategory,
            setError,
            setLoading
        )
    }, []);

    const openModal = (category) => {
        setFormData(category);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const updateCategory = async () => {
        try {
            await axios.put(`https://165.232.87.222/api/Categories/Update/${formData.id}`, formData);
            fetchCategories()
            closeModal();
        } catch (error) {
            console.error('Yangilashda xatolik:', error);
            alert("Yangilashda xatolik! Iltimos qayta urinib ko'ring");
        }
    };

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center text-primary">
                Kategoriyalar ro‘yxati
            </h1>

            {loading && <p className="text-center text-blue-500">Yuklanmoqda...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            {!loading && category.length === 0 && (
                <p className="text-center text-gray-500">Kategoriyalar mavjud emas.</p>
            )}

            {!loading && category.length > 0 && (
                <div className="overflow-x-auto">
                    <table className="w-full table-auto border-collapse border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-3 border">#</th>
                                <th className="p-3 border">Kategoriya nomi</th>
                                <th className="p-3 border">Kategoriya tavsifi</th>
                                <th className="p-3 border text-gray-500">Katalog id</th>
                                <th className="p-3 border">Amal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {category.map((cat, idx) => (
                                <tr key={cat.id} className="hover:bg-gray-50">
                                    <td className="p-3 border text-center">{idx + 1}</td>
                                    <td className="p-3 border">{cat.categoryName}</td>
                                    <td className="p-3 border">{cat.description}</td>
                                    <td className="p-3 border text-center text-gray-500">{cat.id}</td>
                                    <td className="p-3 border text-center">
                                        <button
                                            onClick={() => openModal(cat)}
                                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded cursor-pointer"
                                        >
                                            Tahrirlash
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 w-full flex items-center justify-center z-50 bg-[#00000080]">
                    <div className="bg-white p-6 rounded-md w-full max-w-lg">
                        <h2 className="text-xl font-semibold mb-4 text-center">Kategoriyani tahrirlash</h2>
                        <div className="flex flex-col gap-5">
                            <InputField
                                label="Kategoriya Nomi"
                                type="text"
                                name="categoryName"
                                value={formData.categoryName}
                                onChange={handleChange}
                                placeholder="Kategoriya nomi"
                                required
                            />
                            <label>
                                <span className="text-sm text-gray-700">Kategoriya Tavsifi</span>
                                <textarea
                                    name="description"
                                    placeholder="Tavsif"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="w-full h-20 outline-none bg-gray-200 pl-3.5 rounded-md"
                                    required
                                />
                            </label>
                        </div>

                        <div className="flex justify-end gap-3 mt-6">
                            <button
                                onClick={closeModal}
                                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded cursor-pointer"
                            >
                                Bekor qilish
                            </button>
                            <button
                                onClick={updateCategory}
                                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded cursor-pointer"
                            >
                                Saqlash
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CategoryUpdate;
