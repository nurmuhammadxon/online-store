import React from 'react'

import { ProductCatalog } from './index'

import { Products } from '../util/Constants'

function Categories() {
    return (
        <div>
            <ProductCatalog data={Products} title='Mashxurlar' link='/category/celebrities' />
            <ProductCatalog data={Products} title='Kampyuterlar' link='/category/computers' />
            <ProductCatalog data={Products} title='Noutbook' link='/category/noutbooks' />
        </div>
    )
}

export default Categories