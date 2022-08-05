// Import context
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from '../../utils/stateContext';

// MATERIAL UI IMPORTS
import {Button, TextField,InputLabel, MenuItem, Grid} from '@mui/material'


const BookingForm = ({event}) => {
    // Calling in dispatch
    const {store, dispatch} = useGlobalState()
    const {loggedInUser, bookingList} = store

    const navigate = useNavigate()


    // Handle submit of form
    const handleSubmit = (event) => {
        event.preventDefault()
        var ticketsBooked = event.target.tickets.value
        console.log("Submit clicked")
        addBooking(ticketsBooked)
    }

    // Function to store all the data within 1 object
    const addBooking = (quantity) => {
        const bookingInfo = {
            id: nextID(bookingList),
            eventID: event.id,
            userID: loggedInUser.id,
            quantity: parseInt(quantity),
            status: true
        }
        dispatch({
            type: "addBooking",
            data: bookingInfo
        })
        navigate(`/${loggedInUser.username}`)
    }

    function nextID(data){
        // first exclude the empty case
        if(data.length === 0) return ;
        // second handle if data not empty
        const sortData = data.sort((a,b) => a.id - b.id);
        const nextID = sortData[sortData.length -1].id +1
        return nextID 
    }

    const ticktsNumbers = [
        {
          value: '1',
          label: '1',
        },
        {
          value: '2',
          label: '2',
        },
        {
          value: '3',
          label: '3',
        },
        {
          value: '4',
          label: '4',
        },
        {
          value: '5',
          label: '5',
        },
        {
          value: '6',
          label: '6',
        },
        {
          value: '7',
          label: '7',
        },
        {
          value: '8',
          label: '8',
        },
        {
          value: '9',
          label: '9',
        },
        {
          value: '10',
          label: '10',
        },
        {
          value: '11',
          label: '11',
        },
        {
          value: '12',
          label: '12',
        },
        {
          value: '13',
          label: '13',
        },
        {
          value: '14',
          label: '14',
        },
        {
          value: '15',
          label: '15',
        },
        {
          value: '16',
          label: '16',
        },
        {
          value: '17',
          label: '17',
        },
        {
          value: '18',
          label: '18',
        },
        {
          value: '19',
          label: '19',
        },
        {
          value: '20',
          label: '20',
        }
      ];

    return (
        <>
          <Grid container rowSpacing={1} justifyContent='center' justify='center' textAlign='center'>
              {/* Form to book into event */}
            <form onSubmit={handleSubmit}>

              <Grid item sx={{margin: '20px 0'}}>
                <InputLabel>Select amount of tickets</InputLabel>
              </Grid>
              <Grid item sx={{margin: '20px 0'}}>
                <TextField select type="number" id="tickets" name="tickets" size="small" >
                    {ticktsNumbers.map((amount) => (
                        <MenuItem key={amount.value} value={amount.value}>{amount.label}</MenuItem>
                    ))}
                </TextField>
                </Grid>
                <Grid item sx={{margin: '20px 0'}}>
                  <Button type="submit" variant="contained">Book In</Button>
                </Grid>
            </form>
          </Grid>
        </>
    )
}

export default BookingForm;