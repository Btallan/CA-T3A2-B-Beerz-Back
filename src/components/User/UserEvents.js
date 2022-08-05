import { useGlobalState } from "../../utils/stateContext";


import UserBooking from "./UserBooking";

// MATERIAL UI IMPORTS
import {Typography, Container, Box} from '@mui/material'

const UserEvents = () => {
    // Import context
    const {store} = useGlobalState();
    // Import the global states
    const {bookingList, loggedInUser} = store
    // Create empty array to store use events
    var userBookings = []
    // Events where use is attendance
    bookingList.forEach(booking => {
        if(booking.userID === loggedInUser.id){
            userBookings.push(booking)        
        } 
    });
    
    // Checking to see whether the user has any currently active events
    var activeEvents = userBookings.some(booking => booking.status === true)
    console.log(activeEvents)

    return (
        <Container sx={{marginTop: '30px'}}>
            {activeEvents ?
            <>
                <Typography variant='h4' style={{color: 'white', textAlign: 'center', marginBottom: '20px'}}>My Upcoming Events</Typography>
                <Box style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around"}}>
                    {/* Only show bookings which have not been cancelled */}
                    {userBookings.map(booking => 
                    !booking.status ? null : <UserBooking key={booking.id} booking={booking}/>
                    )}
                </Box>
            </>
            :
            null
            }
        </Container>
    )
}

export default UserEvents;