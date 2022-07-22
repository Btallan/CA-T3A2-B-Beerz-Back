import {useState} from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useGlobalState } from '../utils/stateContext'

const SignUp = () => {
    const initialSignUpData = {
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        username: "",
        dob: "",
        password: "",
        passwordConfirmation: ""
    }

    // Calling the state function
    const [formData, setFormData] = useState(initialSignUpData)

    // Handling the submission of the form
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Submit button clicked")
        console.log(formData)
        setFormData(initialSignUpData)
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