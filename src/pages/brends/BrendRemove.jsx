import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchData } from '../../util/fetchdata';

function BrendRemove() {
    const [brends, setBrends] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchData(
            'Brends/GetAll',
            'brands',
            setBrends,
            setError,
            setLoading
        )
    }, []);

    const deleteBrend = async (id) => {

        const confirmDelete = window.confirm("Haqiqatan ham o'chirmoqchimisiz?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`https://165.232.87.222/api/Brends/Delete/${id}`);
            alert("Brend o'chirildi!");
        } catch (err) {
            setError("O'chirishda xatolik! Iltimos qayta urinib ko'ring");
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
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-3 border">#</th>
                                <th className="p-3 border">Brend nomi</th>
                                <th className="p-3 border text-gray-500">Brend id</th>
                                <th className="p-3 border">Amal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {brends.map((item, idx) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="p-3 border text-center">{idx + 1}</td>
                                    <td className="p-3 border">{item.brendName}</td>
                                    <td className="p-3 border text-center text-gray-500">{item.id}</td>
                                    <td className="p-3 border text-center">
                                        <button
                                            onClick={() => deleteBrend(item.id)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition cursor-pointer"
                                        >
                                            O‘chirish
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default BrendRemove;
