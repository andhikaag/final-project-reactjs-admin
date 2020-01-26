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
    totalPage: 0,
    page: 1,
    currentPage: '',
    searchItem: ''
  }

  componentDidMount() {
    const url = window.location
    const urlObject = new URL(url)
    const currentPage = urlObject.searchParams.get("page")
    let pageInt = parseInt(currentPage)
    this.setState({ currentPage: pageInt })
    API.getEmployee(currentPage).then(res => {
      this.setState({
        data: res.data.data,
        totalPage: res.data.totalpage
      })
      console.log(res)
    })
  }

  onChangeSearch = (e) => {
    this.setState({ searchItem: e.target.value })
  }

  handlePage = (e) => {
    window.location.href = "/employee?page=" + e.target.text
  }

  handleSearch = () => {
    window.location.href = '/employee-search?id=' + this.state.searchItem
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
      <>
        <div className="content">
          <HeaderText headText="List Data Community Officer" />
          <Row>
            <Col></Col>
            <Col>
              <Search value={this.state.searchItem} onChange={this.onChangeSearch} onClick={this.handleSearch} />
            </Col>
          </Row>
          <Table responsive striped bordered hover size="sm">
            <thead>
              <tr>
                <th>NIK</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Alamat</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((val, idx) => {
                return (
                  <tr key={idx} iddata={val, idx}>
                    <td>{val.nik}</td>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.address}</td>
                    <td>
                      <ButtonApp
                        size="sm"
                        onClick={() => this.props.history.push("/info-employee?id=" + val.nik)}
                        variant="info"
                        text="Info"
                      />
                      <ButtonApp
                        size="sm"
                        onClick={() => this.props.history.push("/edit-employee?id=" + val.nik)}
                        variant="success"
                        text="Edit"
                      />
                    </td>
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

export default withRouter(Employee)
