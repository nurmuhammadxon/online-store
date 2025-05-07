import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../util/fetchdata';
import { ProductCard } from '../components';

function CategoryPage() {
    const { categoryName } = useParams();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [visibleCount, setVisibleCount] = useState(10);

    useEffect(() => {
        fetchData('Categories/GetAll', 'categories', setCategories);
        fetchData('Products/GetAllProducts?sort=false', 'products', setProducts);
    }, []);

    const category = categories.find(c => c.categoryName.toLowerCase() === categoryName?.toLowerCase());
    const filteredProducts = category ? products.filter(p => p.categoryId === category.id) : [];

    const visibleProducts = filteredProducts.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 10);
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4 capitalize">{categoryName} mahsulotlari</h2>

            {visibleProducts.length === 0 ? (
                <p>Mahsulotlar topilmadi.</p>
            ) : (
                <>
                  <div className="grid grid-cols-1 min-[450px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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

export default CategoryPage;
