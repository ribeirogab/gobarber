import React from 'react';

import GlobalStyle from './styles/global';
import Routes from './routes';

import Provider from './hooks';

const App: React.FC = () => (
  <>
    <Provider>
      <Routes />
    </Provider>

    <GlobalStyle />
  </>
);

export default App;
