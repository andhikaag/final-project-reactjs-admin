import Axios from 'axios'
import Cookie from 'react-cookies'

// const rootPath = 'http://54.254.180.214:9803'
// const rootPath = 'http://192.168.30.38:8080/employee'
const rootPath = 'http://192.168.30.94:3000'
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
            })
    })
    return promise
}

const Post = (path) => {
    const promise = new Promise((resolve, reject) => {
        Axios({
                url: `${rootPath}/${path}`,
                method: 'POST',
                headers: {
                    'Authorization': token
                }
            })
            .then((res) => {
                resolve(res)
            }, (err) => {
                reject(err)
            })
    })
    return promise
}

const getEmployee = () => Get('api/nasabah/list')
const getEmployeeById = (id) => Get('api/nasabah/' + id)
const getReports = () => Get('reports/all')
const paginationTransaksi = (page) => Get('reports/all?page=' + page)
const paginationTransaksiByCO = (id_co, page) => Get('reports/by_co/' + id_co + '/' + page)
const getTransactionByCO = (id_co) => Get('reports/by_co/' + id_co)
const getNasabah = () => Get('customers/all')

const createUser = () => Post('users/register')

const API = {
    getEmployee,
    getEmployeeById,
    getReports,
    paginationTransaksi,
    paginationTransaksiByCO,
    getTransactionByCO,
    getNasabah
}

export default API