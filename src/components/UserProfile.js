import { useGlobalState } from '../utils/stateContext';

const UserProfile = () => {
    // Calling the store into the component through global state
    const {store} = useGlobalState()

    // Unpacking the store
    const {loggedInUser} = store

    return (
        <>
            <h1>View user profile!</h1>
            <p>{loggedInUser.firstName}</p>
            <p>{loggedInUser.lastName}</p>
            <p>{loggedInUser.email}</p>
            <p>{loggedInUser.mobile}</p>
            <p>{loggedInUser.username}</p>
            <p>{loggedInUser.dob}</p>
            <p>{loggedInUser.password}</p>
            <p>{loggedInUser.passwordConfirmation}</p>
        </>
    )
}

export default UserProfile;