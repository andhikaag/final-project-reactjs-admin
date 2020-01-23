// import {
//     useDispatch
// } from 'react-redux'
import Cookie from 'react-cookies'

let token = Cookie.load('token')

export const checkToken = () => {
    if (!token || token === '') {
        window.location.href = "/login"
    }
}

// const mapStateToProps = (state) => {
//     return {
//         isLoggedIn: state.login
//     }
// }

// const mapDispatch = (dispatch) => {
//     return {
//         changeStatus: () => dispatch({
//             type: 'ADD_SESSION'
//         }),
//     }
// }