import React, { Component } from 'react'
import {
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
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
                    <i className="logo fas fa-home"></i>
                    Home
                  </Nav.Link>
                </div>
                <Nav.Link className="text-dark" href="#">
                  <i className="logo fas fa-address-book"></i>
                  Comunnity Officer
                </Nav.Link>
                <Nav.Link className="text-dark" href="#">
                  <i className="logo fas fa-plus"></i>
                  Add Data
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
