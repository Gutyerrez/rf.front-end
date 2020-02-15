import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Home from './pages/website/Home';
import Shop from './pages/shop/Home';
import Category from './pages/shop/Category';
import Staff from './pages/website/Staff';
import Changelog from './pages/website/Changelog';
import Punishments from './pages/website/Punishments';
import Login from './pages/website/Account/Login';
import Register from './pages/website/Account/Register';
import Account  from './pages/website/Account/Home';
import Security  from './pages/website/Account/Security';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:id" component={Category} />
            <Route path="/staff" component={Staff} />
            <Route path="/changelog" component={Changelog} />
            <Route path="/punishments" component={Punishments} />
            <Route path="/account" exact component={Account} />
            <Route path="/account/login" component={Login} />
            <Route path="/account/register" component={Register} />
            <Route path="/account/security" component={Security} />
        </Switch>
    </BrowserRouter>
);

export default Routes;