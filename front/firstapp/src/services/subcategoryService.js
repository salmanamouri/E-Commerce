import http from './axiosContext'

const create = (data) => {
    return http.post('/subCategory/ajouter', data)
}

const getall = () => {
    return http.get('/subCategory/')
}

const update = (id , data) =>{
    return http.put(`/subCategory/${id}` , data)
}

const deletesub = (id) => {
    return http.delete(`/subCategory/delete/${id}`)
}

const getbyid = (id) => {
    return http.get(`/subCategory/get/${id}`)
}

export default {create , update , getbyid , deletesub , getall}