import React, { useEffect, useState } from 'react';

// icons
import { FaSearch, FaRegUserCircle, FaRegHeart } from 'react-icons/fa';
import { IoCartOutline, IoMenu, IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { RiHome3Line } from "react-icons/ri";

import { Navbar } from './index'

function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [isMenu, setIsMenu] = useState(false)
  const [activeBtn, setActiveBtn] = useState('home')
  const navigate = useNavigate();

  const handleBtn = (active, link) => {
    navigate(link)
    setActiveBtn(active)
  }

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cartData.length);
  }, []);

  const handleUserClick = () => {
    const isAuth = sessionStorage.getItem('auth');
    setActiveBtn('user')
    if (isAuth) {
      navigate('/user-about');
    } else {
      navigate('/signin');
    }
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
            <div className='hidden w-full max-w-xs md:block sm:max-w-sm md:max-w-md lg:max-w-lg'>
              <form action="" className='w-full'>
                <label className='flex items-center justify-between pl-2 border rounded-full focus-within:shadow'>
                  <input type="search" placeholder='Search' className='w-full outline-none pl-3.5' />
                  <span className='text-lg min-w-[50px] h-8 flex items-center justify-center rounded-r-full text-white bg-primary'>
                    <FaSearch />
                  </span>
                </label>
              </form>
            </div>
            {/* User , Heart and Cart buttons */}
            <div className='items-center hidden gap-4 md:flex'>

              {/* shopping cart */}
              <button className='relative text-2xl cursor-pointer sm:text-3xl group' aria-label="Shopping Cart"
                onClick={() => navigate('/user-about/cart-item')}
              >
                <IoCartOutline />
                {
                  cartCount > 0 && (
                    <div className='hidden group-hover:flex items-center justify-center absolute -top-4 -right-1.5 size-5 text-center p-1 bg-strongBlue text-white rounded-full'>
                      <p className='text-xs'>{cartCount}</p>
                    </div>
                  )
                }
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
                  className={`w-full flex items-center flex-col gap-1.5 text-2xl ${activeBtn === 'home' ? 'text-primary' : 'text-[#4d4f59]'}`}
                  onClick={() => handleBtn('home', '/')}
                >
                  <RiHome3Line className='text-4xl' />
                  <span>Bosh sahifa</span>
                </button>


                {/* shopping cart */}
                <button
                  className={`w-full flex items-center flex-col gap-1.5 text-2xl group relative ${activeBtn === 'cart' ? 'text-primary' : 'text-[#4d4f59]'}`}
                  aria-label="Shopping Cart"
                  onClick={() => handleBtn('cart', '/cart')}
                >
                  <IoCartOutline className='text-4xl' />

                  {cartCount > 0 && (
                    <div className='absolute items-center justify-center hidden p-1 text-center text-white rounded-full group-hover:flex -top-4 right-6 size-5 bg-strongBlue'>
                      <p className='text-xs'>{cartCount}</p>
                    </div>
                  )}

                  <span className='font-medium'>Savat</span>
                </button>


                {/* Heart */}
                <button className={`w-full flex items-center flex-col gap-1.5 text-2xl ${activeBtn === 'wishes' ? 'text-primary' : '/wishes'}`}
                  aria-label="Heart Cart"
                  onClick={() => handleBtn('wishes', '/wishes')}
                >
                  <FaRegHeart className='text-4xl' />
                  <span>Saralanganlar</span>
                </button>

                {/* user */}
                <button
                  className={`w-full flex items-center flex-col gap-1.5 text-2xl ${activeBtn === 'user' ? 'text-primary' : 'text-[#4d4f59]'}`}
                  aria-label="User Profile"
                  onClick={handleUserClick}
                >
                  <FaRegUserCircle className='text-4xl' />
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
