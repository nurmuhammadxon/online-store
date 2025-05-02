import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

// icons
import { CiLogout } from 'react-icons/ci';

// constants
import { usernav } from '../../util/Constants';

// hooks
import { useAuth } from '../../hooks/useAuth';

function UserAbout() {
    const navigate = useNavigate();
    const [navbar, setNavbar] = useState('cartItem');
    const { handleLogout } = useAuth();

    useEffect(() => {
        const isAuth = sessionStorage.getItem('auth')
        if (isAuth) {
            const logoutTimer = setTimeout(() => {
                sessionStorage.removeItem('auth');
                sessionStorage.removeItem('role');
                sessionStorage.removeItem('user');
                navigate('/signin');

            }, 3600000);

            return () => clearTimeout(logoutTimer);
        }
    }, [])

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

            <div className="flex items-start justify-between mt-6">
                <div className="flex flex-col w-1/3 gap-2">
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
                    <button
                        className='text-strongBlue hover:text-red-500 transition-colors duration-300 ease-in-out cursor-pointer font-medium text-xl flex items-center gap-1.5'
                        onClick={handleLogout}
                    >
                        <CiLogout />
                        <span>Chiqish</span>
                    </button>
                </div>
                <div className="w-2/3 px-5">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default UserAbout;
