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
import { checkToken, checkAuth } from '../../../auth/auth'


class Header extends Component {
  constructor(props) {
    super(props)
    checkToken()
    if (checkAuth()) {
      this.props.changeStatus()
    } else {
      alert("Access Denied")
      window.location.href = "/login"
    }
  }

  logout = () => {
    Cookie.remove('token')

    window.location.href = "/login"
  }

  render() {
    console.log(this.props.isLoggedIn)
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
                <NavMenu to="add-employee" icon="fas fa-plus" text="Add Data" />
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
