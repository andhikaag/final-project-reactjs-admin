import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class ButtonApp extends Component {
  render() {
    return (
      <Button className={this.props.className} type="submit" onClick={this.props.onClick} variant={this.props.variant}>
        {this.props.text}
      </Button>
    )
  }
}
