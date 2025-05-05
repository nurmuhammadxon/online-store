import React, { useState } from 'react';
import axios from 'axios';

function ProductsAdd() {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [brendId, setBrendId] = useState('');
    const [images, setImages] = useState(['', '', '']);
    const [isLoading, setIsLoading] = useState(false);

    const addImageInput = () => {
        if (images.length < 10) {
            setImages([...images, '']);
        } else {
            alert('Maksimal rasm soniga erishdingiz (10 ta).');
        }
    };

    const handleImageChange = (e, index) => {
        const updatedImages = [...images];
        updatedImages[index] = e.target.files[0];
        setImages(updatedImages);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('categoryId', categoryId);
        formData.append('brendId', brendId);

        images.forEach((image) => {
            if (image) {
                formData.append('images', image);
            }
        });

        try {
            await axios.post('https://techstationapi-epe0ggbffchncbbc.canadacentral-01.azurewebsites.net/api/Products/Add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert("Mahsulot muvaffaqiyatli qo'shildi!");
        } catch (error) {
            console.error("Error:", error);
            alert("Mahsulotni qo'shishda xatolik yuz berdi.", error);
        } finally {
            setProductName('');
            setPrice('');
            setDescription('');
            setCategoryId('');
            setBrendId('');
            setImages(['', '', '']);
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full py-8 lg:py-10 px-5">
            <h1 className="text-[#1f2026] font-semibold text-2xl ml-2">Mahsulotni qo'shish</h1>
            <form onSubmit={handleSubmit} className="mt-6">
                <div>
                    <label className="block">Mahsulot nomi:</label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Mahsulot nomini kiriting"
                    />
                </div>
                <div className="mt-4">
                    <label className="block">Narx:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Narxni kiriting"
                    />
                </div>
                <div className="mt-4">
                    <label className="block">Tavsif:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Mahsulot haqida ma'lumot"
                    ></textarea>
                </div>
                <div className="mt-4">
                    <label className="block">Kategoriya ID:</label>
                    <input
                        type="number"
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Kategoriya ID ni kiriting"
                    />
                </div>
                <div className="mt-4">
                    <label className="block">Brend ID:</label>
                    <input
                        type="number"
                        value={brendId}
                        onChange={(e) => setBrendId(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Brend ID ni kiriting"
                    />
                </div>

                <div className="mt-4">
                    <label className="block">Rasm(lar):</label>
                    {images.map((image, index) => (
                        <div key={index} className="flex items-center mt-2">
                            <input
                                type="file"
                                onChange={(e) => handleImageChange(e, index)}
                                className="p-2 border border-gray-300 rounded-md"
                            />
                            <button
                                type="button"
                                onClick={() => {
                                    const updatedImages = [...images];
                                    updatedImages.splice(index, 1);
                                    setImages(updatedImages);
                                }}
                                className="ml-2 text-red-600 cursor-pointer"
                            >
                                O'chirish
                            </button>
                        </div>
                    ))}
                    {images.length < 10 && (
                        <button
                            type="button"
                            onClick={addImageInput}
                            className="mt-2 px-6 py-2 bg-green-600 text-white rounded-md cursor-pointer"
                        >
                            Yangi rasm qo'shish
                        </button>
                    )}
                </div>

                <div className="mt-6">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded-md cursor-pointer"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Yuklanmoqda...' : 'Mahsulotni qo\'shish'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ProductsAdd;
