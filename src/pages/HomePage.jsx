import React, { useEffect, useState } from 'react';
import { Banner, ProductsAll, ProductCategories } from '../components';
import { fetchData } from '../util/fetchdata';

function HomePage() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchData(
            'Categories/GetAll',
            'categories',
            setCategories,
        )
    }, []);

    return (
        <div>
            <Banner />
            <ProductsAll />

            <div className="space-y-12 mt-8">
                {categories.map((cat) => (
                    <ProductCategories key={cat.id} category={cat} />
                ))}
            </div>
        </div>
    );
}

export default HomePage;
