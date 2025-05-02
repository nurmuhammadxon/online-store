import React from 'react';
import { Link } from 'react-router-dom';

import { categories } from '../util/Constants';

function Navbar() {
    return (
        <div className="hidden md:block bg-white shadow-sm mt-1.5 py-2.5 px-2.5">
            <div className="w-full mx-auto flex gap-4 overflow-x-auto scrollbar-hide">
                {categories.map((item, index) => (
                    <Link
                        to={item.path}
                        key={index}
                        className="flex items-center justify-center gap-1.5 py-1 px-3 bg-gray-50 rounded-xl border hover:bg-blue-100 cursor-pointer transition duration-200"
                    >
                        <span className="text-2xl text-blue-600 mb-1">{item.icon}</span>
                        <p className="text-xs font-medium text-gray-700 text-center">{item.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
