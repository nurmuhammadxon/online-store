import React, { useState } from 'react';

import { categories } from '../util/Constants'
import { useNavigate } from 'react-router-dom';

function FilterProduct() {
    const navigate = useNavigate()
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    return (
        <div className='w-full md:w-[250px]'>
            <div className='flex flex-col gap-2.5 items-center bg-[#F5F7FF] p-4'>
                <h3 className='font-bold text-base'>Filter</h3>
                {/* Category Filter */}
                <div className='w-full pt-2.5'>
                    <ul className='flex flex-col gap-2 mt-3.5'>
                        {
                            categories
                                .filter(i => i.name !== 'Barchasi')
                                .map((item, index) => (
                                    <li
                                        key={index}
                                        className='flex items-center justify-between font-normal text-base cursor-pointer hover:bg-gray-300 py-1.5 px-1'
                                        onClick={() => navigate(item.path)}
                                    >
                                        <span>{item.name}</span>
                                    </li>
                                ))
                        }
                    </ul>
                </div>

                {/* Price Filter */}
                <div className='w-full pt-2.5'>
                    <div className="flex flex-col gap-2 mt-3.5">
                        <div className="flex gap-2">
                            <input
                                type="number"
                                placeholder="Min Price"
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                                className="p-2 border border-gray-300 rounded-md w-full"
                            />
                            <input
                                type="number"
                                placeholder="Max Price"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                                className="p-2 border border-gray-300 rounded-md w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterProduct;
