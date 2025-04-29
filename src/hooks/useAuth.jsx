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

    const checkTokenValidity = async () => {
        const token = sessionStorage.getItem('authToken');
        if (token) {
            try {
                const res = await axios.get('/api/auth/verify-token', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                if (res.status === 200) {
                    console.log("Token is valid");
                }
            } catch (err) {
                console.log("Token invalid or expired");
                handleLogout();
            }
        } else {
            handleLogout();
        }
    };

    return { handleLogout, checkTokenValidity };
};
