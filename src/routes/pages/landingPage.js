import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  Nav,
  NavItem,
  NavLink,
  Button,
  Label,
  Input
} from "reactstrap";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup
} from "reactstrap";
import "react-tagsinput/react-tagsinput.css";
import { Colxx } from "Components/CustomBootstrap";
// import BTNLOGIN from "./btnLogin";
import BTNSIGNUP from "./btnSignUp";
import IntlMessages from "Util/IntlMessages";
import "../../assets/css/pageCss/landingPage.css";
import API from "../../util/API";
import { getDomainDetail } from "Redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class NavigationUi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      tagsLabelOver: [],
      domainName: "",
      domainData: []
    };
    this.toggle = this.toggle.bind(this);
    this.findCompanyDomain = this.findCompanyDomain.bind(this);
  }
  handleTagChangeLabelOver(tagsLabelOver) {
    this.setState({ tagsLabelOver });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChange = event => {
    this.setState({ domainName: event.target.value });
  };

  findCompanyDomain = async () => {
    if (this.state.domainName !== "") {
      let resp = await API.get("findCompany/" + this.state.domainName);
      console.log(resp);
      if (resp.data.status === true) {
        let domainDetail = await resp.data.data;
        await localStorage.setItem(
          "domainDetail",
          JSON.stringify(domainDetail)
        );
        this.props.history.push(`/login`);
      } else if (resp.data.status === false) {
        alert("Name not found");
      }
    } else {
      alert("Field can not be empty");
    }
    // this.props.getDomainDetail(this.state.domainName);
  };

  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <Row className="noMarging">
          <Colxx xxs="12" className="noPadding">
            <Card className="mb-4">
              <CardBody
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <Nav className="nav-pills">
                  <NavItem>
                    <NavLink active href="#">
                      <IntlMessages id="nav.active" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <IntlMessages id="nav.link" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <IntlMessages id="nav.link" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="disabled" href="#">
                      <IntlMessages id="nav.disabled" />
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="justify-content-end nav-pills">
                  {/* <BTNSIGNUP /> */}
                  <NavItem>
                    <Link to="/register">
                    <NavLink color="info">
                      Sign Up
                    </NavLink>
                    </Link>
                  </NavItem>
                  <NavItem>
                    {/* <NavLink onClick={this.toggle} active href="#"> */}
                    <Link to="/login">
                    <NavLink active>
                      Login
                    </NavLink>
                    </Link>
                  </NavItem>
                </Nav>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            ORGANIZATION VERIFICATION
          </ModalHeader>
          <ModalBody>
            <Label className="form-group has-float-label mb-4">
              <Input
                type="text"
                name="domainName"
                value={this.state.domainName}
                onChange={this.handleChange}
              />
              <span>Organization Name</span>
              {/* <IntlMessages id="user.email" /> */}
            </Label>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.findCompanyDomain} color="primary">
              Continue
            </Button>
            <Button color="danger" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getDomainDetail }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(NavigationUi);
