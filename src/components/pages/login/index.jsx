import React, { Component } from 'react'
import { Form, Container } from 'react-bootstrap'

import '../../../App.css';
import InputLogin from './elements/InputLogin'
import ImageAdmin from '../../elements/ImageAdmin'
import Button from '../../elements/ButtonApp'
import Axios from 'axios';
import Cookie from 'react-cookies'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

    this.onChangeUsername = this.onChangeUsername.bind(this)
  }

  onChangeUsername = (e) => {
    this.setState({ username: e.target.value })
  }
  onChangePassword = (e) => {
    this.setState({ password: e.target.value })
  }

  onLogin = (event) => {
    event.preventDefault();
    Axios({
      // 54.254.180.214:9803/api/login
      url: 'http://192.168.43.216:3000/users/login',
      method: 'post',
      headers: {
        "Content-Type": "application/json",

      },
      data: {
        "username": this.state.username,
        "password": this.state.password
      }
    })
      .then((res) => {
        console.info(res)
        if (res.status === 200 && res.data.token) {
          let token = res.data.token
          console.log(Cookie)
          Cookie.save('token', token, {
            path: '/'
          })
          let tokenJson = JSON.parse(atob(token.split(".")[1]))
          console.log(tokenJson)
          let nama = tokenJson.name
          console.log(nama)
          Cookie.save('nama', nama, {
            path: '/'
          })
          window.location.href = "/"
        } else {
          alert("Data belum benar")
        }
      }).catch((res) => {
        console.log(res)
        alert("Data belum benar")
      })
  }

  render() {
    // console.log(Cookie.load('token'))
    console.log(this.props.isLoggedIn)
    return (
      <Container>
        <div className="d-flex justify-content-center h-100">
          <div className="user_card">
            <div className="d-flex justify-content-center">
              <Form onSubmit={this.onLogin}>
                <ImageAdmin />
                <InputLogin logo="fas fa-user" type="text" text="Username" value={this.state.username} onChange={this.onChangeUsername} />
                <InputLogin logo="fas fa-key" type="password" text="Password" value={this.state.password} onChange={this.onChangePassword} />
                <div className="d-flex justify-content-center mt-3 login_container">
                  <Button className="btn login_btn" text="Login" />
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

export default Login