// // Import the state package
// import {useState} from 'react'
// Import global state to component
import { useGlobalState } from '../../utils/stateContext';
// Import params useage to component
import {useParams} from 'react-router-dom'
// Import BookingForm component
import BookingForm from './BookingForm';

// MATERIAL UI IMPORTS
import {CardContent, CardHeader, Typography, Container, Card, CardMedia} from '@mui/material'


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
            <div className='spacer'></div>
            <Container>
                <Card>
                    <CardHeader title={selectedEvent.title}></CardHeader>
                    <CardMedia component='img' image={selectedEvent.eventIMG} sx={{maxHeight: "400px"}}></CardMedia>
                    <CardContent>
                        <Typography variant='body1'>{selectedEvent.date} - {selectedEvent.time}</Typography>
                        <hr></hr>
                        <Typography variant='body1'>{selectedEvent.description}</Typography>
                    </CardContent>
                    <CardContent>
                        <BookingForm event={selectedEvent} loggedInUser={loggedInUser} bookingList={bookingList} />
                    </CardContent>
                </Card>    
            </Container>
            <div className='footerSpacer'></div>            
        </>
    )
}

export default Event;



