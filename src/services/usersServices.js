import beerzAPI from "../config/api";

export async function getUsers(){
    const response = await beerzAPI.get('/users')
    // console.log(response.data)
    return response.data
}