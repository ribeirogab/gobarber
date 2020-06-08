import React from 'react';

import GlobalStyle from './styles/global';
import Routes from './routes';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Routes />
    </AuthProvider>

    <GlobalStyle />
  </>
);

export default App;
