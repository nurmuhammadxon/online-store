import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminRoleChecker = () => {
    const navigate = useNavigate();
    const user = JSON.parse(sessionStorage.getItem('user'));

    useEffect(() => {
        if (user?.role === 'superAdmin') {
            navigate('/admin/super-admin');
        } else if (user?.role === 'admin') {
            navigate('/admin/panel');
        } else {
            navigate('/signin');
        }
    }, [navigate, user]);

    return null;
};

export default AdminRoleChecker;
