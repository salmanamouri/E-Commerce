import http from './axiosContext'

const create = (data) => {
    return http.post('/product/adddd',data)
} 

const getall = () => {
    return http.get('/product/')
}

const update = (id,data) =>{
    return http.put(`/product/${id}`,data)
}

const deleteprod = (id) => {
    return http.delete(`/product/delete/${id}`)
}

const getbyid = (id) => {
    return http.get(`/product/get/${id}`)
}

export default {create,getall,getbyid,update,deleteprod}
