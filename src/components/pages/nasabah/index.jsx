import React, { Component } from 'react'
import {
  Table,
  Row,
  Col,
  Pagination
} from 'react-bootstrap'
import Search from '../../elements/Search'
import HeaderText from '../../elements/HeaderText'
import API from '../../../api'


export default class index extends Component {
  state = {
    data: [],
    totalPage: 0,
    page: 1,
    currentPage: 0
  }

  componentDidMount() {
    const url = window.location
    const urlObject = new URL(url)
    const currentPage = urlObject.searchParams.get("page")
    let pageInt = parseInt(currentPage)
    let pageFix = pageInt - 1
    this.setState({ currentPage: pageInt })
    API.getNasabah(pageFix).then(res => {
      this.setState({
        data: res.data.data.content,
        totalPage: res.data.data.totalPages
      })
      console.log("total page", this.state.totalPage)
    })
  }

  handlePage = (e) => {
    window.location.href = "/nasabah?page=" + e.target.text
  }

  render() {
    console.log("Page", this.state.currentPage)
    let active = this.state.currentPage
    let items = [];
    let page = this.state.totalPage
    for (let number = 1; number <= page; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }
    return (
      <div>
        <div className="content">
          <HeaderText headText="List Data Nasabah" />
          <Row>
            <Col></Col>
            <Col>
              {/* <Search /> */}
            </Col>
          </Row>
          <Table responsive striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Email</th>
                <th>Nomor Telp</th>
                <th>Alamat</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((val, idx) => {
                return (
                  <tr key={idx} iddata={val, idx}>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>+62 {val.phone}</td>
                    <td>{val.address}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
          <Pagination onClick={this.handlePage}> {items}</Pagination>
        </div>
      </div>
    )
  }
}
