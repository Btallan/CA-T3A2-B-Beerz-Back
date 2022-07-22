import {useState} from 'react'
import { useGlobalState } from '../utils/stateContext'
import {useNavigate} from 'react-router-dom'

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