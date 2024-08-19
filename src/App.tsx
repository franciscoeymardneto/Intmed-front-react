import {
  RouterProvider,
} from 'react-router-dom';
import router from './routes/routes';
import { AuthProvider } from './contexts/AuthContext';
import { ToastProvider } from './contexts/ToastContext';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider  client={queryClient}>
      <ToastProvider>
        <AuthProvider>
          <RouterProvider router={router} fallbackElement={<h1>LALALALLALALALA</h1>} />
        </AuthProvider>
      </ToastProvider>
    </QueryClientProvider>
  )
}

export default App
