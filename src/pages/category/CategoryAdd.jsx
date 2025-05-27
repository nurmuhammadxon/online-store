import React, { useState } from 'react';
import axios from 'axios';

function CategoryAdd() {
    const [formData, setFormData] = useState({
        categoryName: '',
        description: '',
        catalogId: ''
    });
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataToSend = {
            categoryName: formData.categoryName,
            description: formData.description,
            catalogId: Number(formData.catalogId)
        };

        setLoading(true);
        setErrorMessage("");

        try {
            const response = await axios.post('https://165.232.87.222/api/Categories/Insert', dataToSend);
            alert('Kategoriya muvaffaqiyatli qo‘shildi!');
        } catch (error) {
            console.error('Xatolik:', error);
            setErrorMessage("Xatolik yuz berdi. Qayta urinib ko‘ring.");
        } finally {
            setLoading(false);
            setFormData({
                categoryName: '',
                description: '',
                catalogId: ''
            })
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-5 text-center">Yangi Kategoriya Qo‘shish</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="categoryName"
                        placeholder="Kategoriya nomi"
                        value={formData.categoryName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <textarea
                        name="description"
                        placeholder="Tavsif"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="number"
                        name="catalogId"
                        placeholder="Katalog ID"
                        value={formData.catalogId}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    {errorMessage && (
                        <p className="text-red-500 text-center">{errorMessage}</p>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-2 rounded hover:bg-strongBlue cursor-pointer transition duration-200"
                        disabled={loading}
                    >
                        {loading ? "Yuborilmoqda..." : "Qo‘shish"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CategoryAdd;
