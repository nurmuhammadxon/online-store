import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';

// icons
import { IoMenu } from "react-icons/io5";
import { CiLogout } from 'react-icons/ci';

// util constants import
import { SuperAdminMenu } from '../../util/Constants'
import AdminSubMenu from './AdminSubMenu';

// hooks
import { useAuth } from '../../hooks/useAuth.jsx';


function SuperAdminDashboard() {
  const [isWidth, setIsWidth] = useState(true)
  const { handleLogout, checkTokenValidity } = useAuth();

  useEffect(() => {
    // checkTokenValidity();
  }, [checkTokenValidity]);

  return (
    <div className='w-screen h-screen flex items-start'>
      <div className={`relative w-1/4 h-screen bg-secound transition-transform duration-300 ease-in-out ${isWidth ? 'translate-x-0' : '-translate-x-2/3'}`}>
        <div className='w-full mt-4 pr-4 flex justify-end'>
          <button
            className='text-4xl text-white cursor-pointer'
            onClick={() => setIsWidth(prev => !prev)}
          >
            <IoMenu />
          </button>
        </div>
        <AdminSubMenu data={SuperAdminMenu} isWidth={isWidth} />
        <div className='px-4 mt-4'>
          <button
            className='text-lightSkyBlue hover:text-red-500 transition-colors duration-300 ease-in-out cursor-pointer font-medium text-xl flex items-center gap-1.5'
            onClick={handleLogout}
          >
            <CiLogout />
            <span>Chiqish</span>
          </button>
        </div>
      </div>
      <div className={`relative w-full h-screen transition-transform duration-300 ease-in-out ${isWidth ? 'translate-x-0' : '-translate-x-1/6'}`}>
        <Outlet />
      </div>
    </div >
  )
}

export default SuperAdminDashboard
