import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ProductCard } from './index';

// icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// fetch function
import { fetchData } from '../util/fetchdata';

function ProductsAll() {
    const [more, setMore] = useState(10);
    const [isCategoryPage, setIsCategoryPage] = useState(false);
    const [data, setData] = useState([]);

    const pathname = useLocation().pathname;

    useEffect(() => {
        fetchData(
            'Products/GetAllProducts?sort=false',
            'products',
            setData,
        );
    }, []);

    useEffect(() => {
        setIsCategoryPage(pathname.includes('/category'));
    }, [pathname]);

    return (
        <section className="hidden md:block py-8 px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <div className={`${isCategoryPage ? 'hidden' : 'flex'} items-center justify-between mb-6`}>
                <h2 className='flex items-center gap-2 text-2xl md:text-3xl font-bold'>
                    Hammasi
                    <MdOutlineKeyboardArrowRight className="text-3xl sm:text-4xl" />
                </h2>
            </div>

            {/* Products grid */}
            <div className={`grid gap-6 ${isCategoryPage ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'}`}>
                {data.slice(0, more).map(item => (
                    <ProductCard key={item.id} data={item} />
                ))}
            </div>

            {/* Load more button */}
            {more < data.length && (
                <div className="flex justify-center mt-8">
                    <button
                        className="inline-block bg-primary hover:bg-primaryDark text-white font-semibold text-base sm:text-lg px-6 py-2.5 rounded-md transition duration-200 cursor-pointer"
                        onClick={() => setMore(prev => prev + 10)}
                    >
                        Yana ko'rish 10
                    </button>
                </div>
            )}
        </section>
    );
}

export default ProductsAll;
