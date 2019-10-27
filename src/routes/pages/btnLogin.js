import React, { Component, Fragment } from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
export default class BTNlogin extends Component {
	findCompanyDomain = async () => {
		let resp = await API.get('findCompany/' + this.state.domainName);
		console.log(resp);
	};

	render() {
		return (
			<Fragment>
				<NavLink to={`/login`}>
					<Button color="primary">Continue</Button>
				</NavLink>
			</Fragment>
		);
	}
}
