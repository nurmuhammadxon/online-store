import React, { useEffect, useState } from "react";
import axios from "axios";

function BannerList() {
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        const fetchDataGet = async () => {
            try {
                const res = await axios.get(`https://techstationapi-epe0ggbffchncbbc.canadacentral-01.azurewebsites.net/api/Banners/GetAll`);
                setBanners(res.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchDataGet()
    }, []);

    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {banners.map((banner) => {
                return (
                    <div key={banner.id} className="rounded-xl shadow-md overflow-hidden bg-white">
                        <img
                            src={`https://techstationapi-epe0ggbffchncbbc.canadacentral-01.azurewebsites.net/${banner.images.split(';')[0]}`}
                            alt={`Banner ${banner.id}`}
                            className="w-full h-52"
                        />
                        <div className="p-4">
                            <p className="text-sm text-gray-600">
                                Banner id: {banner.id}
                            </p>
                            <p className="text-sm text-gray-600">
                                Brend id: {banner.brendId}
                            </p>
                            <p className="text-sm text-gray-600">
                                Kategoriya ID: {banner.categoryId}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default BannerList;
