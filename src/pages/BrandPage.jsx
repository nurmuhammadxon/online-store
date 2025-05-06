import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../util/fetchdata';
import { ProductCard } from '../components';

function BrandPage() {
    const { brandName } = useParams();
    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([]);
    const [visibleCount, setVisibleCount] = useState(10);

    useEffect(() => {
        fetchData('Brends/GetAll', 'brands', setBrands);
        fetchData('Products/GetAllProducts?sort=false', 'products', setProducts);
    }, []);

    const brand = brands.find(b => b.brendName.toLowerCase() === brandName?.toLowerCase());
    const filteredProducts = brand ? products.filter(p => p.brendId === brand.id) : [];

    const visibleProducts = filteredProducts.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 10);
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4 capitalize">{brandName} brendi mahsulotlari</h2>

            {visibleProducts.length === 0 ? (
                <p>Mahsulotlar topilmadi.</p>
            ) : (
                <>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {visibleProducts.map(product => (
                            <ProductCard key={product.id} data={product} />
                        ))}
                    </div>

                    {visibleCount < filteredProducts.length && (
                        <div className="flex justify-center mt-6">
                            <button
                                onClick={handleLoadMore}
                                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            >
                                Ko‘proq ko‘rish
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default BrandPage;
