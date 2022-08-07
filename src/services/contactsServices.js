import beerzAPI from "../config/api";

export async function getContacts(){
    const response = await beerzAPI.get('/contacts')
    // console.log(response.data)
    return response.data
}