import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { UserSession } from '../core/models/session';

interface AuthContextType {
  isLoggedIn: boolean
  getUserSession: () => UserSession | null
  setUserSession: (value: UserSession) => void
  clearSession: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);


  function getUserSession(): UserSession | null {
    const session = localStorage.get('session');

    if (session) {
      return JSON.parse(session)
    }

    return null
  }
  function setUserSession(value: UserSession):void {
    localStorage.setItem('session',JSON.stringify(value));
    setIsLoggedIn(true);
  }
  function clearSession(): void {
    localStorage.removeItem('session')
    setIsLoggedIn(false)
  }

  useEffect(() => {
    const savedLoginStatus = getUserSession();
    if (savedLoginStatus) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{isLoggedIn, setUserSession, getUserSession, clearSession }}>
      {children}
    </AuthContext.Provider>
  );
};
