import React, { useState } from 'react';
import axios from 'axios';
import { InputField } from '../../components';

function BrendAdd() {
    const [formData, setFormData] = useState({
        brendName: '',
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
            brendName: formData.brendName,
        };

        setLoading(true);
        setErrorMessage("");

        try {
            await axios.post('http://165.232.87.222:5000/api/Brends/Add', dataToSend);
            alert('Brend muvaffaqiyatli qo‘shildi!');
        } catch (error) {
            console.error('Xatolik:', error);
            setErrorMessage("Xatolik yuz berdi. Qayta urinib ko‘ring.");
        } finally {
            setLoading(false);
            setFormData({ brendName: '' });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-5 text-center">Yangi Brend Qo‘shish</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <InputField
                        label="Brend nomi"
                        type="text"
                        name="brendName"
                        value={formData.brendName}
                        onChange={handleChange}
                        placeholder="Brend nomi"
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

export default BrendAdd;
