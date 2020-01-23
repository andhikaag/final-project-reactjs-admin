import React, { Component } from 'react'
import {
  Row,
  Col,
  InputGroup,
  FormControl,
} from 'react-bootstrap'
import ButtonApp from './ButtonApp'


export default class Search extends Component {
  render() {
    return (
      <InputGroup className="mb-3">
        <FormControl placeholder="Search...." />
        <InputGroup.Append>
          <ButtonApp onClick={this.props.onClick} text="Search" variant="outline-warning" />
        </InputGroup.Append>
      </InputGroup>
    )
  }
}
