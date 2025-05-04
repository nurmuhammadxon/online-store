import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

import AdminSubMenu from './AdminSubMenu';
import { AdminMenu } from "../../util/Constants";
import { useAuth } from '../../hooks/useAuth.jsx';

function AdminDashboard() {
    const [isWidth, setIsWidth] = useState(true);
    const { handleLogout } = useAuth();

    return (
        <div className="w-screen h-screen flex overflow-hidden">
            {/* Sidebar */}
            <div className={`h-full bg-secound transition-all duration-300 ease-in-out ${isWidth ? 'w-64' : 'w-16'}`}>
                <div className='w-full mt-4 pr-4 flex justify-end'>
                    <button
                        className='text-4xl text-white cursor-pointer'
                        onClick={() => setIsWidth(prev => !prev)}
                    >
                        <IoMenu />
                    </button>
                </div>
                <AdminSubMenu data={AdminMenu} isWidth={isWidth} />
                <div className={`px-4 mt-4 ${isWidth ? 'block' : 'hidden'}`}>
                    <button
                        className='text-lightSkyBlue hover:text-red-500 transition-colors duration-300 ease-in-out cursor-pointer font-medium text-xl flex items-center gap-1.5'
                        onClick={handleLogout}
                    >
                        <CiLogout />
                        <span>Chiqish</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 h-full overflow-y-auto p-4">
                <Outlet />
            </div>
        </div>
    );
}

export default AdminDashboard;
