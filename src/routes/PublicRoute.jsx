import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const authData = sessionStorage.getItem('auth');

  return authData ? <Navigate to="/user-about" /> : <Outlet />;
};

export default PublicRoute;
