import React, { Component } from 'react';
import Header from './components/template/header'
import Footer from './components/template/footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from '../src/components/pages/login'
import './Web.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: window.location.pathname
    }
  }

  render() {
    return (
      <div>
        <Router>
          {this.state.url === "/login" ?
            <Route path="/login" component={Login} />
            :
            <Header />
          }
          <Footer />
        </Router>
      </div>
    )
  }
}

