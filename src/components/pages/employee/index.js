import React, { Component } from 'react'
import { Table, Badge } from 'react-bootstrap'

export default class index extends Component {
  render() {
    return (
      <>
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
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>
                <Badge pill variant="success">
                  green
                </Badge>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>
                <Badge pill variant="danger">
                  Red
                </Badge>
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    )
  }
}
