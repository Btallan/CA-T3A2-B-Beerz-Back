import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../utils/stateContext";

// MATERIAL UI IMPORTS
import {Button, Typography} from '@mui/material'

const UserBooking = ({booking}) => {
        // Import context
        const {store, dispatch} = useGlobalState();
        // Import the global states
        const {eventList} = store
        // In the events array, find all events which match the event ID in the booking
        const selectedEvent = eventList.find(event => event.id === booking.eventID)
        // Initialise navigate
        const navigate = useNavigate()
        const cancelBooking = (event) => {
            console.log(event.target)
            const formData = {
                id: booking.id,
                eventID: booking.eventID,
                userID: booking.userID,
                quantity: booking.quantity,
                status: false
            }
            console.log("Form Data: ", formData)
            dispatch({
                type: "updateBooking",
                data: formData
            }) 
        }
        const contactBrewery = () => {
            navigate(`/contact/events/${selectedEvent.id}`)
        }
    return(
        <>
            <Typography variant='h6'>{selectedEvent.title}</Typography>
            <img alt="Event" src={selectedEvent.eventIMG} style={{width: "200px"}}></img>
            <Typography variant='body1'>{selectedEvent.time} - {selectedEvent.date}</Typography>
            <Typography variant='body1' data-testid="ticketsBooked">Tickets booked: {booking.quantity}</Typography>
            <Typography variant='body1'>Status: {booking.status ? "Upcoming " : "Cancelled"}</Typography>          
            <Button onClick={cancelBooking} id="cancelButton" data-testid="cancelButton" variant="contained">Cancel Button</Button>
            <Button onClick={contactBrewery} id="contactButton" variant="contained">Contact Brewery</Button>
            <hr></hr>  
        </>
    )
}
export default UserBooking;