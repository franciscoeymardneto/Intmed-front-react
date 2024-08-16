import { lazy } from "react";
import {
    createBrowserRouter,
    Navigate,
    Outlet
  } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

  const Home = lazy(() => import('../pages/Home/HomePage'))
  const Login = lazy(() => import('../pages/Login/LoginPage'))
  const Register = lazy(() => import('../pages/Register/RegisterPage'))

  const AuthenticatedLayout = () => {
    const { isLoggedIn } = useAuth();
  
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
  };
  
  const UnauthenticatedLayout = () => {
    const { isLoggedIn } = useAuth();
  
    return !isLoggedIn ? <Outlet /> : <Navigate to="/" />;
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthenticatedLayout />,
      children: [
        {
          index: true, 
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <UnauthenticatedLayout />,
      children: [
        {
          index: true,
          element: <Login />,
        },
      ],
    },
    {
      path: "/register",
      element: <UnauthenticatedLayout />,
      children: [
        {
          index: true,
          element: <Register />,
        },
      ],
    },
    {
        path: "*",
        element: <h1>LALALALAL</h1>,
      },
  ]);



  export default router