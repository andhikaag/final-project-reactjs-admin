import React, { Component } from 'react'
import {
  Form,
  Col,
  Button,
} from 'react-bootstrap'
import HeaderText from '../../elements/HeaderText'
import Axios from 'axios'
import Cookie from 'react-cookies'
import API from '../../../api'

export default class AddEmployeeLogin extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
    nama: '',
    nik: '',
    role: '2',
    statusPassword: false,
  }

  componentDidMount = () => {
    const url = window.location
    const urlObject = new URL(url)
    const idCO = urlObject.searchParams.get("id")
    // const page = urlObject.searchParams.get("page")
    console.log("idCO : ", idCO)
    API.getEmployeeById(idCO).then(res => {
      console.log(res)
      this.setState({

        nik: res.data.data.nik,
        nama: res.data.data.name,
      })
    })
  }

  onChangePassword = (e) => {
    this.setState({ password: e.target.value })
  }
  onChangeConfirmPassword = (e) => {
    this.setState({ confirmPassword: e.target.value })
    if (e.target.value === this.state.password) {
      this.setState({ statusPassword: true })
    } else {
      this.setState({ statusPassword: false })
    }
  }

  onChangeUsername = (e) => {
    this.setState({ username: e.target.value })
  }

  onChangeNama = (e) => {
    this.setState({ nama: e.target.value })
  }

  onChangeNIK = (e) => {
    this.setState({ nik: e.target.value })
    if (e.target.value.length === 8) {
      this.setState({ statusNIK: true })
    } else {
      this.setState({ statusNIK: false })
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.statusPassword) {
      console.log(this.state)
      const token = Cookie.load('token')
      Axios({
        // 54.254.180.214:9803/api/login
        url: 'http://192.168.43.216:3000/users/register',
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          'Authorization': token
        },
        data: {
          "username": this.state.username,
          "password": this.state.confirmPassword,
          "role_id": this.state.role,
          "name": this.state.nama,
          "nik": this.state.nik
        }
      })
        .then((res) => {
          console.info(res)
          if (res.status === 200) {
            alert(res.data.message.status)
          } else {
            alert(res.data.message.status)
          }
        }).catch((err) => {
          console.log(err)
          alert("Data sudah ada/gagal")
        })
    } else {
      alert("data belum benar")
    }
  }

  render() {
    return (
      <div className="content">
        <HeaderText headText="Form Tambah Akun Community Officer" />
        <Form onSubmit={this.onSubmit}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" value={this.state.username} onChange={this.onChangeUsername} placeholder="Masukkan Username" required />
            </Form.Group>
            <Form.Group as={Col}>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Password</Form.Label>
              <Form.Control value={this.state.password} onChange={this.onChangePassword} type="password" placeholder="Masukkan Password" required />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control value={this.state.confirmPassword} onChange={this.onChangeConfirmPassword} type="password" placeholder="Konfirmasi Password" required />
              {
                this.state.statusPassword ?

                  <small className="form-text text-success">
                    OK!
                  </small> :
                  <small className="form-text text-danger">
                    *isi harus sama dengan kolom password
                  </small>
              }
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" value={this.state.nama} placeholder="Masukkan Nama" disabled />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>NIK</Form.Label>
              <Form.Control type="text" value={this.state.nik} onChange={this.onChangeNIK} placeholder="Masukkan NIK" disabled />
            </Form.Group>
          </Form.Row>
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
