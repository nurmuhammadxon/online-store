import React, { useEffect, useState } from 'react';

// icons
import { FaRegUserCircle, FaRegHeart } from 'react-icons/fa';
import { IoCartOutline, IoMenu, IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { RiHome3Line } from "react-icons/ri";

import { Navbar, Search } from './index'

function Header() {
  const [isMenu, setIsMenu] = useState(false)
  const [activeBtn, setActiveBtn] = useState('home')
  const navigate = useNavigate();

  const handleBtn = (active, link) => {
    navigate(link)
    setActiveBtn(active)
    setIsMenu(false)
  }

  const handleUserClick = () => {
    const isAuth = sessionStorage.getItem('auth');
    setActiveBtn('user')
    if (isAuth) {
      navigate('/user-about');
    } else {
      navigate('/signin');
    }
    setIsMenu(false)
  };

  return (
    <>
      <header className='sticky top-0 left-0 z-50 w-full bg-white shadow-md'>
        <div className='mx-auto flex items-center justify-between gap-5 px-2.5 lg:px-4 py-4 relative'>
          {/* Logo */}
          <div>
            <h1
              className='text-2xl font-medium cursor-pointer select-none sm:text-3xl lg:text-5xl'
              onClick={() => navigate('/')}
            >
              ShopUz
            </h1>
          </div>


          {/* desktop */}
          <>
            {/* search */}
            <Search />

            {/* User , Heart and Cart buttons */}
            <div className='items-center hidden gap-4 md:flex'>

              {/* shopping cart */}
              <button className='relative text-2xl cursor-pointer sm:text-3xl group' aria-label="Shopping Cart"
                onClick={() => navigate('/user-about/cart-item')}
              >
                <IoCartOutline />
              </button>

              {/* Heart */}
              <button className='text-xl cursor-pointer sm:text-3xl'
                aria-label="Heart Cart"
                onClick={() => navigate('/wishes')}
              >
                <FaRegHeart />
              </button>

              {/* user */}
              <button
                className='text-2xl cursor-pointer sm:text-3xl'
                aria-label="User Profile"
                onClick={handleUserClick}
              >
                <FaRegUserCircle />
              </button>
            </div>
          </>

          {/* MOBILE */}
          <>
            <div className='block md:hidden'>
              <button
                className='text-3xl sm:text-4xl'
                onClick={() => setIsMenu(true)}
              >
                <IoMenu />
              </button>

              {/* mobile navbar  */}
              <div className={`bg-white flex flex-col gap-5  max-w-40 w-full h-screen rounded-md py-8 px-5 absolute top-0 right-0 transition-all duration-300 ease-in-out
                ${isMenu ? 'translate-x-0' : 'translate-x-full'}
                `}>
                {/* close button */}
                <button
                  className='flex justify-end text-3xl sm:text-4xl'
                  onClick={() => setIsMenu(false)}
                >
                  <IoClose />
                </button>

                {/* home page */}
                <button
                  className={`w-full flex items-center flex-col gap-1.5 text-lg ${activeBtn === 'home' ? 'text-primary' : 'text-[#4d4f59]'}`}
                  onClick={() => handleBtn('home', '/')}
                >
                  <RiHome3Line className='text-2xl' />
                  <span>Bosh sahifa</span>
                </button>


                {/* shopping cart */}
                <button
                  className={`w-full flex items-center flex-col gap-1.5 text-lg group relative ${activeBtn === 'cart' ? 'text-primary' : 'text-[#4d4f59]'}`}
                  aria-label="Shopping Cart"
                  onClick={() => handleBtn('cart', '/user-about/cart-item')}
                >
                  <IoCartOutline className='text-2xl' />
                  <span className='font-medium'>Savat</span>
                </button>


                {/* Heart */}
                <button className={`w-full flex items-center flex-col gap-1.5 text-lg ${activeBtn === 'wishes' ? 'text-primary' : '/wishes'}`}
                  aria-label="Heart Cart"
                  onClick={() => handleBtn('wishes', '/wishes')}
                >
                  <FaRegHeart className='text-2xl' />
                  <span>Saralanganlar</span>
                </button>

                {/* user */}
                <button
                  className={`w-full flex items-center flex-col gap-1.5 text-lg ${activeBtn === 'user' ? 'text-primary' : 'text-[#4d4f59]'}`}
                  aria-label="User Profile"
                  onClick={handleUserClick}
                >
                  <FaRegUserCircle className='text-2xl' />
                  <span>Kabinet</span>
                </button>
              </div>
            </div>
          </>
        </div>
      </header>
      <Navbar />
    </>
  );
}

export default Header;
