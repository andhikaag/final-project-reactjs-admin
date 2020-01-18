import React, { Component } from 'react'
import {
  Table,
  Badge,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap'

export default class index extends Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col>
              <Button variant="info">Add Data</Button>
            </Col>
            <Col>
              <InputGroup className="mb-3">
                <FormControl placeholder="Search...." />
                <InputGroup.Append>
                  <Button variant="outline-warning">Search</Button>
                </InputGroup.Append>
              </InputGroup>
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
        </div>
      </>
    )
  }
}
