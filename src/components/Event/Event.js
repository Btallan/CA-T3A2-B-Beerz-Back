import { useGlobalState } from '../../utils/stateContext';

// Importing link functionality
import { Link } from 'react-router-dom';


const Event = ({event}) => {    

    return (
        <>
            <h4>{event.title}</h4>
            <img alt="Event IMG" src={event.eventIMG} style={{height: "200px"}}></img>
            <p>{event.date} - {event.time}</p>
            <p>{event.description}</p>
            <Link to={`/events/${event.id}`}>Find out more</Link>
        </>
    )
}

export default Event;