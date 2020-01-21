import React, { Component } from 'react'
import { Form, Container } from 'react-bootstrap'
import { connect } from 'react-redux'

import '../../../App.css';
import InputLogin from './elements/InputLogin'
import ImageAdmin from '../../elements/ImageAdmin'
import Button from '../../elements/ButtonApp'
import Axios from 'axios';
import Cookie from 'react-cookies'
import { Redirect } from 'react-router'

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
      url: 'http://54.254.180.214:9803/api/login',
      method: 'POST',
      headers: {
        "token": "xxx123",

      },
      data: {
        "nik": this.state.username,
        "password": this.state.password
      }
    })
      .then((res) => {
        console.log(res)
        if (res.status === 200 && res.data.data.token) {
          let token = res.data.data.token
          console.log(Cookie)
          Cookie.save('token', token, {
            path: '/'
          })
          window.location.href = "/"
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
        console.log(res.status)
      }).catch((error) => {
        console.log(this.state.username)
        console.log(this.state.username)
        console.log(error)
        alert("Username/Password Salah", error)
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

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login
  }
}

const mapDispatch = (dispatch) => {
  return {
    changeStatus: () => dispatch({ type: 'ADD_SESSION' }),
  }
}

export default connect(mapStateToProps, mapDispatch)(Login)