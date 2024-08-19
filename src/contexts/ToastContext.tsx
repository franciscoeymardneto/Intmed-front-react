import  { createContext, ReactNode, useContext } from 'react';
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type ToastContextData = {
  pushToast: (message: string, options?: ToastOptions) => void;
};

const ToastContext = createContext<ToastContextData | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const pushToast = (message: string, options?: ToastOptions) => {
    toast(message, options);
  };

  return (
    <ToastContext.Provider value={{ pushToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

export const useToastStack = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToastStack must be used within a ToastProvider');
  }
  return context.pushToast;
};
