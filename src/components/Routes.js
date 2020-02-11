import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Movies } from './pages/movies';

const Routes = () => (
    <Switch>
        <Route component={Movies} exact path="/movies" />
    </Switch>
);

export default Routes;