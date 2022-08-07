import beerzAPI from "../config/api";

export async function getBookings(){
    const response = await beerzAPI.get('/bookings')
    // console.log(response.data)
    return response.data
}