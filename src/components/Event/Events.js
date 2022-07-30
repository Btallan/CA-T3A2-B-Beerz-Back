// Import global context
import { useGlobalState } from '../../utils/stateContext';

// Import event component 
import Event from './Event';

// MATERIAL UI IMPORTS
import {Typography} from '@mui/material'

const Events = () => {    
    // Calling the store into the component through global state
    const {store} = useGlobalState()
    // Unpacking the store
    const {eventList} = store

    return (
        <>
            <Typography variant='h4' >Upcoming events</Typography>
            {eventList.map(event =>
                <Event key={event.id} event={event}/>    
            )}
        </>
    )
}

export default Events;