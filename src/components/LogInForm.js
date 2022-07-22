import {useState} from 'react'
import { useGlobalState } from '../utils/stateContext'


const LogIn = () => {
    const initialLogInData = {
        username: "",
        password: ""  
    }

    // Calling the state function to handle the data within the form
    const [formData, setFormData] = useState(initialLogInData)

    // Calling dispatch into the component, so that we can update the global state
    const {dispatch} = useGlobalState();

    // Handling the submission of the form
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Submit button clicked")
        console.log(formData)
        dispatch({
            type: "setLoggedInUser",
            data: formData.username
        })
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
            <h1>Log In!</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" id="username" value={formData.username} onChange={handleFormData}></input>
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password" id="password" value={formData.password} onChange={handleFormData}></input>
                </div>

                <input type="submit" value="Login" />
            </form>
        </>
    )
}

export default LogIn;