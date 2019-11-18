import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardTitle, Form, Label, Input, Button } from "reactstrap";
import {
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup
} from "reactstrap";
import { NavLink, Link, Redirect } from "react-router-dom";

import { Colxx } from "Components/CustomBootstrap";
import { loginUser } from "Redux/actions";

import { connect } from "react-redux";

// import { loginUserAction } from "../../redux/auth/actions/authActions";

class LoginLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      companykey:
        "UDvyoAn6hMvCraJBxRIvzuiWUCMqnDyKZ2qtylRe6xykMKbXiCnlY0nJag==",
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
  onUserLogin = async () => {
    if (this.state.email !== "" && this.state.password !== "") {
      let payload = {
        email: this.state.email,
        password: this.state.password,
        companykey: this.state.companykey
      };
      this.props.loginUser(payload, this.props.history)
    }
  };
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  componentDidMount() {
    document.body.classList.add("background");
    const { authed } = this.props;
		if (authed) return this.props.history.push('/app/')
  }
  componentWillUnmount() {
    document.body.classList.remove("background");
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
                      Please use your credentials to login.
                      <br />
                      If you are not a member, please{" "}
                      <NavLink to={`/register`} className="white">
                        register
                      </NavLink>
                    </p>
                  </div>
                  <div className="form-side">
                    <NavLink to={`/`} className="white">
                      <span
                        style={{
                          fontWeight: "bold",
                          color: "#303030",
                          marginBottom: 40,
                          lineHeight: 2,
                          fontSize: 25
                        }}
                      >
                        AUTOCOOP
                      </span>
                    </NavLink>
                    <CardTitle className="mb-4">
                      <IntlMessages id="user.login-title" />
                    </CardTitle>
                    <Form>
                      <Label className="form-group has-float-label mb-4">
                        <Input
                          type="email"
                          onChange={this.handleChange}
                          name="email"
                          value={this.state.email}
                        />
                        <IntlMessages id="user.email" />
                      </Label>
                      <Label className="form-group has-float-label mb-4">
                        <Input
                          type="password"
                          name="password"
                          value={this.state.password}
                          onChange={this.handleChange}
                        />
                        <IntlMessages id="user.password" />
                      </Label>
                      <div className="d-flex justify-content-between align-items-center">
                        <NavLink to={`/forgot-password`}>
                          <IntlMessages id="user.forgot-password-question" />
                        </NavLink>
                        <Button
                          color="primary"
                          className="btn-shadow"
                          size="lg"
                          onClick={this.onUserLogin}
                        >
                          <IntlMessages id="user.login-button" />
                        </Button>
                      </div>
                      <NavLink to={`/register`}>
                        Yet to create an ACCOUNT?
                      </NavLink>
                    </Form>
                  </div>
                </Card>
              </Colxx>
            </Row>
          </div>
        </main>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            <IntlMessages id="modal.modal-title" />
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

// export default connect(
//   mapStateToProps,
//   {
//     loginUser
//   }
// )(LoginLayout);

const mapStateToProps = ({ onBoarding }) => {
	const { user, loading, authed } = onBoarding;
	return { user, loading, authed };
};
export default connect(mapStateToProps, {loginUser})(LoginLayout);
