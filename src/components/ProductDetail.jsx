import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchData } from '../util/fetchdata';

function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [mainImage, setMainImage] = useState('');

    useEffect(() => {
        fetchData(
            'Products/GetAllProducts?sort=false',
            'products',
            (data) => {
                const foundProduct = data.find(p => p.id === Number(productId));
                if (foundProduct) {
                    setProduct(foundProduct);
                    const images = foundProduct.images?.split(";") || [];
                    setMainImage(images[0]);
                } else {
                    setProduct(null);
                }
            },
            setError
        );
    }, [productId]);

    if (error) {
        return (
            <div className="p-6 text-center bg-red-100 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-red-600">❌ Xatolik yuz berdi</h2>
                <p className="mt-2 text-lg text-gray-800">{error.message}</p>
                <Link to="/category" className="mt-4 inline-block text-blue-600 hover:underline">Category</Link>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="p-6 text-center bg-yellow-100 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-red-600">❌ Mahsulot topilmadi</h2>
                <Link to="/category" className="mt-4 inline-block text-blue-600 hover:underline">Category</Link>
            </div>
        );
    }

    const images = product.images ? product.images.split(";") : [];

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
            <div className="grid grid-cols-12 gap-6">
                {/* Chap rasm galereyasi */}
                <div className="col-span-2 flex flex-col gap-4">
                    {images.length > 0 ? (
                        images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setMainImage(image)}
                                className={`size-20 p-1 border border-primary rounded-lg transition hover:ring-2 hover:ring-strongBlue ${image === mainImage ? 'border-none ring-2 ring-blue-800' : ''
                                    }`}
                            >
                                <img
                                    src={`https://techstationapi-epe0ggbffchncbbc.canadacentral-01.azurewebsites.net/${image}`}
                                    alt={`Rasm ${index + 1}`}
                                    className="rounded-md object-cover w-full h-full"
                                />
                            </button>
                        ))
                    ) : (
                        <p className="text-gray-500">Rasm mavjud emas</p>
                    )}
                </div>

                {/* Asosiy rasm */}
                <div className="col-span-6 flex justify-center items-center">
                    {mainImage ? (
                        <img
                            className="rounded-lg shadow-xl transition-transform hover:scale-105 max-w-xl w-full max-h-[500px] object-contain"
                            src={`https://techstationapi-epe0ggbffchncbbc.canadacentral-01.azurewebsites.net/${mainImage}`}
                            alt="Asosiy mahsulot rasmi"
                        />
                    ) : (
                        <p className="text-gray-500">Rasm yuklanmadi</p>
                    )}
                </div>

                {/* Mahsulot ma'lumotlari */}
                <div className="col-span-4 bg-white p-6 rounded-lg shadow-lg flex flex-col gap-6">
                    <div className="flex justify-between items-center">
                        <p className="text-2xl font-semibold text-gray-900">{product.price.toLocaleString()} so'm</p>
                    </div>

                    <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primaryDark transition">
                        Savatchaga qo‘shish
                    </button>

                    <ul className="text-sm text-gray-600 list-disc pl-5">
                        <li>5 dona xarid qilish mumkin</li>
                        <li>Bu haftada 100+ kishi sotib oldi</li>
                    </ul>

                    <div className="bg-gray-50 p-3 rounded-lg border text-sm text-gray-700">
                        <p className="font-semibold">Yetkazib berish 1 kundan boshlab</p>
                    </div>
                </div>
            </div>

            {/* Tavsif */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800">Mahsulot tavsifi</h2>
                <p className="text-gray-600 mt-2">{product.description || 'Tavsif mavjud emas'}</p>
            </div>

            <Link
                to="/category"
                className="mt-6 inline-block bg-primary hover:bg-primaryDark text-white py-2 px-6 rounded-lg transition-all duration-200"
            >
                ← Orqaga
            </Link>
        </div>
    );
}

export default ProductDetail;
