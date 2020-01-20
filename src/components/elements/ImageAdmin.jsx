import React, { Component } from 'react'
import AdminLogo from '../images/admin.png'

export default class ImageAdmin extends Component {
    render() {
        return (
            <div className="imageAdmin">
                <img src={AdminLogo} width="100" height="100" />
            </div>
        )
    }
}
