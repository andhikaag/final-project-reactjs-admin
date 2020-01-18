import React, { Component } from 'react'
import {
  Row,
  Col,
  Card
} from 'react-bootstrap'
import { Line } from 'react-chartjs-2'

const chart = {
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

export default class index extends Component {
  render() {
    return (
      <div>
        <div className="notify">
          <Row>
            <Col lg="3">
              <Card className="notifyText" bg="success" text="white">
                <Card.Header>
                  <Card.Link className="text-light" href="#">
                    Comunnity Officer
                       </Card.Link>
                </Card.Header>
                <Card.Body>
                  <Card.Title>200</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3">
              <Card className="notifyText" bg="primary" text="white">
                <Card.Header>
                  <Card.Link className="text-light" href="#">
                    Nasabah
                       </Card.Link>
                </Card.Header>
                <Card.Body>
                  <Card.Title>4000</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3">
              <Card className="notifyText" bg="warning" text="white">
                <Card.Header>
                  <Card.Link className="text-light" href="#">
                    Nasabah Aktif
                       </Card.Link>
                </Card.Header>
                <Card.Body>
                  <Card.Title>3000</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3">
              <Card className="notifyText pinkColor" text="white">
                <Card.Header>
                  <Card.Link className="text-light" href="#">
                    Nasabah Baru
                       </Card.Link>
                </Card.Header>
                <Card.Body>
                  <Card.Title>600</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <br />
        <div className="content">
          <Line
            data={chart}
            options={{
              title: {
                display: true,
                text: 'Jumlah nasabah',
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'right'
              }
            }}
          />
        </div>
      </div>
    )
  }
}
