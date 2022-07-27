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
            {loggedInUser.profileIMG ?
                    <img alt="Profile" src={loggedInUser.profileIMG} style={{width: "100px"}}/>
                :
                <img alt="Profile" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' style={{width: "100px"}}/>
            }           
            <p>{loggedInUser.firstName}</p>
            <p>{loggedInUser.lastName}</p>
            <p>{loggedInUser.email}</p>
            <p>{loggedInUser.mobile}</p>
            <p>{loggedInUser.username}</p>
            <p>{loggedInUser.dob}</p>
            <p>{loggedInUser.address}</p>
            <p>{loggedInUser.password}</p>
            <p>{loggedInUser.passwordConfirmation}</p>
            <Link to={`/${loggedInUser.username}/edit`}>Edit Profile</Link>
        </>
    )
}

export default UserProfile;