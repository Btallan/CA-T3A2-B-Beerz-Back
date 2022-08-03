// import { useGlobalState } from '../../utils/stateContext';

// Importing link functionality
import { Link } from 'react-router-dom';

// MATERIAL UI IMPORTS
import {Button, Typography, Card, CardHeader, CardContent, CardMedia} from '@mui/material'
// import { styled } from '@mui/material/styles';

const Event = ({event}) => {    

    return (
        <>
            <Card sx={{maxWidth: 345, margin: "10px" }}>
                <CardHeader title={event.title} sx={{textAlign: "center"}}></CardHeader>
                <CardMedia component='img' image={event.eventIMG}></CardMedia>
                <CardContent >
                    <Typography variant='body1'>{event.date} - {event.time}</Typography>
                    <hr></hr>
                    <Typography variant='body1'>{event.description}</Typography>
                </CardContent>
                <CardContent sx={{textAlign: 'center'}}>
                    <Button component={Link} to={`/events/${event.id}`} variant="contained" >Find Out More</Button>
                </CardContent>
            </Card>
        </>
    )
}

export default Event;