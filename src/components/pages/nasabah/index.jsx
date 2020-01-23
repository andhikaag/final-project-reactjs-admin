import React, { Component } from 'react'
import {
  Table,
  Badge,
  Row,
  Col,
  Form
} from 'react-bootstrap'
import Search from '../../elements/Search'
import Axios from 'axios'
import HeaderText from '../../elements/HeaderText'
import API from '../../../api'


export default class index extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    API.getNasabah().then(res => {
      this.setState({
        data: res.data.data
      })
      console.log(res)
    })
  }

  render() {
    return (
      <div>
        <div className="content">
          <HeaderText headText="List Data Nasabah" />
          <Row>
            <Col>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Search />
            </Col>
          </Row>
          <Table responsive striped bordered hover size="sm">
            <thead>
              <tr>
                <th>NIK</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Nomor Telp</th>
                <th>Alamat</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((val, idx) => {
                return (
                  <tr key={idx} iddata={val, idx}>
                    <td>{val.customer_nik}</td>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.phone}</td>
                    <td>{val.address}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
}
