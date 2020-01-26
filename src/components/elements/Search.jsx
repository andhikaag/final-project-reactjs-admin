import React, { Component } from 'react'
import {
  InputGroup,
  FormControl,
} from 'react-bootstrap'
import ButtonApp from './ButtonApp'


export default class Search extends Component {
  render() {
    return (
      <InputGroup className="mb-3">
        <FormControl value={this.props.value} onChange={this.props.onChange} placeholder={this.props.text} />
        <InputGroup.Append>
          <ButtonApp onClick={this.props.onClick} text="Search" variant="outline-warning" />
        </InputGroup.Append>
      </InputGroup>
    )
  }
}
