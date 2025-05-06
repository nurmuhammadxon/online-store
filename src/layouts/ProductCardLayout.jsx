import React from 'react'
import { Outlet } from 'react-router-dom'

function ProductCardLayout() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Mahsulotlar</h1>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default ProductCardLayout
