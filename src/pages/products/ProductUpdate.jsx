import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchData } from '../../util/fetchdata';

function ProductUpdate() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchData(
            'Products/GetAllProducts?sort=false',
            'products',
            setProducts,
        )
    }, []);

    const handleEditClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedProduct(prev => ({
            ...prev,
            [name]: name === 'price' || name === 'categoryId' || name === 'brendId' ? Number(value) : value
        }));
    };

    const handleImageChange = (e) => {
        const files = e.target.files;
        if (files.length >= 3 && files.length <= 10) {
            const imageFiles = Array.from(files);
            setSelectedProduct(prev => ({
                ...prev,
                imageFiles: imageFiles
            }));
        } else {
            alert("Rasmlar soni kamida 3 ta, maksimal 10 ta bo'lishi kerak!");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("productName", selectedProduct.productName);
            formData.append("price", selectedProduct.price);
            formData.append("description", selectedProduct.description);
            formData.append("categoryId", selectedProduct.categoryId);
            formData.append("brendId", selectedProduct.brendId);

            if (selectedProduct.imageFiles) {
                selectedProduct.imageFiles.forEach(file => {
                    formData.append("images", file);
                });
            }

            await axios.put(
                `https://techstationapi-epe0ggbffchncbbc.canadacentral-01.azurewebsites.net/api/Products/Modify/${selectedProduct.id}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            alert("Mahsulot muvaffaqiyatli yangilandi!");
            handleModalClose();
        } catch (err) {
            console.error("Xatolik:", err.response?.data || err.message);
            alert("Xatolik: " + (err.response?.data?.message || err.message));
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Mahsulotlar ro'yxati</h2>
            <table className="w-full border">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2 border">ID</th>
                        <th className="p-2 border">Nomi</th>
                        <th className="p-2 border">Tavsifi</th>
                        <th className="p-2 border">Narxi</th>
                        <th className="p-2 border">Amallar</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        return (
                            <tr key={product.id} className="hover:bg-gray-50">
                                <td className="p-2 border text-center">{product.id}</td>
                                <td className="p-2 border text-center">{product.productName}</td>
                                <td className="p-2 border text-center">{product.description}</td>
                                <td className="p-2 border text-center">{product.price}</td>
                                <td className="p-2 border text-center">
                                    <button
                                        onClick={() => handleEditClick(product)}
                                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 cursor-pointer"
                                    >
                                        Tahrirlash
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {/* Modal */}
            {isModalOpen && selectedProduct && (
                <div className="flex items-center justify-center">
                    <div className="fixed inset-0 w-full z-30 bg-[#00000080]" onClick={handleModalClose}></div>
                    <div className="bg-white rounded p-6 w-full max-w-lg relative z-50">
                        <button onClick={handleModalClose} className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl">×</button>
                        <h2 className="text-xl font-semibold mb-4">Mahsulotni tahrirlash</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                            <input
                                type="text"
                                name="productName"
                                value={selectedProduct.productName}
                                onChange={handleChange}
                                placeholder="Mahsulot nomi"
                                className="border p-2 rounded"
                                required
                            />
                            <input
                                type="number"
                                name="price"
                                value={selectedProduct.price}
                                onChange={handleChange}
                                placeholder="Narxi"
                                className="border p-2 rounded"
                                required
                            />
                            <textarea
                                name="description"
                                value={selectedProduct.description}
                                onChange={handleChange}
                                placeholder="Tavsif"
                                className="border p-2 rounded"
                            />
                            <input
                                type="number"
                                name="categoryId"
                                value={selectedProduct.categoryId}
                                onChange={handleChange}
                                placeholder="Kategoriya ID"
                                className="border p-2 rounded"
                            />
                            <input
                                type="number"
                                name="brendId"
                                value={selectedProduct.brendId}
                                onChange={handleChange}
                                placeholder="Brend ID"
                                className="border p-2 rounded"
                            />
                            {/* Fayllarni tanlash */}
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleImageChange}
                                className="border p-2 rounded"
                            />
                            <button
                                type="submit"
                                className="bg-green-600 text-white py-2 rounded hover:bg-green-700 cursor-pointer">
                                Saqlash
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductUpdate;
