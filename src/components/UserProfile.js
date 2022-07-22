import { useGlobalState } from '../utils/stateContext';

const UserProfile = () => {
    // Calling the store into the component through global state
    const {store} = useGlobalState()

    // Unpacking the store
    const {firstName, lastName, email, mobile, username, dob, password, passwordConfirmation} = store

    return (
        <>
            <h1>View user profile!</h1>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p>
            <p>{mobile}</p>
            <p>{username}</p>
            <p>{dob}</p>
            <p>{password}</p>
            <p>{passwordConfirmation}</p>
        </>
    )
}

export default UserProfile;