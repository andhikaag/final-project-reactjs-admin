import React, { Component } from 'react'
import {
  Row,
  Col,
} from 'react-bootstrap'
// import { Line, Bar } from 'react-chartjs-2'
import CardCount from '../../elements/CardCount'
import API from '../../../api'

// const chart = {
//   labels: ['Januari', 'Februari', 'Maret',
//     'April', 'Mei', 'Juni', 'Juli', 'Agustus',
//     'September', 'Oktober', 'Novermber', 'Desember'],
//   datasets: [
//     {
//       label: 'Nasabah',
//       fill: false,
//       lineTension: 0.5,
//       backgroundColor: 'rgba(75,192,192,1)',
//       borderColor: 'rgba(0,0,0,1)',
//       borderWidth: 2,
//       data: [65, 59, 80, 81, 56]
//     }
//   ]
// }

class Home extends Component {

  state = {
    totalNasabah: 0,
    totalEmployee: 0,
    error: ''
  }

  componentDidMount() {
    API.getNasabah().then(res => {
      this.setState({
        totalNasabah: res.data.data.totalElements
      })
      console.log(res)
    }).catch((err) => {
      this.setState({ error: err.message })
      console.log(this.state.error)
      // alert(err.message)
    })

    API.getEmployeeAll().then(res => {
      console.log("co : ", res)
      this.setState({
        totalEmployee: res.data.totaldata,
      })
    })
  }

  render() {
    return (
      <div className="notify">
        <Row>
          <Col lg="6">
            <CardCount className="notifyText" bg="success" text="Community Officer" value={this.state.totalEmployee} />
          </Col>
          <Col lg="6">
            <CardCount className="notifyText" bg="primary" text="Nasabah" value={this.state.totalNasabah} />
          </Col>
        </Row>
        {/* <Bar
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
          /> */}
      </div>
    )
  }
}


export default Home
