import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { fetchData } from '../../util/fetchdata';
import { ProductCard } from '../../components';

function FavouritesList() {
    const [favourites, setFavourites] = useState([]);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()
    const auth = sessionStorage.getItem('auth')
    const navigateLink = auth ? '/' : '/signin'

    useEffect(() => {
        fetchData('Favourites/GetAll', 'favourites', setFavourites);
    }, []);

    useEffect(() => {
        if (favourites.length > 0) {
            const productIds = favourites.map(item => item.productId);
            fetchProducts(productIds);
        }
    }, [favourites]);

    const fetchProducts = async (productIds) => {
        try {
            const response = await axios.get(
                'http://165.232.87.222:5000/api/Products/GetAllProducts',
                {
                    params: {
                        sort: false,
                        ids: productIds.join(','),
                    },
                }
            );
            const filteredProducts = response.data.data.products.filter(product =>
                productIds.includes(product.id)
            );
            setProducts(filteredProducts);
        } catch (error) {
            console.error('Mahsulotlarni olishda xatolik yuz berdi', error);
        }
    };

    return (
        <div className="container p-6 mx-auto max-w-7xl">
            <h2 className="mb-6 text-3xl font-semibold text-gray-900">Sevimlilar Ro'yxati</h2>
            {products.length > 0 ? (
                <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {products.map((product) => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </div>
            ) : (
                <div className='w-full flex flex-col items-center justify-center'>
                    <p className="text-gray-500 text-xl">
                        Sevimlilarda hech qanday mahsulot yo'q.
                    </p>
                    <button
                        onClick={() => navigate(navigateLink)}
                        className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition duration-200 ease-in-out cursor-pointer"
                    >
                        {auth ? "Bosh sahifaga qaytish" : 'Hisobga kirish'}
                    </button>
                </div>
            )}
        </div>
    );
}

export default FavouritesList;
