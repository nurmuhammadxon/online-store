import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from '../components'

function MainLayout() {
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