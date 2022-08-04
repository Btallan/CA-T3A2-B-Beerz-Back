import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalState } from '../../utils/stateContext'

// MATERIAL UI IMPORTS
import {Button, TextField,Typography, Container, Card} from '@mui/material'

const EditUserProfile = ({user}) => {
    // Calling dispatch into the component, so that we can update the global state
    const {store, dispatch} = useGlobalState();
    const {loggedInUser} = store

    // Controlled components for form
    const intialFormData ={
        id: loggedInUser.id,
        firstName: loggedInUser.firstName,
        lastName: loggedInUser.lastName,
        email: loggedInUser.email,
        mobile: loggedInUser.mobile,
        username: loggedInUser.username,
        address: loggedInUser.address,
        dob: loggedInUser.dob,
        password: loggedInUser.password,
        passwordConfirmation: loggedInUser.passwordConfirmation,
        profileIMG: loggedInUser.profileIMG,
        flavourTags: loggedInUser.flavourTags
    }

    const [formData, setFormData] = useState(intialFormData)
    // Calling the state function


    // Initialise navigate
    const navigate = useNavigate()


    // Handling the submission of the form
    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(formData)
        if(formData.password === formData.passwordConfirmation){
            dispatch({
                type: 'updateUser',
                data: formData
            })
            navigate(`/${loggedInUser.username}`)
        } else {
            console.log("Passwords do not match!")
        }
        // navigate(`/${loggedInUser.username}`)
    }

    // Handling the form data as the user enter keystrokes
    const handleFormData = (event) => {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value
            })
        }
        
    console.log(loggedInUser)

    return (
            <>
                <Container>
                    <Card className='welcomeCards'>

                    <Typography variant='h4' sx={{margin: '0 0 30px 0'}}>Edit Profile!</Typography>
                    {/* {console.log(formData)} */}

                    <form onSubmit={handleSubmit}>
                        {/* <img alt="Profile Image" src={formData.profileIMG} style={{width: "100px"}}></img>           
                        <div>
                            <label>Update Profile Image</label>
                            <input type="file" name="profileIMG" id="profileIMG"  onChange={handleFormData}></input>
                        </div> */}
                    <div className='shortInputDiv'>
                        <div className='textFieldInputShort textFieldInputShortINDV'>
                            <TextField fullWidth  label='First Name' type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleFormData} className='textFieldInputColour'></TextField>
                        </div>
                        <div className='textFieldInputShort'>
                            <TextField fullWidth  label='Last Name' type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleFormData} className='textFieldInputColour'></TextField>
                        </div>
                    </div>  

                    <div className='textFieldInputLong'>
                        <TextField fullWidth label='Email' type="email" name="email" id="email" value={formData.email} onChange={handleFormData} className='textFieldInputColour'></TextField>
                    </div>

                    <div className='textFieldInputLong'>
                        <TextField fullWidth  label='Mobile' type="text" name="mobile" id="mobile" value={formData.mobile} onChange={handleFormData} className='textFieldInputColour'></TextField>
                    </div>

                    <div className='textFieldInputLong'>                        
                        <TextField fullWidth label='Username' type="text" name="username" id="username" value={formData.username} onChange={handleFormData} className='textFieldInputColour'></TextField>
                    </div>

                    <div className='textFieldInputLong'>
                        <TextField fullWidth label='Address' type="text" name="address" id="address" value={formData.address} onChange={handleFormData} className='textFieldInputColour'></TextField>
                    </div>

                    <div className='textFieldInputLong'>
                        <TextField fullWidth label='Date of Birth' type="text" name="dob" id="dob" value={formData.dob} onChange={handleFormData} className='textFieldInputColour'></TextField>
                    </div>

                    <div className='shortInputDiv'>
                        <div className='textFieldInputShort textFieldInputShortINDV'>
                            <TextField fullWidth label='Password' type="password" name="password" id="password" value={formData.password} onChange={handleFormData} className='textFieldInputColour'></TextField>
                        </div>
                        <div className='textFieldInputShort'>
                            <TextField fullWidth label='Password Confirmation' type="password" name="passwordConfirmation" id="passwordConfirmation" value={formData.passwordConfirmation} onChange={handleFormData} className='textFieldInputColour'></TextField>
                        </div>
                    </div>

                        <Button type="submit" variant="contained" className='welcomeButtons' sx={{margin: '30px 0 20px 0'}}>Edit</Button>

                    </form>

                </Card>
            </Container>
        </>
    )
}

export default EditUserProfile;