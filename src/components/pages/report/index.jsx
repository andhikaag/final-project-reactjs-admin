import React, { Component } from 'react'
import {
  Table,
  Row,
  Col,
} from 'react-bootstrap'
import { withRouter } from 'react-router'
import HeaderText from '../../elements/HeaderText'
import Search from '../../elements/Search'
import { Pagination } from 'react-bootstrap'
import API from '../../../api'

class Report extends Component {
  state = {
    data: [],
    totalPage: 0,
    page: 1
  }

  componentDidMount() {
    const url = window.location
    const urlObject = new URL(url)
    const currentPage = urlObject.searchParams.get("page")
    // API.getReports().then(res => {
    // this.setState({
    //   data: res.data.message.rows,
    //   totalPage: res.data.totalPage
    // })
    //   console.log(res)
    // })
    API.paginationTransaksi(currentPage).then(res => {
      console.log(res)
      this.setState({
        data: res.data.message.rows,
        totalPage: res.data.totalPage
      })
    })
  }

  handlePage(e) {
    console.log(e.target.text)
    window.location.href = "/report?page=" + e.target.text
  }

  render() {
    // let active = ;
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
      <>
        <div className="content">
          <HeaderText headText="List Data Transaksi" />
          <Row>
            <Col></Col>
            <Col>
              <Search />
            </Col>
          </Row>
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
              {this.state.data.map((val, idx) => {
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
          <Pagination onClick={this.handlePage}> {items}</Pagination>
        </div>
      </>
    )
  }
}

export default withRouter(Report)