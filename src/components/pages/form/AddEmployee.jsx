import React, { Component } from 'react'
import {
  Form,
  Col,
  Button,
} from 'react-bootstrap'
import HeaderText from '../../elements/HeaderText'

export default class addEmployee extends Component {

  state = {
    nik: '',
    statusForm: false,
    statusNik: false
  }

  onChangeNik = (e) => {
    this.setState({ nik: e.target.value })
    if (e.target.value.length === 8) {
      this.setState({ statusNik: true })
    } else {
      this.setState({ statusNik: false })
    }
  }

  render() {
    return (
      <div className="content">
        <HeaderText headText="Form Tambah Data Community Officer" />
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridNama">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" placeholder="Masukkan Nama" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Masukkan Email" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridNIK">
            <Form.Label>NIK</Form.Label>
            <Form.Control maxLength="8" type="number" value={this.state.nik} onChange={this.onChangeNik} placeholder="Masukkan NIK" />
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
            <Form.Control placeholder="contoh: Jl. raya No.xx Rt.xx Rw.xx kecamatan kelurahan kota kode pos" />
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
