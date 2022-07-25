import { useGlobalState } from '../../utils/stateContext';
import { Link } from 'react-router-dom';


const UserProfile = () => {
    // Calling the store into the component through global state
    const {store} = useGlobalState()

    // Unpacking the store
    const {loggedInUser} = store

    return (
        <>
            <h1>View user profile!</h1>
            <img alt="Profile" src={loggedInUser.profileIMG} style={{width: "100px"}}/>           
            <p>{loggedInUser.firstName}</p>
            <p>{loggedInUser.lastName}</p>
            <p>{loggedInUser.email}</p>
            <p>{loggedInUser.mobile}</p>
            <p>{loggedInUser.username}</p>
            <p>{loggedInUser.dob}</p>
            <p>{loggedInUser.password}</p>
            <p>{loggedInUser.passwordConfirmation}</p>
            <Link to={`/${loggedInUser.username}/edit`}>Edit Profile</Link>
        </>
    )
}

export default UserProfile;