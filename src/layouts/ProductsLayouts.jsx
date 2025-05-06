import React from 'react';
import { Outlet } from 'react-router-dom';
import { ProductFilter } from '../components';

function ProductsLayouts() {
    return (
        <div className="flex flex-col md:flex-row gap-0 md:gap-16 lg:gap-1">
            <div className="md:sticky md:top-4 md:w-1/4 p-4">
                <ProductFilter />
            </div>
            <div className="w-full md:w-3/4 p-4">
                <Outlet />
            </div>
        </div>
    );
}

export default ProductsLayouts;
