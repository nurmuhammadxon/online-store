import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="text-2xl mt-4 text-gray-800">Sahifa topilmadi</p>
            <p className="text-gray-600 mt-2">Siz izlayotgan sahifa mavjud emas yoki o‘chirilgan bo‘lishi mumkin.</p>
            <button
                onClick={() => navigate('/')}
                className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Bosh sahifaga qaytish
            </button>
        </div>
    );
};

export default ErrorPage;
