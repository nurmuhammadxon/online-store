import React from 'react'

// components
import { Banner, Categories, ProductsBox } from '../components/index'


function HomePage() {
    return (
        <div>
            <Banner />
            <ProductsBox />
            <Categories />
        </div>
    )
}

export default HomePage