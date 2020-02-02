import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Home from './pages/website/Home';
import Staff from './pages/website/Staff';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/staff" component={Staff} />
        </Switch>
    </BrowserRouter>
);

export default Routes;