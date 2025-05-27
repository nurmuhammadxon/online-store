import React from 'react';
import { ProductCard } from './index';

function ProductSearch({ data }) {
    return (
        <>
            {
                data && data.length > 0 ? (
                    data.map((item, index) => (
                        <ProductCard key={index} data={item} />
                    ))
                ) : (
                    <p className='text-red-800 text-center text-lg'>Mahsulotlar topilmadi</p>
                )
            }
        </>
    );
}

export default ProductSearch;
