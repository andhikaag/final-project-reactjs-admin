import {
    connect
} from 'react-redux'
import Cookie from 'react-cookies'

let token = Cookie.load('token')

export const checkToken = () => {
    if (!token || token === '') {
        window.location.href = "/login"
    }
}

export const checkAuth = () => {
    let tokenJson = JSON.parse(atob(token.split(".")[1]))

    if (tokenJson.role === null) {
        console.log("sukses")
        return true
    } else {
        return false
    }
}