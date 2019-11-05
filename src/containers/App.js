import React, { Component, Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import ColorSwitcher from 'Components/ColorSwitcher';
import { NotificationContainer } from 'Components/ReactNotifications';

import { defaultStartPath } from 'Constants/defaultValues';

import { connect } from 'react-redux';

import AppLocale from '../lang';
import MainRoute from 'Routes';
import login from 'Routes/pages/login';
import landingPage from 'Routes/pages/landingPage';
import register from 'Routes/pages/register';
import error from 'Routes/pages/error';
import forgotPassword from 'Routes/pages/forgot-password';

import 'Assets/css/vendor/bootstrap.min.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

const InitialPath = ({ component: Component, authUser, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			authUser.authed ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: '/landingPage',
						state: { from: props.location },
					}}
				/>
			)}
	/>
);

class App extends Component {
	// componentDidMount(){

	// }
	render() {
		const { location, match, onBoarding } = this.props;
		const { locale } = this.props.settings;
		const currentAppLocale = AppLocale[locale];
		// console.log(this.props);
		if (location.pathname === '/' || location.pathname === '/app' || location.pathname === '/app/') {
			return <Redirect to={defaultStartPath} />;
		}
		return (
			<Fragment>
				<IntlProvider locale={currentAppLocale.locale} messages={currentAppLocale.messages}>
					<Fragment>
						<NotificationContainer />
						<Switch>
							<InitialPath path={`${match.url}app`} authUser={onBoarding} component={MainRoute} />
							<Route path={`/login`} component={login} />
							<Route path={`/landingPage`} component={landingPage} />
							<Route path={`/register`} component={register} />
							<Route path={`/forgot-password`} component={forgotPassword} />
							<Route path={`/error`} component={error} />
							<Redirect to="/error" />
						</Switch>
						<ColorSwitcher />
					</Fragment>
				</IntlProvider>
			</Fragment>
		);
	}
}

export default connect((state) => state, {})(App);
