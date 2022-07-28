import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../utils/stateContext";
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
            <h4>{selectedEvent.title}</h4>
            <img alt="Event" src={selectedEvent.eventIMG} style={{width: "200px"}}></img>
            <p>{selectedEvent.time} - {selectedEvent.date}</p>
            <p data-testid="ticketsBooked">Tickets booked: {booking.quantity}</p>
            <p>Status: {booking.status ? "Upcoming " : "Cancelled"}</p>
            <button onClick={cancelBooking} id="cancelButton" data-testid="cancelButton">Cancel Booking</button>
            <button onClick={contactBrewery} data-testid="contactButton">Contact Brewery</button>
            <hr></hr>  
        </>
    )
}
export default UserBooking;