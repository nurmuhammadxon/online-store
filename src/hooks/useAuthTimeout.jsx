import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuthTimeout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const isAuth = sessionStorage.getItem('auth');
        if (isAuth) {
            const logoutTimer = setTimeout(() => {
                sessionStorage.removeItem('auth');
                sessionStorage.removeItem('role');
                sessionStorage.removeItem('user');
                navigate('/signin');
            }, 3600000);

            return () => clearTimeout(logoutTimer);
        }
    }, [navigate]);
};
