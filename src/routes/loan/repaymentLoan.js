import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  Table
} from "reactstrap";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import ReactTable from "react-table";
import PerfectScrollbar from "react-perfect-scrollbar";
import productsData from "Data/products.json";
import classnames from 'classnames';
import DataTablePagination from "Components/DataTables/pagination";

const dataTableData = productsData.data.slice(0, 20);
const CustomTbodyComponent = props => (
  <div {...props} className={classnames("rt-tbody", props.className || [])}>
    <PerfectScrollbar option={{ suppressScrollX: true }}>{props.children}</PerfectScrollbar>
  </div>
);

const dataTableColumns = [
  {
    Header: "Date",
    accessor: "name",
    Cell: props => <p className="list-item-heading">{props.value}</p>
  },
  {
    Header: "Member ID",
    accessor: "sales",
    Cell: props => <p className="text-muted">AT123-BT</p>
  },
  {
    Header: "Name",
    accessor: "stock",
    Cell: props => <p className="text-muted">{props.value}</p>
  },
  {
    Header: "Principal Amount",
    accessor: "category",
    Cell: props => <p className="text-muted">1,000,000</p>
  },
  {
    Header: "Amount",
    accessor: "category",
    Cell: props => <p className="text-muted">500,000</p>
  },
  {
    Header: "Amount Remain",
    accessor: "category",
    Cell: props => <p className="text-muted">500,000</p>
  },
  {
    Header: "Loan Type",
    accessor: "category",
    Cell: props => <p className="text-muted">Optain</p>
  },
  {
    Header: "Created by",
    accessor: "category",
    Cell: props => <p className="text-muted">System</p>
  },
];


export default class TablesUi extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <BreadcrumbContainer
              heading={"Loan"}
              match={this.props.match}
            />
            <Separator className="mb-5" />
          </Colxx>
        </Row>

        <Row>
          <Colxx xxs="12">
            <Card className="mb-4">
              <CardBody>
                <CardTitle>
                Repayment Loan
              </CardTitle>
                <ReactTable
                  data={dataTableData}
                  columns={dataTableColumns}
                  defaultPageSize={5}
                  filterable={true}
                  showPageJump={true}
                  PaginationComponent={DataTablePagination}
                  showPageSizeOptions={true}
                />
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}
