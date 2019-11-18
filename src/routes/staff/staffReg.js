import React, { Component, Fragment } from 'react';
import IntlMessages from 'Util/IntlMessages';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import {
	Row,
	Card,
	CardBody,
	CardTitle,
	Badge,
	UncontrolledDropdown,
	DropdownItem,
	DropdownToggle,
	DropdownMenu,
	Progress,
	Form,
	FormGroup,
	Button,
	Label,
	Input,
	CustomInput,
	CardHeader,
} from 'reactstrap';
import Select from 'react-select';
import CustomSelectInput from 'Components/CustomSelectInput';
import { NavLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Colxx, Separator } from 'Components/CustomBootstrap';
import BreadcrumbContainer from 'Components/BreadcrumbContainer';
import { CalendarToolbar } from 'Components/Calendar/CalendarToolbar';
import { PolarShadow, LineShadow, SmallLineChart } from 'Components/Charts';
import { registerStaff } from '../../redux/actions';
import {
	visitChartConfig,
	conversionChartConfig,
	lineChartConfig,
	polarChartConfig,
	smallChartData1,
	smallChartData2,
	smallChartData3,
	smallChartData4,
} from 'Constants/chartConfig';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import ReactTable from 'react-table';
import CircularProgressbar from 'react-circular-progressbar';
import { Chart } from 'react-chartjs-2';
// import ReactSiemaCarousel from "Components/ReactSiema/ReactSiemaCarousel";
import Rating from 'Components/Rating';
import DataTablePagination from 'Components/DataTables/pagination';
import Sortable from 'react-sortablejs';

import 'chartjs-plugin-datalabels';
import 'react-circular-progressbar/dist/styles.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-table/react-table.css';

import eventsData from 'Data/events.json';
import ticketsData from 'Data/tickets.json';
import logsData from 'Data/logs.json';
import productsData from 'Data/products.json';
import profileStatusData from 'Data/dashboard.profile.status.json';
import cakeData from 'Data/dashboard.cakes.json';

Chart.defaults.global.plugins.datalabels.display = false;

BigCalendar.momentLocalizer(moment);

class StaffRegistration extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleChangeType = this.handleChangeType.bind(this);

		this.state = {
			selectedOptions: [],
			selectedOptionsType: [],
			userDetail: [],
			companyDetail: [],
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

	fetchCompanyUserDetails() {
		if (localStorage.getItem('userDetail') !== null || undefined) {
			let userDetail = JSON.parse(localStorage.getItem('userDetail'));
			let companyDetail = JSON.parse(localStorage.getItem('companyDetail'));
			this.setState({
				userDetail: userDetail,
				companyDetail: companyDetail,
			});
		}
	}

	componentDidMount() {
		this.fetchCompanyUserDetails();
	}

	onUserRegister = () => {
		this.state.outlet = `[${this.state.outlet.toString()}]`;
		this.props.registerStaff(this.state, this.props.history);
	};

	handleFormChange = ({ target }) => {
		if (target.name == 'outlet') {
			var outlet = [ ...this.state.outlet, target.value ];
			return this.setState({ [target.name]: outlet });
		}
		this.setState({ [target.name]: target.value });
	};

	handleChange = (selectedOption) => {
		this.setState({ selectedOption });
	};

	handleChangeType = (selectedOptionsType) => {
		this.setState({ selectedOptionsType });
	};

	render() {
		const { messages } = this.props.intl;
		return (
			<Fragment>
				<Row>
					<Colxx xxs="12">
						<BreadcrumbContainer heading={<IntlMessages id="menu.default" />} match={this.props.match} />
						<Separator className="mb-5" />
					</Colxx>
				</Row>

				<Row>
					<Colxx xxs="12">
						<h5 className="mb-4">Register Staff</h5>

						<Form>
							<Label className="form-group has-float-label mb-4">
								<Input
									type="text"
									name="firstname"
									value={this.state.firstname}
									onChange={this.handleFormChange}
								/>
								<span>First-Name</span>
							</Label>
							<Label className="form-group has-float-label mb-4">
								<Input
									type="text"
									name="lastname"
									value={this.state.lastname}
									onChange={this.handleFormChange}
								/>
								<span>Last-Name</span>
								{/* <InputGroupAddon addonType="append">@autocoop.com</InputGroupAddon> */}
							</Label>
							<Label className="form-group has-float-label mb-4">
								<Input
									type="text"
									name="middlename"
									value={this.state.middlename}
									onChange={this.handleFormChange}
								/>
								<span>Middle-Name</span>
							</Label>
							<Label className="form-group has-float-label mb-4">
								<Input
									type="email"
									name="email"
									value={this.state.email}
									onChange={this.handleFormChange}
								/>
								<span>E-mail</span>
							</Label>
							<Label className="form-group has-float-label mb-4">
								<Input
									type="text"
									name="address"
									value={this.state.address}
									onChange={this.handleFormChange}
								/>
								<span>Address</span>
							</Label>
							<Label className="form-group has-float-label mb-4">
								<Input
									type="phone"
									name="mobile"
									value={this.state.mobile}
									onChange={this.handleFormChange}
								/>
								<span>Mobile</span>
							</Label>
							<Label className="form-group has-float-label mb-4">
								<Input type="date" name="dob" value={this.state.dob} onChange={this.handleFormChange} />
								<span>Date-Of-Birth</span>
							</Label>
							<Label className="form-group has-float-label mb-4">
								<select
									name="outlet"
									value={this.state.gender}
									onChange={this.handleFormChange}
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
									onChange={this.handleFormChange}
								/>
								<span>Role-ID</span>
							</Label>

							<Label className="form-group has-float-label mb-4">
								<Input
									type="text"
									name="country"
									value={this.state.country}
									onChange={this.handleFormChange}
								/>
								<span>Country</span>
							</Label>

							<Label className="form-group has-float-label mb-4">
								<Input
									type="text"
									name="state"
									value={this.state.state}
									onChange={this.handleFormChange}
								/>
								<span>State</span>
							</Label>

							<Label className="form-group has-float-label mb-4">
								<select
									name="send_Sms"
									value={this.state.send_Sms}
									onChange={this.handleFormChange}
									className="form-control"
								>
									<option value="1">Yes</option>
									<option value="2">No</option>
								</select>
								<span>Send-Sms</span>
							</Label>

							<Label className="form-group has-float-label mb-4">
								<Input
									type="file"
									name="picture"
									value={this.state.picture}
									onChange={this.handleFormChange}
								/>
								<span>Picture</span>
							</Label>
							<Label className="form-group has-float-label mb-4">
								<select
									name="outlet"
									value={this.state.outlet}
									onChange={this.handleFormChange}
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
								<Button color="primary" className="btn-shadow" size="lg" onClick={this.onUserRegister}>
									Register
								</Button>
							</div>
						</Form>
					</Colxx>
				</Row>
			</Fragment>
		);
	}
}

const mapStateToProps = ({ onBoarding }) => {
	const { user, loading, authed } = onBoarding;
	return { user, loading, authed };
};

export default injectIntl(
	connect(mapStateToProps, {
		registerStaff,
	})(StaffRegistration),
);
