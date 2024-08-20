import {
  RouterProvider,
} from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ToastProvider } from './contexts/ToastContext';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ThemeContextProvider } from './contexts/ThemeContext';
import { ModalProvider } from 'styled-react-modal'
import router from './routes/routes';
import GlobalStyle from './styles/global';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <AuthProvider>
          <ModalProvider>
            <ThemeContextProvider>
              <GlobalStyle />
              <RouterProvider router={router}/>
            </ThemeContextProvider>
          </ModalProvider>
        </AuthProvider>
      </ToastProvider>
    </QueryClientProvider>
  )
}

export default App
