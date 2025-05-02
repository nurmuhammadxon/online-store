import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('auth');
        sessionStorage.removeItem('role');
        sessionStorage.removeItem('user');
        navigate('/');
    };

    return { handleLogout };
};
