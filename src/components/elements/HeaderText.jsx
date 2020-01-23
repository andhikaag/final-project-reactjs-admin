import React, { Component } from 'react'

export default class HeaderText extends Component {
    render() {
        return (
            <center>
                <h1 className="contentHeadText">
                    {this.props.headText}
                </h1>
            </center>
        )
    }
}
