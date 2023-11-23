import http from './axiosContext'

const create = (data) => {
    return http.post('/admin/add',data)
}

const update = (id,data) => {
    return http.put(`/admin/${id}` , data)
}

const getall = () => {
    return http.get("/admin/")
}

const deleteadmin = (id) => {
    return http.delete(`/admin/delete/${id}`)
}

const getbyid = (id) => {
    return http.get(`/admin/get/${id}`)
}

export default {create,getall,getbyid,update,deleteadmin}
