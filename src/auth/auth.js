import Cookie from 'react-cookies'

let token = Cookie.load('token')

export const checkToken = () => {
    if (!token || token === '') {
        window.location.href = "/login"
    }
}