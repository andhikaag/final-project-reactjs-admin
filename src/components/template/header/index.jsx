import React, { Component } from 'react'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import {
  Container,
} from 'react-bootstrap'
import Cookie from 'react-cookies'
import { connect } from 'react-redux'

//elements
import NavMenu from '../../elements/NavMenu'
import ImageAdmin from '../../elements/ImageAdmin'
import TopBar from '../../elements/TopBar'

//pages
import Home from '../../pages/home'
import Employee from '../../pages/employee'
import AddEmployee from '../../pages/form/AddEmployee'
import Nasabah from '../../pages/nasabah'
import Info from '../../pages/employee/InfoEmployee'
import AddEmployeeLogin from '../../pages/form/AddEmployeeLogin'
import { checkToken } from '../../../auth/auth'
import Report from '../../pages/report'


class Header extends Component {
  constructor(props) {
    super(props)
    checkToken()
    this.props.changeStatus()
  }

  logout = () => {
    Cookie.remove('token')

    window.location.href = "/login"
  }

  render() {
    console.log("status isLoggedIn", this.props.isLoggedIn)
    return (
      <>
        <div id="page-content-wrapper">
          <TopBar brandName="Syariah Financing" textRight="Log Out" link={this.logout} />
          <div className="d-flex" id="wrapper">
            <div className="sidebar" id="sidebar-wrapper">
              <div className="list-group list-group-flush">
                <ImageAdmin />
                <NavMenu to="/" icon="fas fa-home" text="Home" />
                <NavMenu to="/employee" icon="fas fa-address-book" text="Community Officer" />
                <NavMenu to="/nasabah" icon="fa fa-handshake-o" text="Nasabah" />
                <NavMenu to="report" icon="fa fa-book" text="Transaksi" />
                <NavMenu to="add-employee" icon="fas fa-plus" text="Add Data CO" />
                <NavMenu to="add-employee-login-account" icon="fa fa-user-plus" text="Add Akun CO" />
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
              </Switch>
            </Container>
          </div>
        </div>
      </>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login
  }
}

const mapDispatch = (dispatch) => {
  return {
    changeStatus: () => dispatch({ type: 'ADD_SESSION' }),
  }
}
export default connect(mapStateToProps, mapDispatch)(Header)
