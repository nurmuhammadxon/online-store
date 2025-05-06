import React, { useEffect, useState } from 'react';
import { fetchData } from '../../util/fetchdata';

function CatalogList() {
    const [catalogs, setCatalogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData(
            'Catalogs/GetAll',
            'catalogs',
            setCatalogs,
            setError,
            setLoading
        )
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b p-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
                    Katalog Ro‘yxati
                </h2>

                {loading ? (
                    <div className="flex justify-center items-center h-40">
                        <span className="ml-2 text-blue-700 font-medium">Yuklanmoqda...</span>
                    </div>
                ) : error ? (
                    <p className="text-center text-red-600">{error}</p>
                ) : catalogs.length === 0 ? (
                    <p className="text-center text-gray-500">Hech qanday Katalog topilmadi.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border border-gray-300">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="p-2 border">#</th>
                                    <th className="p-2 border">Katalog nomi</th>
                                    <th className="p-2 border text-gray-500">Katalog id</th>
                                </tr>
                            </thead>
                            <tbody>
                                {catalogs.map((catalog, idx) => (
                                    <tr key={catalog.id} className="hover:bg-gray-50">
                                        <td className="p-2 border text-center">{idx + 1}</td>
                                        <td className="p-2 border">{catalog.name}</td>
                                        <td className="p-2 border text-center text-gray-500">{catalog.id}</td>
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

export default CatalogList;
