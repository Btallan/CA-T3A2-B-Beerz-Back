// // Import the state package
// import {useState} from 'react'
// Import global state to component
import { useGlobalState } from '../../utils/stateContext';
// Import params useage to component
import {useParams} from 'react-router-dom'
// Import BookingForm component
import BookingForm from './BookingForm';

// MATERIAL UI IMPORTS
import {Typography} from '@mui/material'


const Event = () => {    
    // Calling the store into the component through global state
    const {store} = useGlobalState()
    // Unpacking the store
    const {eventList,loggedInUser, bookingList} = store
    // console.log(eventList)

    // Saving the params from URL
    const params = useParams();
    // console.log(params.id)

    // Find the selected event
    const selectedEvent = eventList.find(event => event.id === parseInt(params.id))


    return (
        <>
            <Typography variant='h5'>{selectedEvent.title}</Typography>
            <img alt="Event IMG" src={selectedEvent.eventIMG} style={{height: "200px"}}></img>
            <Typography variant='body1'>{selectedEvent.date} - {selectedEvent.time}</Typography>
            <Typography variant='body1'>{selectedEvent.description}</Typography>
            <BookingForm event={selectedEvent} loggedInUser={loggedInUser} bookingList={bookingList} />
            
        </>
    )
}

export default Event;

