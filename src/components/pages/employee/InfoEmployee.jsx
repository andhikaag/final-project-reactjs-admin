import React, { Component } from 'react'
import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Badge,
  Table,
  Button
} from 'react-bootstrap'
import { Line } from 'react-chartjs-2'

const state = {
  labels: ['Januari', 'Februari', 'Maret',
    'April', 'Mei', 'Juni', 'Juli', 'Agustus',
    'September', 'Oktober', 'Novermber', 'Desember'],
  datasets: [
    {
      label: 'Nasabah',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class InfoEmployee extends Component {

  componentDidMount() {
    const url = window.location
    const urlObject = new URL(url)
    const idNasabah = urlObject.searchParams.get("id")
    console.log(idNasabah)
  }

  render() {
    return (
      <div className="content">
        <Row>
          <Col lg="5">
            <Card border="info" className="cardDesg">
              <Card.Header className="bg-info text-light">Community Officer Info</Card.Header>
              <Card.Body>
                <Card.Title>Andhika Andyaguna Gindrayana</Card.Title>
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
                    <Col lg="8">andhikaag@email.com</Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col lg="3">Alamat</Col>
                    <Col lg="1">:</Col>
                    <Col lg="8">Jl. jalan no.22 Rt.08 Rw.23 Depok</Col>
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
                    <Card.Link className="btn btn-sm navbarAdmin text-light" href="">
                      Edit
                        </Card.Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          {/* chart */}
          <Col lg="7">
            <Card border="success" className="cardDesg">
              <Card.Header className="bg-success text-light">
                Chart
              </Card.Header>
              <Card.Body>
                <Line
                  data={state}
                  options={{
                    title: {
                      display: true,
                      text: 'Jumlah nasabah per bulan',
                      fontSize: 20
                    },
                    legend: {
                      display: true,
                      position: 'right'
                    }
                  }}
                />
              </Card.Body>
            </Card>
            <Card border="warning" className="cardDesg">
              <Card.Header className="bg-warning text-light">
                List Nasabah
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
                        <Button variant="outline-info" size="sm">
                          Info
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>
                        <Button variant="outline-info" size="sm">
                          Info
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry the Bird</td>
                      <td>
                        <Button variant="outline-info" size="sm">
                          Info
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
              <Card.Body>
                <Row>
                  <Col lg="8"></Col>
                  <Col lg="4">
                    <Card.Link href="#">Selengkapnya>></Card.Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
