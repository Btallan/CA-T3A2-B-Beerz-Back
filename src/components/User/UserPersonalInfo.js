import { useGlobalState } from '../../utils/stateContext';
import { Link } from 'react-router-dom';

// MATERIAL UI IMPORTS
import {Button, Typography, Container, Card, CardMedia, Grid} from '@mui/material'

const UserProfile = () => {
    // Calling the store into the component through global state
    const {store} = useGlobalState()

    // Unpacking the store
    const {loggedInUser} = store

    // console.log(loggedInUser)

    return (
        <>
            <Container>
                <Card className='userInfo'>
                    <Grid container rowSpacing={2}>         
                            <Grid item xs={12} md={6}>
                                <Grid container className='userImage'>
                                    {loggedInUser.profileIMG ?
                                            <CardMedia component="img" image={loggedInUser.profileIMG} sx={{maxHeight: "200px", maxWidth: '200px', borderRadius: '400px'}}></CardMedia>
                                        :
                                            <CardMedia component="img" image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" sx={{maxHeight: "100px"}}></CardMedia>
                                    }
                                </Grid >
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <Typography variant="body1">{loggedInUser.firstName} {loggedInUser.lastName}</Typography>
                                <Typography variant="body1">{loggedInUser.email}</Typography>
                                <Typography variant="body1">{loggedInUser.mobile}</Typography>
                                <Typography variant="body1">{loggedInUser.username}</Typography>
                                <Typography variant="body1">{loggedInUser.dob}</Typography>
                                <Typography variant="body1">{loggedInUser.address}</Typography>
                            </Grid>
                    </Grid >
                    <hr></hr>
                    <div style={{textAlign: 'center'}}>
                        <Button component={Link} to={`/${loggedInUser.username}/edit`} variant="contained">Edit Profile</Button>                        
                    </div> 
                </Card>
            </Container>
        </>
    )
}

export default UserProfile;