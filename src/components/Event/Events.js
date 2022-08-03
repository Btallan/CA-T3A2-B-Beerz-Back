// Import global context
import { useGlobalState } from '../../utils/stateContext';

// Import event component 
import Event from './Event';

// MATERIAL UI IMPORTS
import {Typography, Container,Box} from '@mui/material'


const Events = () => {    
    // Calling the store into the component through global state
    const {store} = useGlobalState()
    // Unpacking the store
    const {eventList} = store

    return (
        <>  <Container>
            <Typography variant='h4' style={{textAlign: "center"}}>Upcoming events</Typography>
            <Box style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around"}}>
                {eventList.map(event =>
                    <Event key={event.id} event={event}/>    
                )}
            </Box>
            </Container>
        </>
    )
}

export default Events;