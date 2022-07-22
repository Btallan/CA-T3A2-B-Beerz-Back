// App reducer file
const reducer = (state, action) => {
    console.log(state)
    console.log(action)

    switch(action.type){
        case "cleanState": {
            // State goes back to default values
            return { 
                loggedInUser: "",
                ageVerification: false
            }
        }
        case "setLoggedInUser": {
            // update the loggedInUser value
            return { 
                ...state, 
                loggedInUser: action.data,
                ageVerification: true
            }
        }
        case "setAgeVerification": {
            // update the loggedInUser value
            return { 
                ...state, 
                ageVerification: action.data
            }
        }
        case "setProductList": {
            // update the loggedInUser value
            return { 
                ...state, 
                productList: action.data
            }
        }
        default: return state
    }

}

export default reducer;
