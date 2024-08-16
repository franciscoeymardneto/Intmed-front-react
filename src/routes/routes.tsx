import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import LoginPage from '../pages/Login/LoginPage';
import RegisterPage from '../pages/Register/RegisterPage';
import { AuthenticatedLayout, UnauthenticatedLayout } from './routes-layouts';

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AuthenticatedLayout />,
      children: [
        {
          index: true, 
          element: <HomePage />,
        },
      ],
    },
    {
      path: '/login',
      element: <UnauthenticatedLayout />,
      children: [
        {
          index: true,
          element: <LoginPage />,
        },
      ],
    },
    {
      path: '/register',
      element: <UnauthenticatedLayout />,
      children: [
        {
          index: true,
          element: <RegisterPage />,
        },
      ],
    },
    {
        path: '*',
        element: <h1>LALALALAL</h1>,
      },
  ]);



  export default router