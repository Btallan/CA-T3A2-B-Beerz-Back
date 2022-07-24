// // Import the state package
// import {useState} from 'react'
// Import global state to component
import { useGlobalState } from '../../utils/stateContext';
// Import params useage to component
import {useParams} from 'react-router-dom'
// Import BookingForm component
import BookingForm from './BookingForm';


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
            <h4>{selectedEvent.title}</h4>
            <img alt="Event IMG" src={selectedEvent.eventIMG} style={{height: "200px"}}></img>
            <p>{selectedEvent.date} - {selectedEvent.time}</p>
            <p>{selectedEvent.description}</p>
            <BookingForm event={selectedEvent} loggedInUser={loggedInUser} bookingList={bookingList} />
            
        </>
    )
}

export default Event;

