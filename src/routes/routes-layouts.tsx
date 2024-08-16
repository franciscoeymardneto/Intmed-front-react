import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const AuthenticatedLayout = () => {
    const { isLoggedIn } = useAuth();
  
    return isLoggedIn ? <Outlet /> : <Navigate to='/login' />;
  };
  
  const UnauthenticatedLayout = () => {
    const { isLoggedIn } = useAuth();
  
    return !isLoggedIn ? <Outlet /> : <Navigate to='/' />;
  };


  export {
    AuthenticatedLayout,
    UnauthenticatedLayout
  }