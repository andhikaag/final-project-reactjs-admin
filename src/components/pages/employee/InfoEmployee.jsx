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
    data: {

    },
    transaksi: [],
    latePayment: [],
    totalPage: 0,
    page: 1
  }

  componentDidMount() {
    const url = window.location
    const urlObject = new URL(url)
    const idCO = urlObject.searchParams.get("id")
    const page = urlObject.searchParams.get("page")
    console.log("idCO : ", idCO)
    API.getTransactionByCO(idCO, page).then(res => {
      // let CONames = Object.keys(res.data.dataResponse)
      console.log(res)
      // console.log(res.data.dataResponse[CONames[0]])
      this.setState({
        // transaksi: res.data.dataResponse[CONames[0]]
        transaksi: res.data.message.rows,
        totalPage: res.data.totalPage
      })
    })
  }

  handlePage(e) {
    console.log(e.target.text)
    const url = window.location
    const urlObject = new URL(url)
    const idCO = urlObject.searchParams.get("id")
    window.location.href = "/info-employee?id=" + idCO + "&page=" + e.target.text
  }

  render() {
    let items = [];
    let page = this.state.totalPage
    for (let number = 1; number <= page; number++) {
      items.push(
        // active={number === active}
        <Pagination.Item key={number}>
          {number}
        </Pagination.Item>,
      );
    }
    return (
      <div className="content">
        <HeaderText headText="Info Data Community Officer" />
        <Card border="info" className="cardDesg">
          <Card.Header className="bg-info text-light">Community Officer Info</Card.Header>
          <Card.Body>
            <center>
              <Card.Title>{this.state.nama}</Card.Title>
            </center>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <Row>
                <Col lg="3">Id</Col>
                <Col lg="1">:</Col>
                <Col lg="8">sf3gdg43tdgdg</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col lg="3">NIK</Col>
                <Col lg="1">:</Col>
                <Col lg="8">0349294592932394</Col>
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
                <Col lg="8">{this.state.alamat}</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col lg="3">Status</Col>
                <Col lg="1">:</Col>
                <Col lg="8">
                  <Badge pill variant="danger">
                    Not Active
                  </Badge>
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Row>
              <Col lg="10"></Col>
              <Col lg="2">
                <Card.Link className="btn btn-lg btnEdit text-light" href="">
                  Edit Data
                </Card.Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card border="success" className="cardDesg">
          <Card.Header className="bg-success text-light">
            List Transaksi
              </Card.Header>
          <Card.Body>
            <Table responsive striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Nama Nasabah</th>
                  <th>Pembayaran Ke</th>
                  <th>Plafon</th>
                  <th>Jumlah Transaksi</th>
                  <th>tanggal</th>
                  <th>keterangan</th>
                  <th>CO</th>
                </tr>
              </thead>
              <tbody>
                {this.state.transaksi.map((val, idx) => {
                  return (
                    <tr key={idx} iddata={val, idx}>
                      <td>{val.trxId}</td>
                      <td>{val.accountName}</td>
                      <td>{val.installmentNo}</td>
                      <td>{val.plafon}</td>
                      <td>{val.postedAmount}</td>
                      <td>{val.postedDate}</td>
                      <td>{val.ket}</td>
                      <td>{val.postedBy}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
            <Pagination onClick={this.handlePage}>{items}</Pagination>
          </Card.Body>
        </Card>
        <Card border="danger" className="cardDesg">
          <Card.Header className="bg-danger text-light">
            List Late Payments
              </Card.Header>
          <Card.Body>
            <Table responsive striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark antonius julius</td>
                  <td>
                    Info
                      </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>

        </Card>

      </div>
    )
  }
}
