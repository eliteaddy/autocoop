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
import { registerStaff } from 'Redux/actions';
class RegisterLayout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstname: '',
			lastname: '',
			middlename: '',
			mobile: '',
			gender: 'male',
			dob: '',
			role_id: '',
			country: '',
			state: '',
			picture: null,
			outlet: [],
			address: '',
			send_Sms: false,
			email: '',
			companykey: 'UDvyoAn6hMvCraJBxRIvzuiWUCMqnDyKZ2qtylRe6xykMKbXiCnlY0nJag==',
		};
	}

	onUserRegister = () => {
		this.state.outlet = `[${this.state.outlet.toString()}]`;
		this.props.registerStaff(this.state, this.props.history);
	};

	handleChange = ({ target }) => {
		if (target.name == 'outlet') {
			var outlet = [ ...this.state.outlet, target.value ];
			return this.setState({ [target.name]: outlet });
		}
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
						state: { from: this.props.location },
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
													name="firstname"
													value={this.state.firstname}
													onChange={this.handleChange}
												/>
												<span>First-Name</span>
											</Label>
											<Label className="form-group has-float-label mb-4">
												<Input
													type="text"
													name="lastname"
													value={this.state.lastname}
													onChange={this.handleChange}
												/>
												<span>Last-Name</span>
												{/* <InputGroupAddon addonType="append">@autocoop.com</InputGroupAddon> */}
											</Label>
											<Label className="form-group has-float-label mb-4">
												<Input
													type="text"
													name="middlename"
													value={this.state.middlename}
													onChange={this.handleChange}
												/>
												<span>Middle-Name</span>
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
													type="date"
													name="dob"
													value={this.state.dob}
													onChange={this.handleChange}
												/>
												<span>Date-Of-Birth</span>
											</Label>
											<Label className="form-group has-float-label mb-4">
												<select
													name="gender"
													value={this.state.gender}
													onChange={this.handleChange}
													className="form-control"
												>
													<option value="male">Male</option>
													<option value="female">Female</option>
												</select>
												<span>Gender</span>
											</Label>

											<Label className="form-group has-float-label mb-4">
												<Input
													type="number"
													name="role_id"
													value={this.state.role_id}
													onChange={this.handleChange}
												/>
												<span>Role-ID</span>
											</Label>

											<Label className="form-group has-float-label mb-4">
												<Input
													type="text"
													name="country"
													value={this.state.country}
													onChange={this.handleChange}
												/>
												<span>Country</span>
											</Label>

											<Label className="form-group has-float-label mb-4">
												<Input
													type="text"
													name="state"
													value={this.state.state}
													onChange={this.handleChange}
												/>
												<span>State</span>
											</Label>

											<Label className="form-group has-float-label mb-4">
												<Input
													type="number"
													name="send_Sms"
													value={this.state.send_Sms}
													onChange={this.handleChange}
												/>
												<span>Send-Sms</span>
											</Label>

											<Label className="form-group has-float-label mb-4">
												<Input
													type="file"
													name="picture"
													value={this.state.picture}
													onChange={this.handleChange}
												/>
												<span>Picture</span>
											</Label>
											<Label className="form-group has-float-label mb-4">
												<select
													name="outlet"
													value={this.state.outlet}
													onChange={this.handleChange}
													multiple
													className="form-control"
												>
													<option value="1">One</option>
													<option value="2">Two</option>
													<option value="3">Three</option>
													<option value="4">Four</option>
												</select>
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
	registerStaff,
})(RegisterLayout);
