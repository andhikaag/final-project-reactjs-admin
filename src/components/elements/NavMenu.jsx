import React, { Component } from 'react'
import {
  Row,
  Col,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class NavMenu extends Component {
  render() {
    return (
      <Link className="textApp textSide" to={this.props.to}>
        <Row>
          <Col sm="2">
            <i className={this.props.icon}></i>
          </Col>
          <Col sm="10">
            {this.props.text}
          </Col>
        </Row>
      </Link>
    )
  }
}
