import { useGlobalState } from '../../utils/stateContext';
import { Link } from 'react-router-dom';

// MATERIAL UI IMPORTS
import {Button, Typography, Container, Card, CardMedia, CardContent} from '@mui/material'

const UserProfile = () => {
    // Calling the store into the component through global state
    const {store} = useGlobalState()

    // Unpacking the store
    const {loggedInUser} = store

    console.log(loggedInUser)

    return (
        <>
            <Container>
                    <Typography variant='h4'>Personal Information!</Typography>
                <Card className='userInfo'>

                    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%', justifyContent: 'space-around'}}>
                        <div>
                            {loggedInUser.profileIMG ?
                                    // <img alt="Profile" src={loggedInUser.profileIMG} style={{width: "100px"}}/>
                                    <CardMedia component="img" image={loggedInUser.profileIMG} sx={{maxHeight: "200px", maxWidth: '200px', borderRadius: '400px'}}></CardMedia>
                                :
                                // <img alt="Profile" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' style={{width: "100px"}}/>
                                <CardMedia component="img" image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" sx={{maxHeight: "100px"}}></CardMedia>
                            }
                        </div>
                        <CardContent style={{}}>
                            <Typography variant="body1">{loggedInUser.firstName} {loggedInUser.lastName}</Typography>
                            <Typography variant="body1">{loggedInUser.email}</Typography>
                            <Typography variant="body1">{loggedInUser.mobile}</Typography>
                            <Typography variant="body1">{loggedInUser.username}</Typography>
                            <Typography variant="body1">{loggedInUser.dob}</Typography>
                            <Typography variant="body1">{loggedInUser.address}</Typography>
                        </CardContent>
                    </div>
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