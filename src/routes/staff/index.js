import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import staffReg from './staffReg';
import viewStaff from './viewStaff';
import settings from './settings';

const Staff = ({ match }) => (
    <div className="dashboard-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/staffReg`} />
            <Route path={`${match.url}/staff-reg`} component={staffReg} />
            <Route path={`${match.url}/view-staff`} component={viewStaff} />
            <Route path={`${match.url}/settings`} component={settings} />
            <Redirect to="/error" />

        </Switch>
    </div>
);
export default Staff;