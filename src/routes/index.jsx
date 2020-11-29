import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import Task from '../views/Task';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/task' component={Task} />
            </Switch>
        </BrowserRouter>
    )
}



export default Routes;