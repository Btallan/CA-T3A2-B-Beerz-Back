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
        case "signUserUp": {
            // update the loggedInUser value
            return { 
                ...state, 
                firstName: action.data.firstName,
                lastName: action.data.lastName,
                email: action.data.email,
                username: action.data.username,
                password: action.data.password,
                passwordConfirmation: action.data.passwordConfirmation,
                dob: action.data.dob,
                mobile: action.data.mobile,
                loggedInUser: action.data.username
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
