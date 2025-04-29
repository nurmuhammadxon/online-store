import React from 'react'

import { ProductCatalog } from './index'

import { Products } from '../util/Constants'

function Categories() {
    return (
        <div>
            <ProductCatalog data={Products} title='Mashxurlar' link='/' />
            <ProductCatalog data={Products} title='Kampyuterlar' link='/' />
            <ProductCatalog data={Products} title='Noutbook' link='/' />
        </div>
    )
}

export default Categories