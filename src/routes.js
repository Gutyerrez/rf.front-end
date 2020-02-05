import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Home from './pages/website/Home';
import Shop from './pages/shop/Home';
import Staff from './pages/website/Staff';
import Changelog from './pages/website/Changelog';
import Login from './pages/website/Account/Login';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/staff" component={Staff} />
            <Route path="/changelog" component={Changelog} />
            <Route path="/account/login" component={Login} />
        </Switch>
    </BrowserRouter>
);

export default Routes;