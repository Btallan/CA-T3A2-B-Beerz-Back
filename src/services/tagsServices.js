import beerzAPI from "../config/api";

export async function getTags(){
    const response = await beerzAPI.get('/tags')
    // console.log(response.data)
    return response.data
}