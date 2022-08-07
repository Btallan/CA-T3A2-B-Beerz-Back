import beerzAPI from "../config/api";

export async function signUp(data){
    const response = await beerzAPI.post('/auth/signup', data)
    // console.log(response.data)
    return response.data
}

export async function signIn(data){
    const response = await beerzAPI.post('/auth/signin', data)
    // console.log(response.data)
    return response.data
}