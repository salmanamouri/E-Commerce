import http from './axiosContext'

const login = (data) => {
    return http.post("/users/addd",data)
}

const logout = () => {
    return http.delete("/users/logout") //path user men 
}

export default {login,logout}