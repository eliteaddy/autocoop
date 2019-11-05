import React, { Component, Fragment } from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
export default class BTNsignup extends Component {
	render() {
		return (
			<Fragment>
				<NavLink to={`/register`}>
					<Button color="info">Sign Up</Button>
				</NavLink>
			</Fragment>
		);
	}
}
