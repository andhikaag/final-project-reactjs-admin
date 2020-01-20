import React, { Component } from 'react'
import {
  Table,
  Badge,
  Row,
  Col,
} from 'react-bootstrap'
import Search from '../../elements/Search'
import Axios from 'axios'

export default class index extends Component {
  state = {

  }

  render() {
    return (
      <div>
        <div className="content">
          <Row>
            <Col></Col>
            <Col>
              <Search />
            </Col>
          </Row>
          <Table responsive striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <Badge pill variant="info">
                    Blue
                </Badge>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
}
