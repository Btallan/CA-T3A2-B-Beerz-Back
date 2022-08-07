import beerzAPI from "../config/api";

export async function getOrders(){
    const response = await beerzAPI.get('/orders')
    // console.log(response.data)
    return response.data
}