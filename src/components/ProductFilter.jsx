import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { fetchData } from '../util/fetchdata';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Option({ label, link }) {
    const navigate = useNavigate('')
    return (
        <div
            className="p-2 border border-gray-300 rounded-md hover:bg-gray-200 cursor-pointer"
            onClick={() => navigate(`/category/${link}`)}
        >
            {label}
        </div>
    );
}

function ProductFilter() {
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [isCategoriesVisible, setIsCategoriesVisible] = useState(true);
    const [isBrandsVisible, setIsBrandsVisible] = useState(true);

    useEffect(() => {
        fetchData('Categories/GetAll', 'categories', setCategories);
        fetchData('Brends/GetAll', 'brands', setBrands);
    }, []);

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <div className="bg-[#F5F7FF] p-4 rounded-md shadow-md mb-6">
                <h3 className="font-bold text-lg text-gray-800 mb-6">Filter</h3>

                <div className="flex flex-col  gap-4">
                    {/* Category Section */}
                    <div className="w-full">
                        <button
                            onClick={() => setIsCategoriesVisible(!isCategoriesVisible)}
                            className="w-full p-3 text-primary rounded-md shadow-md flex items-center justify-between hover:text-secound transition-all duration-200 cursor-pointer"
                        >
                            <span>Categories</span>
                            {isCategoriesVisible ? <FaChevronUp /> : <FaChevronDown />}
                        </button>

                        {/* Category Filter Options */}
                        {isCategoriesVisible && (
                            <div className="flex flex-col gap-2 mt-3">
                                {categories.map((cat) => (
                                    <Option
                                        key={cat.id}
                                        label={cat.categoryName}
                                        link={cat.categoryName.toLowerCase()}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Brand Section */}
                    <div className="w-full">
                        <button
                            onClick={() => setIsBrandsVisible(!isBrandsVisible)}
                            className="w-full p-3 text-primary rounded-md shadow-md flex items-center justify-between hover:text-secound transition-all duration-200 cursor-pointer"
                        >
                            <span>Brands</span>
                            {isBrandsVisible ? <FaChevronUp /> : <FaChevronDown />}
                        </button>

                        {/* Brand Filter Options */}
                        {isBrandsVisible && (
                            <div className="flex flex-col gap-2 mt-3">
                                {brands.map((brand) => (
                                    <Option
                                        key={brand.id}
                                        label={brand.brendName}
                                        link={brand.brendName.toLowerCase()}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductFilter;
