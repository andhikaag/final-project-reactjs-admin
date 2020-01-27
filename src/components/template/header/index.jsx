import React, { Component } from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import {
  Container, Badge,
} from 'react-bootstrap'
import Cookie from 'react-cookies'

//elements
import NavMenu from '../../elements/NavMenu'
import ImageAdmin from '../../elements/ImageAdmin'
import TopBar from '../../elements/TopBar'

//pages
import Home from '../../pages/home'
import Employee from '../../pages/employee'
import AddEmployee from '../../pages/form/AddEmployee'
import EditEmployee from '../../pages/form/EditEmployee'
import Nasabah from '../../pages/nasabah'
import Info from '../../pages/employee/InfoEmployee'
import AddEmployeeLogin from '../../pages/form/AddEmployeeLogin'
import { checkToken } from '../../../auth/auth'
import Report from '../../pages/report'
import LatePayments from '../../pages/report/LatePayments'
import SearchCoName from '../../pages/report/SearchCoName'
import SearchEmployee from '../../pages/employee/SearchEmployee'


class Header extends Component {
  constructor(props) {
    super(props)
    checkToken()
    // this.props.changeStatus()
    this.state = {
      namaAdmin: Cookie.load('nama')
    }
  }

  logout = () => {
    Cookie.remove('token')

    window.location.href = "/login"
  }

  render() {
    return (
      <>
        <div id="page-content-wrapper">
          <TopBar brandName="Syariah Financing" textRight="Log Out" link={this.logout} />
          <div className="d-flex" id="wrapper">
            <div className="sidebar" id="sidebar-wrapper">
              <div className="list-group list-group-flush">
                <ImageAdmin />
                <p className="text-center">
                  <Badge variant="success">{this.state.namaAdmin}</Badge>
                </p>
                <NavMenu to="/" icon="fas fa-home" text="Home" />
                <NavMenu to="/employee?page=1" icon="fas fa-address-book" text="Community Officer" />
                <NavMenu to="/nasabah" icon="fa fa-handshake-o" text="Nasabah" />
                <NavMenu to="report" icon="fa fa-book" text="Financing" />
                <NavMenu to="add-employee" icon="fas fa-plus" text="Add Data CO" />
                {/* <NavMenu to="add-employee-login-account" icon="fa fa-user-plus" text="Add Akun CO" /> */}
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
                <Route path="/nasabah">
                  <Nasabah />
                </Route>
                <Route path="/add-employee">
                  <AddEmployee />
                </Route>
                <Route path="/info-employee">
                  <Info />
                </Route>
                <Route path="/add-employee-login-account">
                  <AddEmployeeLogin />
                </Route>
                <Route path="/report">
                  <Report />
                </Route>
                <Route path="/edit-employee">
                  <EditEmployee />
                </Route>
                <Route path="/late-payments">
                  <LatePayments />
                </Route>
                <Route path="/report-search">
                  <SearchCoName />
                </Route>
                <Route path="/employee-search">
                  <SearchEmployee />
                </Route>
              </Switch>
            </Container>
          </div>
        </div>
      </>

    )
  }
}

export default Header
