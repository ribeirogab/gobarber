import React, { createContext, useCallback, useState } from 'react';

import api from '../services/api';

interface User {
  id: string;
  name: string;
  avatar: string | null;
  email: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(
    (): AuthState => {
      const token = localStorage.getItem('@GoBarber:token');
      const user = localStorage.getItem('@GoBarber:user');
      const stringifyUser = (JSON.stringify(user) as any) as User; // eslint-disable-line

      if (token && user) {
        return { token, user: stringifyUser };
      }

      return {} as AuthState;
    },
  );

  const signIn = useCallback(async ({ email, password }) => {
    const { token, user } = await api.post('/sessions', { email, password });

    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', user);

    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
