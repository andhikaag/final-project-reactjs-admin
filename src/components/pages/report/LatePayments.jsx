import React, { Component } from 'react'
import {
    Table,
    Row,
    Col,
} from 'react-bootstrap'
import HeaderText from '../../elements/HeaderText'
import { Pagination } from 'react-bootstrap'
import API from '../../../api'
import ButtonApp from '../../elements/ButtonApp'

class LatePayments extends Component {
    state = {
        data: [],
        totalPage: 0,
        currentPage: 0,
        page: 1
    }

    componentDidMount() {
        const url = window.location
        const urlObject = new URL(url)
        const currentPage = urlObject.searchParams.get("page")
        API.getTransactionLate(currentPage).then(res => {
            console.log(res)
            this.setState({
                data: res.data.message.rows,
                totalPage: res.data.totalPage
            })
        })
    }

    handlePage = (e) => {
        // const url = window.location
        // const urlObject = new URL(url)
        // const idCO = urlObject.searchParams.get("id")
        window.location.href = "/late-payments?page=" + e.target.text
    }

    handleAll = () => {
        window.location.href = "/report"
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
                        <Col>
                            <ButtonApp variant="success" text="All" onClick={this.handleAll} />
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <br />
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

export default LatePayments