// App reducer file
const reducer = (state, action) => {
    // console.log(state)
    // console.log(action)

    switch(action.type){
        case "cleanState": {
            // State goes back to default values
            return { 
                loggedInUser: "",
                ageVerification: false
            }
        }
        //
        // User Reducers
        //
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
                loggedInUser: action.data
            }
        }
        case "updateUser": {
            // update the loggedInUser value
            return { 
                ...state, 
                loggedInUser: action.data
            }
        }
        case "updateUserFlavourTags": {
            // update the loggedInUser value
            return { 
                ...state, 
                flavourTags: action.data
            }
        }
        
        //
        // Set Lists
        //
        case "setUserList": {
            // update the loggedInUser value
            return { 
                ...state, 
                userList: action.data
            }
        }
        case "setReviewList": {
            // update the loggedInUser value
            return { 
                ...state, 
                reviewList: action.data
            }
        }
        case "setEventList": {
            // update the loggedInUser value
            return { 
                ...state, 
                eventList: action.data
            }
        }
        case "setBookingList": {
            // update the loggedInUser value
            return { 
                ...state, 
                bookingList: action.data
            }
        }
        case "setProductList": {
            // update the loggedInUser value
            return { 
                ...state, 
                productList: action.data
            }
        }
        case "setTagList": {
            // update the loggedInUser value
            return { 
                ...state, 
                tagList: action.data
            }
        }
        //
        // Event and Booking reducers
        //
        case "addBooking": {
            // update the loggedInUser value
            return { 
                ...state, 
                bookingList: [action.data, ...state.bookingList]
            }
        }
        case "updateBooking": {
            // update the loggedInUser value
            // Find the index of the received booking
            let index = state.bookingList.findIndex(booking => booking.id === action.data.id)
            // Save the existing bookings to a variable
            let bookings = [...state.bookingList]
            // Update the booking based upon its ID
            bookings[index]['status'] = false
            // return the state
            return {
                ...state, bookings
            }
        }
        //
        // Product and Reviews reducers
        //
        case "addReview": {
            // add review to the list
            return { 
                ...state, 
                reviewList: [action.data, ...state.reviewList]
            }
        }
        default: return state
    }

}

export default reducer;
