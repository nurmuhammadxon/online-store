import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BannerRemove() {
    const [banners, setBanners] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchDataGet = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`https://165.232.87.222/api/Banners/GetAll`);
            setBanners(res.data);
        } catch (error) {
            setError("Ma'lumotlarni olishda xatolik yuz berdi.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDataGet();
    }, []);

    const deleteBanner = async (id) => {
        const confirmDelete = window.confirm("Haqiqatan ham bannerni o'chirmoqchimisiz?");
        if (!confirmDelete || !id) return;

        try {
            await axios.delete(`https://165.232.87.222/api/Banners/Delete/${id}`);
            alert("Banner o'chirildi!");
            fetchDataGet();
        } catch (err) {
            setError("O'chirishda xatolik! Iltimos qayta urinib ko'ring.");
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center text-primary">
                Bannerlar Ro'yxati
            </h1>

            {loading && <div className="text-center text-blue-500">Yuklanmoqda...</div>}
            {error && <div className="text-center text-red-500">{error}</div>}

            {!loading && (!banners || banners.length === 0) && (
                <div className="text-center text-gray-500">Banner mavjud emas.</div>
            )}

            {banners && banners.map(banner => (
                <div key={banner.id} className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
                    <img
                        src={`https://165.232.87.222/${banner.images?.split(';')[0]}`}
                        alt="Banner rasmi"
                        className="w-full h-64 object-cover"
                    />
                    <div className="flex items-center justify-between gap-4 p-4 bg-gray-100">
                        <div className="flex gap-5">
                            <p className="text-sm text-gray-600">
                                Banner id: {banner.id}
                            </p>
                            <p className="text-sm text-gray-600">
                                Brend id: {banner.brendId}
                            </p>
                            <p className="text-sm text-gray-600">
                                Kategoriya ID: {banner.categoryId}
                            </p>
                        </div>
                        <button
                            onClick={() => deleteBanner(banner.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
                        >
                            O‘chirish
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BannerRemove;
