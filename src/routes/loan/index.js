import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import requestLoan from './requestLoan';
import requestLoanList from './requestLoanList';
import approvedLoanList from './approvedLoanList';
import declineLoanList from './declineLoanList';
import disbursementLoan from './disbursementLoan';
import repaymentLoan from './repaymentLoan';

const Loan = ({ match }) => (
    <div className="dashboard-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/requestLoan`} />
            <Route path={`${match.url}/request-loan`} component={requestLoan} />
            <Route path={`${match.url}/request-loan-list`} component={requestLoanList} />
            <Route path={`${match.url}/approved-loan-list`} component={approvedLoanList} />
            <Route path={`${match.url}/decline-loan-list`} component={declineLoanList} />
            <Route path={`${match.url}/disbursed-loan`} component={disbursementLoan} />
            <Route path={`${match.url}/repayment-loan`} component={repaymentLoan} />
            <Redirect to="/error" />

        </Switch>
    </div>
);
export default Loan;