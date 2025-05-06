import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../util/fetchdata';

function Navbar() {
    const [categories, setCategories] = useState([]);
    const [catalogs, setCatalogs] = useState([]);
    const [hoveredCatalog, setHoveredCatalog] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        fetchData('Catalogs/GetAll', 'catalogs', setCatalogs);
        fetchData('Categories/GetAll', 'categories', setCategories);
    }, []);

    return (
        <>
            <div className="hidden md:block bg-white shadow-sm mt-1.5 py-2.5 px-2.5">
                <div className="w-full mx-auto flex gap-4 overflow-x-auto">
                    <button
                        className="flex items-center justify-center gap-1.5 py-1 px-3 bg-gray-50 rounded-xl border hover:bg-blue-100 cursor-pointer transition duration-200"
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        <p className="text-xs font-medium text-gray-700 text-center">Barchasi</p>
                    </button>
                    {categories.map((item, index) => (
                        <Link
                            to={`/category/${item.categoryName.toLowerCase()}`}
                            key={index}
                            className="flex items-center justify-center gap-1.5 py-1 px-3 bg-gray-50 rounded-xl border hover:bg-blue-100 cursor-pointer transition duration-200"
                        >
                            <p className="text-xs font-medium text-gray-700 text-center">
                                {item.categoryName}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Sidebar */}
            {isSidebarOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <div className="relative flex bg-white w-screen h-2/3 shadow-xl rounded-lg overflow-hidden z-50">
                        {/* Catalog List */}
                        <div className="w-1/3 bg-white border-r p-4 overflow-y-auto">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold">Kataloglar</h2>
                                <button
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="text-gray-500 hover:text-black text-xl"
                                >
                                    ✕
                                </button>
                            </div>
                            <ul className="space-y-2">
                                {catalogs.map((catalog) => (
                                    <li
                                        key={catalog.id}
                                        onMouseEnter={() => setHoveredCatalog(catalog)}
                                        className="p-2 rounded-md hover:bg-blue-100 cursor-pointer transition"
                                    >
                                        {catalog.name}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Category List */}
                        <div className="w-2/3 bg-gray-50 p-4 overflow-y-auto">
                            {hoveredCatalog ? (
                                <>
                                    <h3 className="text-md font-semibold text-gray-700 mb-3">
                                        {hoveredCatalog.name} bo‘limlari
                                    </h3>
                                    <div className="grid grid-cols-1 gap-2">
                                        {hoveredCatalog.categories.map((category) => (
                                            <Link
                                                key={category.id}
                                                to={`/category/${category.categoryName.toLowerCase()}`}
                                                className="block bg-white px-3 py-2 rounded shadow hover:bg-blue-50 transition"
                                            >
                                                {category.categoryName}
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <p className="text-gray-500">Katalog ustiga olib boring...</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
