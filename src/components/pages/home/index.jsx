import React, { Component } from 'react'
import {
  Row,
  Col,
  Card
} from 'react-bootstrap'
import { Line } from 'react-chartjs-2'
import CardCount from '../../elements/CardCount'
import Axios from 'axios'
import Cookie from 'react-cookies'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

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

class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <div className="notify">
          <Row>
            <Col lg="4">
              <CardCount className="notifyText" bg="success" text="Community Officer" value="200" />
            </Col>
            <Col lg="4">
              <CardCount className="notifyText" bg="primary" text="Nasabah" value="4000" />
            </Col>
            <Col lg="4">
              <CardCount className="notifyText" bg="warning" text="Nasabah Aktif" value="3000" />
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


export default Home
