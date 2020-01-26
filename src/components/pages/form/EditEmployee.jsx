import React, { Component } from 'react'
import {
    Form,
    Col,
    Button,
} from 'react-bootstrap'
import HeaderText from '../../elements/HeaderText'
import API from '../../../api'
import Axios from 'axios'
import { withRouter } from 'react-router-dom'
import Cookie from 'react-cookies'

class EditEmployee extends Component {
    state = {
        name: '',
        nik: '',
        email: '',
        address: ''
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
                address: res.data.data.address
            })
        })
    }

    onChangeNama = (e) => {
        this.setState({ name: e.target.value })
    }

    onChangeEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    onChangeAlamat = (e) => {
        this.setState({ address: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const url = window.location
        const urlObject = new URL(url)
        const idCO = urlObject.searchParams.get("id")
        console.log(this.state)
        // const token = Cookie.load('token')
        Axios({
            url: 'http://192.168.1.15:3000/employee/edit/' + idCO,
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
                // 'Authorization': token
            },
            data: {
                "name": this.state.name,
                "email": this.state.email,
                "address": this.state.address
            }
        })
            .then((res) => {
                console.info(res)
                alert("Data berhasil diubah")
                this.props.history.push('/employee?page=')
            }).catch((err) => {
                console.log(err)
                alert(err.message)
            })
    }

    render() {
        return (
            <div className="content">
                <HeaderText headText="Form Edit Data Community Officer" />
                <Form onSubmit={this.onSubmit}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Nama</Form.Label>
                            <Form.Control value={this.state.name} onChange={this.onChangeNama} type="text" placeholder="Masukkan Nama" />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={this.state.email} onChange={this.onChangeEmail} type="email" placeholder="Masukkan Email" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group>
                        <Form.Label>NIK</Form.Label>
                        <Form.Control type="number" value={this.state.nik} disabled />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Alamat</Form.Label>
                        <Form.Control type="text" value={this.state.address} onChange={this.onChangeAlamat} placeholder="contoh: Jl. raya No.xx Rt.xx Rw.xx kecamatan kelurahan kota kode pos" />
                    </Form.Group>
                    <center>
                        <Button size="lg" className="buttonApp" type="submit">
                            Submit
                        </Button>
                    </center>
                </Form>
            </div>
        )
    }
}

export default withRouter(EditEmployee)
