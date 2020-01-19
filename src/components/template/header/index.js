import React, { Component } from 'react'
import {
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from 'react-bootstrap'
import AdminLogo from '../../images/admin.png'
import Home from '../../pages/home'
import Employee from '../../pages/employee'
import AddEmployee from '../../pages/form/addEmployee'

export default class index extends Component {

  render() {
    return (
      <>
        <div id="page-content-wrapper">
          <Navbar expand="lg" className="navbarAdmin" variant="dark">
            <Navbar.Brand className="headText" href="#home">
              Syariah Financing
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link className="text-light" href="/login">Log Out</Nav.Link>
            </Navbar.Collapse>
          </Navbar>
          <div className="d-flex" id="wrapper">
            <div className="sidebar" id="sidebar-wrapper">
              <div className="list-group list-group-flush">
                <div className="imageAdmin">
                  <img src={AdminLogo} width="100" height="100" />
                </div>
                <Link className="textApp textSide" to="/">
                  <Row>
                    <Col sm="2">
                      <i className="fas fa-home"></i>
                    </Col>
                    <Col sm="10">
                      Home
                    </Col>
                  </Row>
                </Link>
                <Link className="textApp textSide" to="/employee">
                  <Row>
                    <Col sm="2">
                      <i className="fas fa-address-book"></i>
                    </Col>
                    <Col sm="10">
                      Comunnity Officer
                    </Col>
                  </Row>
                </Link>
                <Link className="textApp textSide" to="/employee">
                  <Row>
                    <Col sm="2">
                      <i className="fa fa-handshake-o"></i>
                    </Col>
                    <Col sm="10">
                      Nasabah
                    </Col>
                  </Row>
                </Link>
                <Link className="textApp textSide" to="/add_employee">
                  <Row>
                    <Col sm="2">
                      <i className="fas fa-plus"></i>
                    </Col>
                    <Col sm="10">
                      Add Data
                    </Col>
                  </Row>
                </Link>
              </div>
            </div>
            <Container>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/employee">
                  <Employee />
                </Route>
                <Route path="/add_employee">
                  <AddEmployee />
                </Route>
              </Switch>
            </Container>
          </div>
        </div>
      </>

    )
  }
}
