import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const auth = JSON.parse(sessionStorage.getItem('auth'));

    return auth ? <Outlet /> : <Navigate to='/' />
};

export default PrivateRoute;
