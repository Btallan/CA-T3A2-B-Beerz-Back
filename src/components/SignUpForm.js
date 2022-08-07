import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalState } from '../utils/stateContext'

// MATERIAL UI IMPORTS
import {Button, TextField,Typography, Card, Container} from '@mui/material'
import { signUp } from '../services/authServices'
// import { Container } from '@mui/system'

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

        // API
        signUp(formData)
            .then(user => {
                sessionStorage.setItem("username", user.username)
                sessionStorage.setItem("authToken", user.jwt)
                dispatch({
                    type: 'setLoggedInUser',
                    data: user.username
                })
                dispatch({
                    type: 'setToken',
                    data: user.jwt
                })
            })

        // Context
        dispatch({
            type: "signUserUp",
            data: formData
        })
        
        setFormData(initialSignUpData)
        navigate('/')
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
            <Container>
                <Card className='welcomeCards'>
                <Typography variant='h4' sx={{margin: '0 0 20px 0'}}>Sign Up!</Typography>
                <form onSubmit={handleSubmit} className='formStyles'>

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


                    <Button type="submit" variant="contained" className='welcomeButtons' sx={{margin: '30px 0 20px 0'}}>Sign Up</Button>

                </form>
                </Card>
            </Container>
        </>
    )
}

export default SignUp;