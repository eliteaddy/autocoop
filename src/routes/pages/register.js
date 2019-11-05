import React, { Component, Fragment } from 'react';
import IntlMessages from 'Util/IntlMessages';
import {
	Row,
	Card,
	CardTitle,
	Form,
	Label,
	Input,
	Button,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
} from 'reactstrap';
import { NavLink, Redirect } from 'react-router-dom';
import { CardBody, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup } from 'reactstrap';
import { Colxx } from 'Components/CustomBootstrap';

import { connect } from 'react-redux';
import { createDomain } from 'Redux/actions';
class RegisterLayout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			domainName: '',
			organisationName: '',
			address: '',
			mobile: '',
			email: '',
			password: '',
		};
	}
	onUserRegister = () => {
		const { email, password, mobile, domainName, organisationName, address } = this.state;
		if (
			email !== '' &&
			password !== '' &&
			domainName !== '' &&
			organisationName !== '' &&
			address !== '' &&
			mobile !== ''
		) {
			this.props.createDomain(this.state, this.props.history);
		} else {
			alert('Enter all required fields');
		}
	};

	handleChange = ({ target }) => {
		this.setState({ [target.name]: target.value });
	};

	componentDidMount() {
		document.body.classList.add('background');
		// console.log(this.props.authed)
		const { authed } = this.props;
		if (authed)
			return (
				<Redirect
					to={{
						pathname: '/app',
						state: { from: props.location },
					}}
				/>
			);
	}
	componentWillUnmount() {
		document.body.classList.remove('background');
	}
	render() {
		return (
			<Fragment>
				<div className="fixed-background" />
				<main>
					<div className="container">
						<Row className="h-100">
							<Colxx xxs="12" md="10" className="mx-auto my-auto">
								<Card className="auth-card">
									<div className="position-relative image-side ">
										<p className="text-white h2">BUILD WORLD OF CONVENIENCY</p>
										<p className="white mb-0">
											Please use this form to register. <br />
											If you are a member, please{' '}
											<NavLink to={`/login`} className="white">
												login
											</NavLink>
											.
										</p>
									</div>
									<div className="form-side">
										<NavLink to={`/`} className="white">
											<span
												style={{
													fontWeight: 'bold',
													color: '#303030',
													marginBottom: 40,
													lineHeight: 2,
													fontSize: 25,
												}}
											>
												AUTOCOOP
											</span>
										</NavLink>
										<CardTitle className="mb-4">
											<IntlMessages id="user.register" />
										</CardTitle>
										<Form>
											<Label className="form-group has-float-label mb-4">
												<Input
													type="text"
													name="organisationName"
													value={this.state.organisationName}
													onChange={this.handleChange}
												/>
												<span>Organization-Name</span>
											</Label>
											<Label className="form-group has-float-label mb-4">
												<Input
													type="text"
													name="domainName"
													value={this.state.domainName}
													onChange={this.handleChange}
												/>
												<span>Domain-Name</span>
												{/* <InputGroupAddon addonType="append">@autocoop.com</InputGroupAddon> */}
											</Label>
											<Label className="form-group has-float-label mb-4">
												<Input
													type="email"
													name="email"
													value={this.state.email}
													onChange={this.handleChange}
												/>
												<span>E-mail</span>
											</Label>
											<Label className="form-group has-float-label mb-4">
												<Input
													type="text"
													name="address"
													value={this.state.address}
													onChange={this.handleChange}
												/>
												<span>Address</span>
											</Label>
											<Label className="form-group has-float-label mb-4">
												<Input
													type="phone"
													name="mobile"
													value={this.state.mobile}
													onChange={this.handleChange}
												/>
												<span>Mobile</span>
											</Label>
											<Label className="form-group has-float-label mb-4">
												<Input
													type="password"
													name="password"
													value={this.state.password}
													onChange={this.handleChange}
												/>
												<span>Password</span>
											</Label>
											<div className="d-flex justify-content-between align-items-center">
												<NavLink to={`/login`}>Already Create an Account ?</NavLink>
												<Button
													color="primary"
													className="btn-shadow"
													size="lg"
													onClick={this.onUserRegister}
												>
													<IntlMessages id="user.register-button" />
												</Button>
											</div>
										</Form>
									</div>
								</Card>
							</Colxx>
						</Row>
					</div>
				</main>
			</Fragment>
		);
	}
}
const mapStateToProps = ({ onBoarding }) => {
	const { user, loading, authed } = onBoarding;
	return { user, loading, authed };
};

export default connect(mapStateToProps, {
	createDomain,
})(RegisterLayout);
