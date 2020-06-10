import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={SignIn} exact />
    <Route path="/signup" component={SignUp} exact />
  </Switch>
);

export default Routes;
