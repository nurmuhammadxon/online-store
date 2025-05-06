import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BannerRemove() {
    const [banner, setBanner] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchDataGet = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`https://techstationapi-epe0ggbffchncbbc.canadacentral-01.azurewebsites.net/api/Banners/GetAll`);
                if (res.data && res.data.length > 0) {
                    setBanner(res.data[0]); // Faqat 1-bannerni ko'rsatamiz
                } else {
                    setBanner(null);
                }
            } catch (error) {
                setError("Ma'lumotlarni olishda xatolik yuz berdi.");
            } finally {
                setLoading(false);
            }
        };

        fetchDataGet();
    }, []);

    const deleteBanner = async () => {
        const confirmDelete = window.confirm("Haqiqatan ham bannerni o'chirmoqchimisiz?");
        if (!confirmDelete || !banner?.id) return;

        try {
            await axios.delete(`https://techstationapi-epe0ggbffchncbbc.canadacentral-01.azurewebsites.net/api/Banner/Delete/${banner.id}`);
            setBanner(null);
            alert("Banner o'chirildi!");
        } catch (err) {
            setError("O'chirishda xatolik! Iltimos qayta urinib ko'ring.");
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center text-primary">
                Banner boshqaruvi
            </h1>

            {loading && <div className="text-center text-blue-500">Yuklanmoqda...</div>}
            {error && <div className="text-center text-red-500">{error}</div>}

            {!loading && !banner && (
                <div className="text-center text-gray-500">Banner mavjud emas.</div>
            )}

            {!loading && banner && (
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Rasm qismi */}
                    {banner.images && (
                        <img
                            src={`https://techstationapi-epe0ggbffchncbbc.canadacentral-01.azurewebsites.net/${banner.images.split(';')[0]}`}
                            alt="Banner rasmi"
                            className="w-full h-64 object-cover"
                        />
                    )}

                    {/* Matn qismi */}
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold text-gray-800">{banner.title}</h2>
                        <p className="text-gray-600 mt-2">{banner.message}</p>
                    </div>

                    {/* Tugmalar */}
                    <div className="flex justify-end gap-4 p-4 bg-gray-100">
                        <button
                            onClick={deleteBanner}
                            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
                        >
                            O‘chirish
                        </button>
                        <button
                            onClick={() => alert("Banner ochilgan holatda")}
                            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
                        >
                            Ko‘rsatish
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BannerRemove;
