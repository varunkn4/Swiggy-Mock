import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Home from './pages/home';
import City from './pages/city';

export default (
    <Route>
        <Switch>
            <Redirect from="/" to="home" exact={true} />
            <Route path="/home" component={Home} />
            <Route path="/city" component={City} />
        </Switch>
   </Route>
);
