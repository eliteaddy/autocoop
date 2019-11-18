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
	CardImg,
} from 'reactstrap';
import Select from 'react-select';
import CustomSelectInput from 'Components/CustomSelectInput';
import { NavLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Colxx, Separator } from 'Components/CustomBootstrap';
import BreadcrumbContainer from 'Components/BreadcrumbContainer';
import { CalendarToolbar } from 'Components/Calendar/CalendarToolbar';
import { PolarShadow, LineShadow, SmallLineChart } from 'Components/Charts';
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
import { getStaff } from '../../redux/actions';

Chart.defaults.global.plugins.datalabels.display = false;

const selectData = [
	{ label: 'Chocolate', value: 'chocolate', key: 0 },
	{ label: 'Vanilla', value: 'vanilla', key: 1 },
	{ label: 'Strawberry', value: 'strawberry', key: 2 },
	{ label: 'Caramel', value: 'caramel', key: 3 },
	{ label: 'Cookies and Cream', value: 'cookiescream', key: 4 },
	{ label: 'Peppermint', value: 'peppermint', key: 5 },
];

const selectDataType = [
	{ label: 'Cake', value: 'cake', key: 0 },
	{ label: 'Cupcake', value: 'cupcake', key: 1 },
	{ label: 'Dessert', value: 'dessert', key: 2 },
];

const dataTableColumns = [
	{
		Header: 'Name',
		accessor: 'name',
		Cell: (props) => <p className="list-item-heading">{props.value}</p>,
	},
	{
		Header: 'Sales',
		accessor: 'sales',
		Cell: (props) => <p className="text-muted">{props.value}</p>,
	},
	{
		Header: 'Stock',
		accessor: 'stock',
		Cell: (props) => <p className="text-muted">{props.value}</p>,
	},
	{
		Header: 'Category',
		accessor: 'category',
		Cell: (props) => <p className="text-muted">{props.value}</p>,
	},
];

const recentOrders = productsData.data.slice(0, 6);
const tickets = ticketsData.data;
const events = eventsData.data;
const logs = logsData.data;
const dataTableData = productsData.data.slice(0, 12);
const profileStatuses = profileStatusData.data;
const cakes = cakeData.data;

BigCalendar.momentLocalizer(moment);

class DefaultDashboard extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleChangeType = this.handleChangeType.bind(this);

		this.state = {
			selectedOptions: [],
			selectedOptionsType: [],
			staffs: [],
			companyDetail: [],
		};
	}

	async fetchCompanyUserDetails() {
		if (this.props.authed) {
			var data = {
				companykey: 'UDvyoAn6hMvCraJBxRIvzuiWUCMqnDyKZ2qtylRe6xykMKbXiCnlY0nJag==',
			};
			await this.props.getStaff(data);
			await this.setState({ staffs: this.props.staffs.staffs.data });
		}
	}

	componentDidMount() {
		this.fetchCompanyUserDetails();
	}

	handleChange = (selectedOption) => {
		this.setState({ selectedOption });
	};

	handleChangeType = (selectedOptionsType) => {
		this.setState({ selectedOptionsType });
	};

	render() {
		const { messages } = this.props.intl;
		console.log(this.props.staffs.staffs.data);
		return (
			<Fragment>
				<Row>
					<Colxx xxs="12">
						<BreadcrumbContainer heading={'Staffs'} match={this.props.match} />
						<Separator className="mb-5" />
					</Colxx>
				</Row>

				<Row>
					<Colxx xxs="12">
						<h5 className="mb-4">Staffs List</h5>
						{this.props.staffs.staffs.data ? (
							<Sortable className="row icon-cards-row mb-2">
								{this.props.staffs.staffs.data.map((staff) => (
									<Colxx xxs="6" sm="4" md="3" className="mb-4">
										<Card>
											<CardImg src={staff.FullProfile[0].picture} alt="" width="100%" />
											<CardBody className="text-center">
												<p className="lead text-center">{`${staff.FullProfile[0]
													.firstname} ${staff.FullProfile[0].lastname}`}</p>
												<p className="card-text font-weight-semibold mb-0">{`${staff
													.FullProfile[0].email}`}</p>
											</CardBody>
										</Card>
									</Colxx>
								))}
							</Sortable>
						) : null}
					</Colxx>
				</Row>
			</Fragment>
		);
	}
}

const mapStateToProps = ({ onBoarding, staffs }) => {
	const { user, loading, authed } = onBoarding;
	if (authed) {
		var data = {
			companykey: 'UDvyoAn6hMvCraJBxRIvzuiWUCMqnDyKZ2qtylRe6xykMKbXiCnlY0nJag==',
		};
		getStaff(data);
	}
	return { user, loading, authed, staffs };
};

export default injectIntl(
	connect(mapStateToProps, {
		getStaff,
	})(DefaultDashboard),
);
