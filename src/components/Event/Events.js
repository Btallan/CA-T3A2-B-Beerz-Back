// Import global context
import { useGlobalState } from '../../utils/stateContext';

// Import event component 
import Event from './Event';


const Events = () => {    
    // Calling the store into the component through global state
    const {store} = useGlobalState()
    // Unpacking the store
    const {eventList} = store

    return (
        <>
            <h1>Upcoming events</h1>
            {eventList.map(event =>
                <Event key={event.id} event={event}/>    
            )}
        </>
    )
}

export default Events;