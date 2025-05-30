import React, { useState } from 'react';
import axios from 'axios';

function BannerAdd() {
    const [images, setImages] = useState([null, null, null]);
    const [brendId, setBrendId] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const addImageInput = () => {
        if (images.length < 10) {
            setImages([...images, null]);
        } else {
            alert('Maksimal 10 ta rasm qo‘shish mumkin.');
        }
    };

    const handleImageChange = (e, index) => {
        const updatedImages = [...images];
        updatedImages[index] = e.target.files[0];
        setImages(updatedImages);
    };

    const removeImageInput = (index) => {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validImages = images.filter(img => img !== null);
        if (validImages.length < 3 || validImages.length > 10) {
            setError('Iltimos, 3 tadan 10 tagacha rasm tanlang.');
            setSuccess('');
            return;
        }
        if (!brendId || !categoryId) {
            setError('Brend ID va Kategoriya ID ni kiriting.');
            setSuccess('');
            return;
        }

        setError('');
        setIsLoading(true);

        const formData = new FormData();
        validImages.forEach((image) => {
            formData.append('Images', image);
        });
        formData.append('BrendId', brendId);
        formData.append('CategoryId', categoryId);

        try {
            await axios.post('https://165.232.87.222/api/Banners/Add', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setSuccess('Banner muvaffaqiyatli qo‘shildi!');
            setError('');
            setImages([null, null, null]);
            setBrendId('');
            setCategoryId('');
        } catch (error) {
            setError('Serverda xatolik yuz berdi.');
            setSuccess('');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Yangi Banner Qo‘shish</h2>

            {error && <p className="text-red-500 mb-3">{error}</p>}
            {success && <p className="text-green-500 mb-3">{success}</p>}

            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Rasmlar (3 - 10):</label>
                    {images.map((image, index) => (
                        <div key={index} className="flex items-center mt-2">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageChange(e, index)}
                                className="p-2 border rounded w-full"
                            />
                            <button
                                type="button"
                                onClick={() => removeImageInput(index)}
                                className="ml-2 text-red-600"
                            >
                                O‘chirish
                            </button>
                        </div>
                    ))}
                    {images.length < 10 && (
                        <button
                            type="button"
                            onClick={addImageInput}
                            className="mt-2 px-4 py-2 bg-green-600 text-white rounded"
                        >
                            Yangi rasm qo‘shish
                        </button>
                    )}
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
                    disabled={isLoading}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    {isLoading ? 'Yuklanmoqda...' : 'Yuborish'}
                </button>
            </form>
        </div>
    );
}

export default BannerAdd;
