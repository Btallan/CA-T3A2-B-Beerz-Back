import { useGlobalState } from '../../utils/stateContext';
import { Link } from 'react-router-dom';

// MATERIAL UI IMPORTS
import {Button, Typography} from '@mui/material'

const UserProfile = () => {
    // Calling the store into the component through global state
    const {store} = useGlobalState()

    // Unpacking the store
    const {loggedInUser} = store

    console.log(loggedInUser)

    return (
        <>
            <Typography variant='h4'>View user profile!</Typography>
            {loggedInUser.profileIMG ?
                    <img alt="Profile" src={loggedInUser.profileIMG} style={{width: "100px"}}/>
                :
                <img alt="Profile" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' style={{width: "100px"}}/>
            }           
            <Typography variant="body1">{loggedInUser.firstName}</Typography>
            <Typography variant="body1">{loggedInUser.lastName}</Typography>
            <Typography variant="body1">{loggedInUser.email}</Typography>
            <Typography variant="body1">{loggedInUser.mobile}</Typography>
            <Typography variant="body1">{loggedInUser.username}</Typography>
            <Typography variant="body1">{loggedInUser.dob}</Typography>
            <Typography variant="body1">{loggedInUser.address}</Typography>
            <Typography variant="body1">{loggedInUser.password}</Typography>
            <Typography variant="body1">{loggedInUser.passwordConfirmation}</Typography>


            <Button component={Link} to={`/${loggedInUser.username}/edit`} variant="contained">Edit Profile</Button>

        </>
    )
}

export default UserProfile;