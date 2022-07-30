import { useGlobalState } from "../../utils/stateContext";


import UserBooking from "./UserBooking";

// MATERIAL UI IMPORTS
import {Typography} from '@mui/material'

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

    return (
        <>
            {activeEvents? 
                <>
                    <Typography variant='h4'>My Upcoming Events</Typography>
                    {/* Only show bookings which have not been cancelled */}
                    {userBookings.map(booking => 
                    !booking.status ? null :    <UserBooking key={booking.id} booking={booking}/> 
                    )}
                </>
            :
                    null
            }

        </>
    )
}

export default UserEvents;