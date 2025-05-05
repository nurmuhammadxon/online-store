import React, { useEffect, useState } from 'react';
import { fetchData } from '../../util/fetchdata';

function BrendList() {
    const [brends, setBrends] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData(
            'Brends/GetAll',
            'brands',
            setBrends,
            setError,
            setLoading
        )
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 p-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
                    Brendlar Ro‘yxati
                </h2>

                {error && (
                    <div className="bg-red-100 text-red-700 p-4 rounded mb-4 text-center">
                        {error}
                    </div>
                )}

                {loading ? (
                    <div className="flex justify-center items-center h-40">
                        <span className="ml-2 text-blue-700 font-medium">Yuklanmoqda...</span>
                    </div>
                ) : brends.length === 0 ? (
                    <p className="text-center text-gray-500">Hech qanday Brend topilmadi.</p>
                ) : (
                    <div className="overflow-x-auto shadow rounded-lg">
                        <table className="table-auto w-full border border-gray-300">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="p-2 border">#</th>
                                    <th className="p-2 border">Brend nomi</th>
                                    <th className="p-2 border text-gray-600">Brend ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {brends.map((brend, idx) => (
                                    <tr key={brend.id} className="hover:bg-gray-50">
                                        <td className="p-2 border text-center">{idx + 1}</td>
                                        <td className="p-2 border">{brend.brendName}</td>
                                        <td className="p-2 border text-center text-gray-500">{brend.id}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BrendList;
