import React, { Component } from 'react'
import {
  Form,
  Col,
  Button,
} from 'react-bootstrap'
import HeaderText from '../../elements/HeaderText'
import Cookie from 'react-cookies'
import Axios from 'axios'

export default class addEmployee extends Component {

  state = {
    nama: '',
    email: '',
    alamat: '',
    nik: '',
    statusNik: false
  }

  onChangeNama = (e) => {
    this.setState({ nama: e.target.value })
  }

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  onChangeAlamat = (e) => {
    this.setState({ alamat: e.target.value })
  }

  onChangeNik = (e) => {
    this.setState({ nik: e.target.value })
    if (e.target.value.length === 8) {
      this.setState({ statusNik: true })
    } else {
      this.setState({ statusNik: false })
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.statusNik) {
      console.log(this.state)
      const token = Cookie.load('token')
      Axios({
        // 54.254.180.214:9803/api/login
        url: 'http://192.168.43.216:3000/employee/register',
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          'Authorization': token
        },
        data: {
          "nik": this.state.nik,
          "email": this.state.email,
          "name": this.state.nama,
          "address": this.state.alamat
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
          alert(err.message)
        })

    } else {
      alert("Data belum benar")
    }

  }

  render() {
    return (
      <div className="content">
        <HeaderText headText="Form Tambah Data Community Officer" />
        <Form onSubmit={this.onSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridNama">
              <Form.Label>Nama</Form.Label>
              <Form.Control value={this.state.nama} onChange={this.onChangeNama} type="text" placeholder="Masukkan Nama" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control value={this.state.email} onChange={this.onChangeEmail} type="email" placeholder="Masukkan Email" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridNIK">
            <Form.Label>NIK</Form.Label>
            <Form.Control type="text" maxLength="8" value={this.state.nik} onChange={this.onChangeNik} placeholder="Masukkan NIK" />
            {
              this.state.statusNik ?
                <small className="form-text text-success">
                  OK!
                  </small> :
                <small className="form-text text-danger">
                  *isi harus 8 angka
                  </small>
            }
          </Form.Group>

          <Form.Group controlId="formGridAlamat">
            <Form.Label>Alamat</Form.Label>
            <Form.Control type="text" value={this.state.alamat} onChange={this.onChangeAlamat} placeholder="contoh: Jl. raya No.xx Rt.xx Rw.xx kecamatan kelurahan kota kode pos" />
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
