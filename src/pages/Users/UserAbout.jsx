import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

// constants
import { usernav } from '../../util/Constants';

function UserAbout() {
    const pathname = useLocation().pathname.split('/')
    const navbarItem = pathname[pathname.length - 1]
    const navigate = useNavigate();
    const [navbar, setNavbar] = useState(navbarItem);

    const user = JSON.parse(sessionStorage.getItem('user'));

    const handleBtn = (navItem, link) => {
        setNavbar(navItem);
        navigate(link);
    };

    if (!user) {
        return (
            <div className="mt-10 font-semibold text-center text-red-600">
                Foydalanuvchi topilmadi. Iltimos, qayta kiring.
            </div>
        );
    }

    return (
        <div className="w-full px-5 py-8 lg:py-10">
            <h1 className="text-[#1f2026] font-semibold text-2xl ml-2">
                {user.firstName} {user.lastName}
            </h1>

            <div className="flex flex-col md:flex-row items-start justify-between mt-6">
                <div className="flex flex-col w-full md:w-1/3 gap-2">
                    {usernav.map((item) => (
                        <button
                            key={item.id}
                            className={`py-3 px-5 text-[#1f2026] rounded-lg text-left transition-all duration-200 ${navbar === item.key ? 'bg-[#0502331f] font-semibold' : 'hover:bg-gray-100'
                                }`}
                            onClick={() => handleBtn(item.key, item.link)}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
                <div className="w-full md:w-2/3 md:px-5">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default UserAbout;
