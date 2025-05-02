import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Products } from '../../util/Constants';
import { ProductCard } from '../../components/index';

function ProductCategory() {
    const pathname = useLocation().pathname.split('/');
    const category = pathname[pathname.length - 1];
    const [more, setMore] = useState(10);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4">
                {Products
                    .filter(item => item.filter === category)
                    .slice(0, more)
                    .map(item => (
                        <ProductCard key={item.id} data={item} />
                    ))}
            </div>

            {/* Load more button */}
            <div className="flex justify-center mt-8 mb-8">
                <button
                    className="inline-block bg-primary hover:bg-primaryDark text-white font-semibold text-lg sm:text-xl px-6 py-2.5 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => setMore(prev => prev + 10)}
                >
                    Yana ko'rish 10
                </button>
            </div>
        </>
    );
}

export default ProductCategory;
