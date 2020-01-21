import React, { Component } from 'react'
import {
  Table,
  Badge,
  Row,
  Col,
} from 'react-bootstrap'
import ButtonApp from '../../elements/ButtonApp'
import Search from '../../elements/Search'
import Axios from 'axios'
import { withRouter } from 'react-router'

class Employee extends Component {
  state = {
    data: []
  }

  componentDidMount = () => {
    Axios({
      url: 'http://54.254.180.214:9803/api/nasabah/list',
      method: 'GET',
      headers: {
        "token": "xxx123",
        "Content-Type": "application/json",
      }
    })
      .then((res) => {
        console.log(res)
        this.setState({
          data: res.data.data
        })
      }).catch((error) => {
        console.log(error)
        alert("error", error)
      })
  }

  // onclickInfo = (id) => {
  //   this.props.history.push(`/detail-post/${id}`)
  // }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col>
              <ButtonApp text="Add Data" variant="info" />
            </Col>
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
                      <Badge pill variant="info">
                        Blue
                      </Badge>
                    </td>
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
