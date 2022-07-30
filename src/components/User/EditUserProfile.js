import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalState } from '../../utils/stateContext'

// MATERIAL UI IMPORTS
import {Button, TextField,InputLabel,Typography} from '@mui/material'

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
            <Typography variant='h4'>Edit Profile!</Typography>
            {console.log(formData)}
            <form onSubmit={handleSubmit}>
                {/* <img alt="Profile Image" src={formData.profileIMG} style={{width: "100px"}}></img>           
                <div>
                    <label>Update Profile Image</label>
                    <input type="file" name="profileIMG" id="profileIMG"  onChange={handleFormData}></input>
                </div> */}
                <div>
                    <InputLabel>First Name</InputLabel>
                    <TextField type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleFormData}></TextField>
                    <InputLabel>Last Name</InputLabel>
                    <TextField type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleFormData}></TextField>
                </div>
                <div>
                    <InputLabel>Email</InputLabel>
                    <TextField type="email" name="email" id="email" value={formData.email} onChange={handleFormData}></TextField>
                </div>
                <div>
                    <InputLabel>Mobile</InputLabel>
                    <TextField type="text" name="mobile" id="mobile" value={formData.mobile} onChange={handleFormData}></TextField>
                </div>
                <div>
                    <InputLabel>Address</InputLabel>
                    <TextField type="text" name="address" id="address" defaultValue={loggedInUser.address} onChange={handleFormData}></TextField>
                </div>
                <div>
                    <InputLabel>Date of Birth</InputLabel>
                    <TextField type="text" name="dob" id="dob" value={formData.dob} onChange={handleFormData}></TextField>
                </div>
                <div>
                    <InputLabel>Password</InputLabel>
                    <TextField type="password" name="password" id="password" value={formData.password} onChange={handleFormData}></TextField>

                    <InputLabel>Password Confirmation</InputLabel>
                    <TextField type="password" name="passwordConfirmation" id="passwordConfirmation" value={formData.passwordConfirmation} onChange={handleFormData}></TextField>
                </div>
                <Button type="submit" variant="contained">Edit</Button>
            </form>
        </>
    )
}

export default EditUserProfile;