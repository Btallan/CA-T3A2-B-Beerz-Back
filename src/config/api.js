import axios from "axios";

const beerzAPI = axios.create({
    baseURL: 'http://localhost:3004/'
})

beerzAPI.interceptors.request.use(request => {
    const token = sessionStorage.getItem("token")
    // Send the token in the request
    if(token){
        request.headers["Authorization"] = `Bearer ${token}`
    }
    return request
})

export default beerzAPI;