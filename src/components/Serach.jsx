import React, { useState } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ProductSearch } from '.';

function Search() {
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const [searchData, setSearchData] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (input.trim() === '') return;

        try {
            const response = await axios.get(
                `http://165.232.87.222:5000/api/Products/SearchProducts/search?searchTerm=${input}`
            );

            setSearchData(response.data);

            navigate('/search-product', { state: { searchData: response.data } });
        } catch (error) {
            console.error('Qidiruvda xatolik:', error);
            alert("Qidiruvda xatolik yuz berdi.");
        }
    };

    return (
        <>
            <div className='hidden w-full max-w-xs md:block sm:max-w-sm md:max-w-md lg:max-w-lg'>
                <form onSubmit={handleSearch}>
                    <label className='flex items-center justify-between pl-2 border rounded-full focus-within:shadow'>
                        <input
                            type="search"
                            placeholder='Search'
                            className='w-full outline-none pl-3.5'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button
                            type="submit"
                            className='text-lg min-w-[50px] h-8 flex items-center justify-center rounded-r-full text-white bg-primary'
                            onClick={(e) => handleSearch(e)}
                        >
                            <FaSearch />
                        </button>
                    </label>
                </form>
            </div>
            <div className='hidden'>
                <ProductSearch data={searchData} />
            </div>
        </>
    );
}

export default Search;
