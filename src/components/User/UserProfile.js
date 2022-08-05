// Import react
import React from 'react';

// Import global states
import { useGlobalState } from '../../utils/stateContext'

// Import components
import UserEvents from './UserEvents';
import UserOrders from './UserOrders';
import UserPersonalInfo from './UserPersonalInfo'
import UserTags from './UserTags';


// MATERIAL UI IMPORTS
import {Container} from '@mui/material'


const UserProfile = () => {
        // Calling dispatch into the component, so that we can update the global state
        const {store} = useGlobalState();
        // Unpack the store
        // Import the available tags
        const {orderList,loggedInUser, bookingList} = store


    // Store and collate the users orders
    const userOrders = orderList.filter(orders => parseInt(orders.userID) === parseInt(loggedInUser.id))
    // console.log(userOrders)
    // Check length of returned valuee, if none it will be false
    var activeUserOrders = !userOrders.length

    // Store and collate the user events
    const userEvents = bookingList.filter(booking => parseInt(booking.userID) === parseInt(loggedInUser.id))
    // Checks length of returned bookings
    var activeUserBookings = !userEvents.length

    return (
        <>
                <div className='spacer'></div>
                <Container>
                    <UserPersonalInfo />
                    <UserTags />

                    {/* Checks to see whether the user has any bookings, and renders component based upon that */}
                    {!activeUserBookings ?
                        <UserEvents />                    
                    :
                        null
                    }


                    {/* Checks to see whether the user has any current orders and displays if they do */}
                    {!activeUserOrders ?
                        <UserOrders />
                    :
                        null
                    }                 

                </Container>
            <div className='footerSpacer'></div>

        </>
    )
}

export default UserProfile;