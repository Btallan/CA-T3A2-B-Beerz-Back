// Import context
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from '../../utils/stateContext';

// MATERIAL UI IMPORTS
import {Button, TextField,InputLabel} from '@mui/material'


const BookingForm = ({event}) => {
    // Calling in dispatch
    const {store, dispatch} = useGlobalState()
    const {loggedInUser, bookingList} = store

    const navigate = useNavigate()


    // Handle submit of form
    const handleSubmit = (event) => {
        event.preventDefault()
        var ticketsBooked = event.target.tickets.value
        console.log("Submit clicked")
        addBooking(ticketsBooked)
    }

    // Function to store all the data within 1 object
    const addBooking = (quantity) => {
        const bookingInfo = {
            id: nextID(bookingList),
            eventID: event.id,
            userID: loggedInUser.id,
            quantity: parseInt(quantity),
            status: true
        }
        dispatch({
            type: "addBooking",
            data: bookingInfo
        })
        navigate(`/${loggedInUser.username}`)
    }

    function nextID(data){
        // first exclude the empty case
        if(data.length === 0) return ;
        // second handle if data not empty
        const sortData = data.sort((a,b) => a.id - b.id);
        const nextID = sortData[sortData.length -1].id +1
        return nextID 
    }

    return (
        <>
            {/* Form to book into event */}
                <form onSubmit={handleSubmit}>

                <div>
                    <InputLabel>How many tickets would you like to book?</InputLabel>
                    <TextField type="number" id="tickets" name="tickets" min="1" max="20" />
                </div>
                <Button type="submit" variant="contained">Book In</Button>

            </form>
        </>
    )
}

export default BookingForm;