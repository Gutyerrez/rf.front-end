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
import Register from './pages/website/Account/Register';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/staff" component={Staff} />
            <Route path="/changelog" component={Changelog} />
            <Route path="/account/login" component={Login} />
            <Route path="/account/register" component={Register} />
        </Switch>
    </BrowserRouter>
);

export default Routes;