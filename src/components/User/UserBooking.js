import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../utils/stateContext";

// MATERIAL UI IMPORTS
import {Button, Typography, Card, CardMedia, CardContent, CardHeader} from '@mui/material'


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
            
                <Card sx={{maxWidth: '500px'}}>
                    <CardHeader title={selectedEvent.title} sx={{textAlign: 'center'}}></CardHeader>


                    <CardMedia component="img" image={selectedEvent.eventIMG} sx={{maxHeight: "200px"}}></CardMedia>

                    <CardContent>
                        <Typography variant='body1'>{selectedEvent.time} - {selectedEvent.date}</Typography>
                        <Typography variant='body1' data-testid="ticketsBooked">Tickets booked: {booking.quantity}</Typography>
                        <Typography variant='body1'>Status: {booking.status ? "Upcoming " : "Cancelled"}</Typography>          
                    </CardContent>
                    <CardContent>
                        <Button onClick={cancelBooking} id="cancelButton" data-testid="cancelButton" variant="contained" style={{margin: '10px'}}>Cancel Button</Button>
                        <Button onClick={contactBrewery} id="contactButton" variant="contained" style={{margin: '10px'}}>Contact Brewery</Button>
                    </CardContent>
                </Card>
              
        </>
    )
}
export default UserBooking;