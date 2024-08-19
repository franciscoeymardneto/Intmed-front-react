import { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
    shouldUpdate: boolean
    setShouldUpdate: (value: boolean) => void
  }

const UpdateConsultContext = createContext<AuthContextType | undefined>(undefined);

export const useUpdateConsult = () => {
    const context = useContext(UpdateConsultContext);
    if (!context) {
      throw new Error('useUpdateConsult must be used within an UpdateConsultProvider');
    }
    return context;
  };


export const UpdateConsultProvider = ({ children }: { children: ReactNode })  => {
  const [shouldUpdate, setShouldUpdate] = useState(false);

  return (
    <UpdateConsultContext.Provider value={{ shouldUpdate, setShouldUpdate }}>
      {children}
    </UpdateConsultContext.Provider>
  );
};

export const useUpdateConsultContext = () => useContext(UpdateConsultContext);
