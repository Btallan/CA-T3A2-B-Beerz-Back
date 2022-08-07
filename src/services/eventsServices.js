import beerzAPI from "../config/api";

export async function getEvents(){
    const response = await beerzAPI.get('/events')
    // console.log(response.data)
    return response.data
}