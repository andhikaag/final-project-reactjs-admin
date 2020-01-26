import Axios from 'axios'
import Cookie from 'react-cookies'

// api update 
// const rootPath = 'http://54.254.180.214:9803'
// const rootPath = 'http://192.168.30.38:8080/employee'
const rootPath = 'http://192.168.1.15:3000'
const token = Cookie.load('token')
const Get = (path) => {
    const promise = new Promise((resolve, reject) => {
        Axios({
                url: `${rootPath}/${path}`,
                method: 'GET',
                headers: {
                    'Authorization': token
                }
            })
            .then((res) => {
                resolve(res)
            }, (err) => {
                reject(err)
                alert("Gagal menampilkan data")
            }).catch((err) => {
                alert("Gagal menampilkan data")
            })
    })
    return promise
}

// const Post = (rootPath, path, data) => {
//     const promise = new Promise((resolve, reject) => {
//         Axios({
//                 url: `${rootPath}/${path}`,
//                 method: 'POST',
//                 headers: {
//                     'Authorization': token
//                 },
//                 data
//             })
//             .then((res) => {
//                 resolve(res)
//             }, (err) => {
//                 reject(err)
//             })
//     })
//     return promise
// }

//Post
// const createUser = (data) => Post('users/register', false, data)

//Get
const getEmployeeAll = () => Get('employee/all?page=')
const getEmployee = (page) => Get('employee/all?page=' + page)
const getEmployeeById = (id) => Get('employee/' + id)
const getReports = () => Get('reports/all')
const paginationTransaksi = (page) => Get('reports/all?page=' + page)
const paginationTransaksiByCO = (id_co, page) => Get('reports/by_co/' + id_co + '/' + page)
const getTransactionByCO = (id_co) => Get('reports/by_co/' + id_co)
const getNasabah = (page) => Get('customers/all?page=' + page)
const getNasabahByIdCO = (nik) => Get('customers/' + nik)
const getTransactionLate = (page) => Get('reports/late?page=' + page)


const API = {
    getEmployee,
    getEmployeeById,
    getReports,
    paginationTransaksi,
    paginationTransaksiByCO,
    getTransactionByCO,
    getNasabah,
    getNasabahByIdCO,
    getTransactionLate,
    getEmployeeAll
}

export default API