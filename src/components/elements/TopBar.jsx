import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar,
  Nav,
} from 'react-bootstrap'

export default class TopBar extends Component {
  render() {
    return (
      <Navbar expand="lg" className="navbarAdmin" variant="dark">
        <Navbar.Brand>
          <Link className="text-light headText" to="/">
            {this.props.brandName}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link className="text-light" href="/login">{this.props.textRight}</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
