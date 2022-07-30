import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalState } from '../utils/stateContext'

// MATERIAL UI IMPORTS
import {Button, TextField,InputLabel,Typography} from '@mui/material'

const SignUp = () => {
    const initialSignUpData = {        
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        username: "",
        dob: "",
        password: "",
        passwordConfirmation: "",
        flavourTags: [],
        address: ""
    }

    // Calling the state function
    const [formData, setFormData] = useState(initialSignUpData)

    // Calling dispatch into the component, so that we can update the global state
    const {store,dispatch} = useGlobalState();
    const {userList} = store
    useEffect(() => console.log(userList), [userList])

    // Initialising and storing naiagte in a variable
    const navigate = useNavigate()

    // Handling the submission of the form
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Submit button clicked")
        // console.log(formData)
        dispatch({
            type: "signUserUp",
            data: formData
        })
        setFormData(initialSignUpData)
        navigate('/')
        // return true
    }
    
    // Handling the form data as the user enter keystrokes
    const handleFormData = (event) => {
        setFormData({
            ...formData,
            id: nextID(userList),
            [event.target.name]: event.target.value
        })
        // console.log(formData)
    }

    function nextID(data){
        // first exclude the empty case
        if(data.length === 0) return ;

        // second handle if data not empty
        const sortData = data.sort((a,b) => a.id - b.id);
        const nextID = sortData[sortData.length -1].id +1
        return nextID 
    }

    return (
        <>
            <Typography variant='h4'>Sign Up!</Typography>
            <form onSubmit={handleSubmit}>
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
                    <InputLabel>Username</InputLabel>
                    <TextField type="text" name="username" id="username" value={formData.username} onChange={handleFormData}></TextField>
                </div>
                <div>
                    <InputLabel>Address</InputLabel>
                    <TextField type="text" name="address" id="address" value={formData.address} onChange={handleFormData}></TextField>
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
                <Button type="submit" variant="contained">Sign Up</Button>

            </form>
        </>
    )
}

export default SignUp;