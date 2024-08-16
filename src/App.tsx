import {
  RouterProvider,
} from 'react-router-dom';
import router from './routes/routes';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} fallbackElement={<h1>LALALALLALALALA</h1>} />
    </AuthProvider>
  )
}

export default App
