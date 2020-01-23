import React, { Component } from 'react'
import {
  Table,
  Row,
  Col,
  Pagination
} from 'react-bootstrap'
import ButtonApp from '../../elements/ButtonApp'
import Search from '../../elements/Search'
import Axios from 'axios'
import { withRouter } from 'react-router'
import HeaderText from '../../elements/HeaderText'
import API from '../../../api'

class Employee extends Component {
  state = {
    data: [],
    activePage: 15
  }

  componentDidMount() {
    API.getEmployee().then(res => {
      this.setState({
        data: res
      })
      console.log(this.state.data)
    })
  }

  handlePageChange(pageNumber) {
    Axios({
      url: 'http://54.254.180.214:9803/api/nasabah/list?page=' + pageNumber,
      // url: 'http://192.168.30.94:3000/reports/all',
      method: 'GET',
      headers: {
        "token": "xxx123",
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        console.log(res)
        this.setState({
          data: res.data.data,
          activePage: res.data.page
        })
      }).catch((error) => {
        console.log(error)
        alert("error", error)
      })
    // console.log(`active page is ${pageNumber}`);
    // this.setState({ activePage: pageNumber });
  }
  // onclickInfo = (id) => {
  //   this.props.history.push(`/detail-post/${id}`)
  // }

  render() {
    return (
      <>
        <div className="content">
          <HeaderText headText="List Data Community Officer" />
          <Row>
            <Col></Col>
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((val, idx) => {
                return (
                  <tr key={idx} iddata={val, idx}>
                    <td>{val.nama}</td>
                    <td>{val.email}</td>
                    <td>{val.alamat}</td>
                    <td>
                      <ButtonApp size="sm" onClick={() => this.props.history.push("/info-employee?id=" + val.id)} variant="info" text="info" />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </div>
      </>
    )
  }
}

export default withRouter(Employee)
