import React, { Component } from 'react'
import {
  Switch,
  Route,
  Link
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

export default class index extends Component {
  render() {
    return (
      <>
        <div id="page-content-wrapper">
          <Navbar expand="lg" className="navbarAdmin" variant="dark">
            <Navbar.Brand className="sideAdmin" href="#home">Admin</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link className="text-light" href="#login">Log Out</Nav.Link>
            </Navbar.Collapse>
          </Navbar>
          <div class="d-flex" id="wrapper">
            <div class="sidebar" id="sidebar-wrapper">
              <div class="list-group list-group-flush">
                <div className="imageAdmin">
                  <img src={AdminLogo} width="100" height="100" />
                </div>
                <div className="navbarAdmin">
                  <Nav.Link className="text-light" href="#">
                    <Row>
                      <Col sm="2">
                        <i className="fas fa-home"></i>
                      </Col>
                      <Col sm="10">
                        Home
                      </Col>
                    </Row>
                  </Nav.Link>
                </div>
                <Nav.Link className="text-dark" href="#">
                  <Row>
                    <Col sm="2">
                      <i className="fas fa-address-book"></i>
                    </Col>
                    <Col sm="10">
                      Comunnity Officer
                    </Col>
                  </Row>
                </Nav.Link>
                <Nav.Link className="text-dark" href="#">
                  <Row>
                    <Col sm="2">
                      <i className="fa fa-handshake-o"></i>
                    </Col>
                    <Col sm="10">
                      Nasabah
                    </Col>
                  </Row>
                </Nav.Link>
                <Nav.Link className="text-dark" href="#">
                  <Row>
                    <Col sm="2">
                      <i className="fas fa-plus"></i>
                    </Col>
                    <Col sm="10">
                      Add Data
                    </Col>
                  </Row>
                </Nav.Link>
              </div>
            </div>
            <Container>
              Card
              <div className="content">

              </div>
            </Container>
          </div>
        </div>
      </>

    )
  }
}
