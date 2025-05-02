import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Products } from '../util/Constants';

function ProductDetail() {
    const { productId } = useParams();

    const product = Products.find((item) => item.id.toString() === productId);

    if (!product) {
        return (
            <div className="p-4 text-center">
                <h2 className="text-2xl font-bold text-red-600">❌ Mahsulot topilmadi</h2>
                <Link to="/category" className="text-blue-500 mt-4 inline-block underline">
                    Category
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-700 text-lg mb-2">
                <strong>Kategoriya:</strong> {product.filter}
            </p>
            <p className="text-gray-600 mb-4">{product.aboutProduct || 'Tavsif mavjud emas'}</p>
            <p className="text-xl font-semibold mb-6 text-green-600">
                Narxi: {product.price?.toLocaleString() || 'Noma’lum'} so‘m
            </p>

            <Link
                to="/category"
                className="inline-block bg-primary hover:bg-primaryDark text-white py-2 px-5 rounded transition-all duration-200"
            >
                ← Orqaga
            </Link>
        </div>
    );
}

export default ProductDetail;
