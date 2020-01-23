import React, { Component } from 'react'
import {
  Form,
  Col,
  Button,
} from 'react-bootstrap'
import HeaderText from '../../elements/HeaderText'
import Axios from 'axios'
import Cookie from 'react-cookies'

export default class AddEmployeeLogin extends Component {
  constructor() {
    super()

    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this)
    this.onChangeNama = this.onChangeNama.bind(this)
    this.onChangeNIK = this.onChangeNIK.bind(this)

    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      nama: '',
      nik: '',
      role: '2',
      statusForm: false
    }
  }

  onChangePassword = (e) => {
    this.setState({ password: e.target.value })
  }
  onChangeConfirmPassword = (e) => {
    this.setState({ confirmPassword: e.target.value })
    if (e.target.value === this.state.password) {
      this.setState({ statusForm: true })
    } else {
      this.setState({ statusForm: false })
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
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    const token = Cookie.load('token')
    Axios({
      // 54.254.180.214:9803/api/login
      url: 'http://192.168.30.94:3000/users/register',
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
          alert("sukses")
          window.location.href = "/add-employee-login-account"
          // localStorage.setItem("access_token", token)
          // alert("sukses")
          // let tokenJson = JSON.parse(atob(token.split(".")[1]))
          // console.log(tokenJson)
          // if (res.data.data.role === null) {
          // } else {
          //   alert("access denied")
          // }
        } else {
          alert("Username/Password Salah")
        }
      }).catch((error) => {
        console.log(error)
        alert("Error", error)
      })
  }

  render() {
    return (
      <div className="content">
        <HeaderText headText="Form Tambah Akun Community Officer" />
        <Form onSubmit={this.onSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridNama">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" value={this.state.username} onChange={this.onChangeUsername} placeholder="Masukkan Username" required />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridNama">
              <Form.Label>Password</Form.Label>
              <Form.Control value={this.state.password} onChange={this.onChangePassword} type="password" placeholder="Masukkan Password" required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control value={this.state.confirmPassword} onChange={this.onChangeConfirmPassword} type="password" placeholder="Konfirmasi Password" required />
              {
                this.state.statusForm ?

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
            <Form.Group as={Col} controlId="formGridNama">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" value={this.state.nama} onChange={this.onChangeNama} placeholder="Masukkan Nama" required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>NIK</Form.Label>
              <Form.Control type="text" value={this.state.nik} onChange={this.onChangeNIK} placeholder="Masukkan NIK" required />
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
