import React from 'react';
import Header from './components/template/header'
import Footer from './components/template/footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from '../src/components/pages/login'
import './Web.css'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
