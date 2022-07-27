import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalState } from '../utils/stateContext'

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
            <h1>Sign Up!</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleFormData}></input>
                    <label>Last Name</label>
                    <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleFormData}></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleFormData}></input>
                </div>
                <div>
                    <label>Mobile</label>
                    <input type="text" name="mobile" id="mobile" value={formData.mobile} onChange={handleFormData}></input>
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" id="username" value={formData.username} onChange={handleFormData}></input>
                </div>
                <div>
                    <label>Address</label>
                    <input type="text" name="address" id="address" value={formData.address} onChange={handleFormData}></input>
                </div>
                <div>
                    <label>Date of Birth</label>
                    <input type="text" name="dob" id="dob" value={formData.dob} onChange={handleFormData}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" id="password" value={formData.password} onChange={handleFormData}></input>
                    <label>Password Confirmation</label>
                    <input type="password" name="passwordConfirmation" id="passwordConfirmation" value={formData.passwordConfirmation} onChange={handleFormData}></input>
                </div>
                <input type="submit" value="Sign Up" />

            </form>
        </>
    )
}

export default SignUp;