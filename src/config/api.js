import axios from "axios";

const beerzAPI = axios.create({
    baseURL: 'http://localhost:4000/'
})

export default beerzAPI;