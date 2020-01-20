import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'

export default class InputLogin extends Component {
  render() {
    return (
      <InputGroup className="mb-3">
        <InputGroup.Append>
          <span className="input-group-text"><i className={this.props.logo}></i></span>
        </InputGroup.Append>
        <Form.Control
          type={this.props.type}
          placeholder={this.props.text}
          value={this.props.value}
          onChange={this.props.onChange} />
      </InputGroup>
    )
  }
}
