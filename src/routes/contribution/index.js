import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Mycontribution from './contribution';


const Contribution = ({ match }) => (
    <div className="dashboard-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/Mycontribution`} />
            <Route path={`${match.url}/Mycontribution`} component={Mycontribution} />
            <Redirect to="/error" />

        </Switch>
    </div>
);
export default Contribution;

