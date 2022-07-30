// import { useGlobalState } from '../../utils/stateContext';

// Importing link functionality
import { Link } from 'react-router-dom';

// MATERIAL UI IMPORTS
import {Button, Typography} from '@mui/material'

const Event = ({event}) => {    

    return (
        <>
            <Typography variant='h6'>{event.title}</Typography>
            <img alt="Event IMG" src={event.eventIMG} style={{height: "200px"}}></img>
            <Typography variant='body1'>{event.date} - {event.time}</Typography>
            <Typography variant='body1'>{event.description}</Typography>
            <Button component={Link} to={`/events/${event.id}`} variant="contained">Find Out More</Button>

        </>
    )
}

export default Event;