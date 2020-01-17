import React, { Component } from 'react'
import {
  Form,
  Col,
  Button,
} from 'react-bootstrap'

export default class addEmployee extends Component {
  render() {
    return (
      <div>
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
            <Form.Control placeholder="Masukkan NIK" />
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
