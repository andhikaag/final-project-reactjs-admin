import React, { Component } from 'react'
import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Badge,
  Table,
  Pagination
} from 'react-bootstrap'
import HeaderText from '../../elements/HeaderText'
import API from '../../../api'

export default class InfoEmployee extends Component {
  state = {
    nik: '',
    name: '',
    email: '',
    address: '',
    nasabah: [],
    // totalPage: 0,
    // page: 1
  }

  componentDidMount() {
    const url = window.location
    const urlObject = new URL(url)
    const idCO = urlObject.searchParams.get("id")
    // const page = urlObject.searchParams.get("page")
    console.log("idCO : ", idCO)
    API.getEmployeeById(idCO).then(res => {
      console.log(res)
      this.setState({

        nik: res.data.data.nik,
        name: res.data.data.name,
        email: res.data.data.email,
        address: res.data.data.address,
      })
    })

    API.getNasabahByIdCO(idCO).then(res => {
      console.log("nasabah : ", res)
      this.setState({
        nasabah: res.data.data
        // totalPage: 
      })
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }

  // handlePage(e) {
  //   console.log(e.target.text)
  //   const url = window.location
  //   const urlObject = new URL(url)
  //   const idCO = urlObject.searchParams.get("id")
  //   window.location.href = "/info-employee?id=" + idCO + "&page=" + e.target.text
  // }

  render() {
    // let items = [];
    // let page = this.state.totalPage
    // for (let number = 1; number <= page; number++) {
    //   items.push(
    //     // active={number === active}
    //     <Pagination.Item key={number}>
    //       {number}
    //     </Pagination.Item>,
    //   );
    // }
    return (
      <div className="content">
        <HeaderText headText="Info Data Community Officer" />
        <Card border="info" className="cardDesg">
          <Card.Header className="bg-info text-light">Community Officer Info</Card.Header>
          <Card.Body>
            <center>
              <Card.Title>{this.state.name}</Card.Title>
            </center>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <Row>
                <Col lg="3">NIK</Col>
                <Col lg="1">:</Col>
                <Col lg="8">{this.state.nik}</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col lg="3">Email</Col>
                <Col lg="1">:</Col>
                <Col lg="8">{this.state.email}</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col lg="3">Alamat</Col>
                <Col lg="1">:</Col>
                <Col lg="8">{this.state.address}</Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Card>

        <Card border="success" className="cardDesg">
          <Card.Header className="bg-success text-light">
            List Nasabah
              </Card.Header>
          <Card.Body>
            <Table responsive striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>NIK</th>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>Alamat</th>
                </tr>
              </thead>
              <tbody>
                {this.state.nasabah === null ?
                  <tr>
                    <td colSpan="4">
                      <center>Tidak Ada Nasabah</center>
                    </td>
                  </tr> :
                  this.state.nasabah.map((val, idx) => {
                    return (
                      <tr key={idx} iddata={val, idx}>
                        <td>{val.name}</td>
                        <td>{val.email}</td>
                        <td>{val.phone}</td>
                        <td>{val.address}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
            {/* <Pagination onClick={this.handlePage}>{items}</Pagination> */}
          </Card.Body>
        </Card>
      </div>
    )
  }
}
