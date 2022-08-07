import beerzAPI from "../config/api";

export async function getProducts(){
    const response = await beerzAPI.get('/products')
    // console.log(response.data)
    return response.data
}