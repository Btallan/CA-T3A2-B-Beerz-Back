import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalState } from '../../utils/stateContext'

const EditUserProfile = ({user}) => {
    // Calling dispatch into the component, so that we can update the global state
    const {store, dispatch} = useGlobalState();
    const {loggedInUser} = store

    // Controlled components for form
    const intialFormData ={
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
        
        return (
            <>
            <h1>Edit Profile!</h1>
            {console.log(formData)}
            <form onSubmit={handleSubmit}>
                {/* <img alt="Profile Image" src={formData.profileIMG} style={{width: "100px"}}></img>           
                <div>
                    <label>Update Profile Image</label>
                    <input type="file" name="profileIMG" id="profileIMG"  onChange={handleFormData}></input>
                </div> */}
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
                    <label>Address</label>
                    <input type="text" name="address" id="address" defaultValue={loggedInUser.address} onChange={handleFormData}></input>
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
                <input type="submit" value="Edit" />

            </form>
        </>
    )
}

export default EditUserProfile;