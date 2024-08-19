import {
  RouterProvider,
} from 'react-router-dom';
import router from './routes/routes';
import { AuthProvider } from './contexts/AuthContext';
import { ToastProvider } from './contexts/ToastContext';

function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <RouterProvider router={router} fallbackElement={<h1>LALALALLALALALA</h1>} />
      </AuthProvider>
    </ToastProvider>
  )
}

export default App
