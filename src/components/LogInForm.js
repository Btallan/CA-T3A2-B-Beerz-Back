import {useState} from 'react'
import { useGlobalState } from '../utils/stateContext'
import {useNavigate} from 'react-router-dom'

// MATERIAL UI IMPORTS
import {Button, TextField, Typography, Container, Card} from '@mui/material'

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
            <Container>
                <Card className='welcomeCards'>
                    <Typography variant='h4' sx={{margin: '0 0 20px 0'}}>Log In!</Typography>
                    <form onSubmit={handleSubmit} className='formStyles'>

                            <TextField sx={{margin: '10px 0'}} type="text" name="username" id="username" value={formData.username} onChange={handleFormData} label="Username" className='textFieldInputLong textFieldInputColour' ></TextField>


                            <TextField sx={{margin: '10px 0'}} type="password" name="password" id="password" value={formData.password} onChange={handleFormData} label="Password" className='textFieldInputLong textFieldInputColour'></TextField>

                        <Button type="submit" variant="contained" className='welcomeButtons' sx={{margin: '30px 0 20px 0'}}>Log In</Button>
                    </form>
                </Card>
            </Container>
        </>
    )
}

export default LogIn;