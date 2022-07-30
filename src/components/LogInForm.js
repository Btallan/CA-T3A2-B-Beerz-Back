import {useState} from 'react'
import { useGlobalState } from '../utils/stateContext'
import {useNavigate} from 'react-router-dom'

// MATERIAL UI IMPORTS
import {Button, TextField,InputLabel, Typography} from '@mui/material'

const LogIn = () => {
    const initialLogInData = {
        username: "",
        password: ""  
    }

    // Calling the state function to handle the data within the form
    const [formData, setFormData] = useState(initialLogInData)

    // Calling dispatch into the component, so that we can update the global state
    const {store, dispatch} = useGlobalState();

    const {userList} = store

    const navigate = useNavigate()

    // Handling the submission of the form
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Submit button clicked")
        const user = userList.find(user => user.username === formData.username)
        if(!user){console.log("User not found")}    
        if(user.password === formData.password){
            dispatch({
                type: "setLoggedInUser",
                data: user
            })
            navigate('/')
        } else {
            console.log('Does not match')
        }        
        setFormData(initialLogInData)
    }

    // Handling the form data as the user enter keystrokes
    const handleFormData = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
        // console.log(formData)
    }

    return (
        <>
            <Typography variant='h4'>Log In!</Typography>
            <form onSubmit={handleSubmit}>
                <div>
                    <InputLabel>Username</InputLabel>
                    <TextField type="text" name="username" id="username" value={formData.username} onChange={handleFormData}></TextField>
                </div>

                <div>
                    <InputLabel>Password</InputLabel>
                    <TextField type="password" name="password" id="password" value={formData.password} onChange={handleFormData}></TextField>
                </div>

                <Button type="submit" variant="contained">Log In</Button>
            </form>
        </>
    )
}

export default LogIn;