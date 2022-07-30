import { useGlobalState } from '../utils/stateContext'
import {useNavigate} from 'react-router-dom'

// MATERIAL UI IMPORTS
import Button from '@mui/material/Button';
import {Typography, Card, CardContent} from '@mui/material'



const AgeVerification = () => {
        // Calling dispatch into the component, so that we can update the global state
        const {dispatch} = useGlobalState();
        // const {ageVerification} = store
        const navigate = useNavigate();

        const updateAgeVerification = (event) => {
            event.preventDefault();
            if(event.target.value === 'Yes'){
                dispatch({
                    type: 'setAgeVerification',
                    data: true
                })
                navigate('/')
            } else {
                dispatch({
                    type: 'setAgeVerification',
                    data: false
                })
            }
            // console.log(ageVerification)
        }

    // return (
    //     <>
    //         <Typography variant="h3">Welcome to Beerz</Typography>
    //         <Typography variant="body1">Are you over the age of 18?</Typography>
    //         <Button variant="contained" value="Yes" onClick={updateAgeVerification}>Yes</Button>
    //         <Button variant="contained" value="No" onClick={updateAgeVerification}>No</Button>
    //     </>
    // )
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h3">Welcome to Beerz</Typography>
                <Typography variant="body1">Are you over the age of 18?</Typography>
                <Button variant="contained" value="Yes" onClick={updateAgeVerification}>Yes</Button>
                <Button variant="contained" value="No" onClick={updateAgeVerification}>No</Button>
            </CardContent>
        </Card>
    )
}

export default AgeVerification;