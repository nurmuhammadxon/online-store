import React, { useState } from 'react';
import axios from 'axios';

function BannerAdd() {
    const [images, setImages] = useState([]);
    const [brendId, setBrendId] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleImageChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        if (selectedFiles.length < 4 || selectedFiles.length > 10) {
            setError('Iltimos, 4 tadan 10 tagacha rasm tanlang.');
            setImages([]);
        } else {
            setError('');
            setImages(selectedFiles);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (images.length < 4 || images.length > 10) {
            setError('4 tadan 10 tagacha rasm yuborish kerak.');
            return;
        }

        const formData = new FormData();
        images.forEach((image) => {
            formData.append('Images', image);
        });
        formData.append('BrendId', brendId);
        formData.append('CategoryId', categoryId);

        try {
            const res = await axios.post('https://techstationapi-epe0ggbffchncbbc.canadacentral-01.azurewebsites.net/api/Banners/Add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setSuccess('Banner muvaffaqiyatli qo‘shildi!');
            setError('');
        } catch (err) {
            setError('Serverda xatolik yuz berdi.');
            setSuccess('');
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Yangi Banner Qo‘shish</h2>

            {error && <p className="text-red-500 mb-3">{error}</p>}
            {success && <p className="text-green-500 mb-3">{success}</p>}

            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Rasmlar (4 - 10):</label>
                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageChange}
                        className="border p-2 w-full rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-1 font-medium">Brend ID:</label>
                    <input
                        type="number"
                        value={brendId}
                        onChange={(e) => setBrendId(e.target.value)}
                        className="border p-2 w-full rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-1 font-medium">Kategoriya ID:</label>
                    <input
                        type="number"
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                        className="border p-2 w-full rounded"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Yuborish
                </button>
            </form>
        </div>
    );
}

export default BannerAdd;
