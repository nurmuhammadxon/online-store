import React from 'react'
import { Outlet } from 'react-router-dom'

function ProductCardLayout() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Mahsulotlar</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <Outlet />
            </div>
        </div>
    )
}

export default ProductCardLayout
