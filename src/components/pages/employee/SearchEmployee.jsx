import React, { Component } from 'react'
import {
  Table,
  Row,
  Col,
} from 'react-bootstrap'
import ButtonApp from '../../elements/ButtonApp'
import Search from '../../elements/Search'
import { withRouter } from 'react-router'
import HeaderText from '../../elements/HeaderText'
import API from '../../../api'

class Employee extends Component {
  state = {
    nik: '',
    name: '',
    email: '',
    address: '',
    searchItem: ''
  }

  componentDidMount() {
    const url = window.location
    const urlObject = new URL(url)
    const id = urlObject.searchParams.get("id")
    API.getEmployeeById(id).then(res => {
      this.setState({
        nik: res.data.data.nik,
        name: res.data.data.name,
        email: res.data.data.email,
        address: res.data.data.address
      })
      console.log(res)
    })
  }

  onChangeSearch = (e) => {
    this.setState({ searchItem: e.target.value })
  }

  handleSearch = () => {
    window.location.href = '/employee-search?id=' + this.state.searchItem
  }

  render() {
    return (
      <>
        <div className="content">
          <HeaderText headText="List Data Community Officer" />
          <Row>
            <Col></Col>
            <Col>
              <Search value={this.state.searchItem} onChange={this.onChangeSearch} onClick={this.handleSearch} />
            </Col>
          </Row>
          <Table responsive striped bordered hover size="sm">
            <thead>
              <tr>
                <th>NIK</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Alamat</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.nik}</td>
                <td>{this.state.name}</td>
                <td>{this.state.email}</td>
                <td>{this.state.address}</td>
                <td>
                  <ButtonApp
                    size="sm"
                    onClick={() => this.props.history.push("/info-employee?id=" + this.state.nik)}
                    variant="info"
                    text="Info"
                  />
                  <ButtonApp
                    size="sm"
                    onClick={() => this.props.history.push("/edit-employee?id=" + this.state.nik)}
                    variant="success"
                    text="Edit"
                  />
                </td>
              </tr>

            </tbody>
          </Table>
        </div>
      </>
    )
  }
}

export default withRouter(Employee)
