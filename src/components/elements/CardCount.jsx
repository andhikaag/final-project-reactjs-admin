import React, { Component } from 'react'
import {
  Col,
  Card
} from 'react-bootstrap'

export default class CardCount extends Component {
  render() {
    return (
      <Card className={this.props.className} bg={this.props.bg} text="white">
        <Card.Header>
          <Card.Link className="text-light" href="#">
            {this.props.text}
          </Card.Link>
        </Card.Header>
        <Card.Body>
          <Card.Title>{this.props.value}</Card.Title>
        </Card.Body>
      </Card>
    )
  }
}
