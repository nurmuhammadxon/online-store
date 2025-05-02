import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header, Footer } from '../components'

function MainLayout() {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className='max-w-[1400px] w-full mx-auto font-Display overflow-hidden'>
            <Header />
            <main >
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout