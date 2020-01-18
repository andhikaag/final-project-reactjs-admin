import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import AdminLogo from '../../images/admin.png'
import '../../../App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class Login extends Component {
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

  render() {
    return (
      <Router>
        <Route path="/login">
          <Container>
            <div className="d-flex justify-content-center h-100">
              <div className="user_card">
                <div className="d-flex justify-content-center">
                  <Form>
                    <center>
                      <img className="imageAdmin" src={AdminLogo} width="100" height="100" />
                    </center>
                    <div className="input-group mb-3">
                      <div className="input-group-append">
                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                      </div>
                      <Form.Control type="text" placeholder="Username" value={this.state.username} onChange={this.onChangeUsername} />
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-append">
                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                      </div>
                      <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.onChangePassword} />
                    </div>
                    <div className="d-flex justify-content-center mt-3 login_container">
                      <Button className="btn login_btn" type="submit">
                        Login
                    </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </Container>
        </Route>
      </Router>
    )
  }
}
