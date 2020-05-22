import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/signin" component={SignIn} exact />
      <Route path="/signup" component={SignUp} exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
