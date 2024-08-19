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
import { ThemeContextProvider } from './contexts/ThemeContext';
import GlobalStyle from './styles/global';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <AuthProvider>
          <ThemeContextProvider>
            <GlobalStyle />
            <RouterProvider router={router} fallbackElement={<h1>LALALALLALALALA</h1>} />
          </ThemeContextProvider>
        </AuthProvider>
      </ToastProvider>
    </QueryClientProvider>
  )
}

export default App
