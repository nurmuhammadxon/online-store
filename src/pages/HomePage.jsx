import React from 'react'

// components
import { Banner, Categories, ProductsAll } from '../components/index'


function HomePage() {
    return (
        <div>
            <Banner />
            <ProductsAll />
            <Categories />
        </div>
    )
}

export default HomePage