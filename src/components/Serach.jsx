import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Serach({ onSearch }) {
    const [input, setInput] = useState('');
    const [categories, setCategories] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const navigate = useNavigate();

    const handleSearch = async () => {
        if (input.trim() === '') return;

        try {
            const response = await axios.get(
                `https://techstationapi-epe0ggbffchncbbc.canadacentral-01.azurewebsites.net/api/Products/SearchProducts/search?searchTerm=${input}`
            );
            const categoryList = response.data.categories || [];
            setCategories(categoryList);
            onSearch(input);
            setShowSuggestions(true);
        } catch (error) {
            console.error('Qidiruvda xatolik:', error);
        }
    };

    return (
        <div className='hidden w-full max-w-xs md:block sm:max-w-sm md:max-w-md lg:max-w-lg'>
            <form action="" className='w-full'>
                <label className='flex items-center justify-between pl-2 border rounded-full focus-within:shadow'>
                    <input
                        type="search"
                        placeholder='Search'
                        className='w-full outline-none pl-3.5'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <span
                        className='text-lg min-w-[50px] h-8 flex items-center justify-center rounded-r-full text-white bg-primary'
                        onClick={handleSearch}
                    >
                        <FaSearch />
                    </span>
                </label>
            </form>

            {/* Kategoriyalarni ko'rsatish */}
            {showSuggestions && categories.length > 0 && (
                <div className="mt-2 bg-white border rounded-md shadow-lg absolute z-10 w-full max-h-60 overflow-y-auto">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className="w-full text-left px-4 py-2 hover:bg-gray-100"
                            onClick={() => navigate(`/category/${category.id}`)} // Kategoriya sahifasiga o'tish
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            )}
        </div>)
}

export default Serach