import React, { useEffect, useState } from 'react';
import axios from 'axios';

// componetns 
import { InputField } from '../../components';

import { fetchData } from '../../util/fetchdata';

function BrendUpdate() {
    const [brends, setBrends] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        brendName: ''
    });

    useEffect(() => {
        fetchData(
            'Brends/GetAll',
            'brands',
            setBrends,
            setError,
            setLoading
        )
    }, []);

    const openModal = (brend) => {
        setFormData(brend);
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

    const updatebrendalog = async (id) => {
        try {
            await axios.put(`https://techstationapi-epe0ggbffchncbbc.canadacentral-01.azurewebsites.net/api/Brends/Modify/${id}`, formData);
            closeModal();
        } catch (error) {
            console.error('Yangilashda xatolik:', error);
            alert("Yangilashda xatolik! Iltimos qayta urinib ko'ring");
        }
    };

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center text-primary">
                Brendlar ro‘yxati
            </h1>

            {loading && <p className="text-center text-blue-500">Yuklanmoqda...</p>}
            {error && alert(error)}

            {!loading && brends.length === 0 && (
                <p className="text-center text-gray-500">Brendlar mavjud emas.</p>
            )}

            {!loading && brends.length > 0 && (
                <div className="overflow-x-auto">
                    <table className="w-full table-auto border-collapse border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-3 border">#</th>
                                <th className="p-3 border">Brend nomi</th>
                                <th className="p-3 border text-gray-500">Brend id</th>
                                <th className="p-3 border">Amal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {brends.map((brend, idx) => (
                                <tr key={brend.id} className="hover:bg-gray-50">
                                    <td className="p-3 border text-center">{idx + 1}</td>
                                    <td className="p-3 border">{brend.brendName}</td>
                                    <td className="p-3 border text-center text-gray-500">{brend.id}</td>
                                    <td className="p-3 border text-center">
                                        <button
                                            onClick={() => openModal(brend)}
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
                        <h2 className="text-xl font-semibold mb-4 text-center">Brendni tahrirlash</h2>
                        <div className="flex flex-col gap-5">
                            <InputField
                                label="Brend nomi"
                                type="text"
                                name="brendName"
                                value={formData.brendName}
                                onChange={handleChange}
                                placeholder="Brend nomi"
                                required
                            />
                        </div>

                        <div className="flex justify-end gap-3 mt-6">
                            <button
                                onClick={closeModal}
                                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded cursor-pointer"
                            >
                                Bekor qilish
                            </button>
                            <button
                                onClick={() => updatebrendalog(formData.id)}
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

export default BrendUpdate;
