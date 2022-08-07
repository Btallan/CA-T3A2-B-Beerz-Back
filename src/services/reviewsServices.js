import beerzAPI from "../config/api";

export async function getReviews(){
    const response = await beerzAPI.get('/reviews')
    // console.log(response.data)
    return response.data
}