import { useGlobalState } from '../utils/stateContext';


const Review = ({review}) => {    
    // Calling the store into the component through global state
    const {store} = useGlobalState()
    // Unpacking the store
    const {userList} = store
    
    const foundUser = userList.find(user => user.id === review.userID)

    return (
        <>
            <h4>{review.headline}</h4>
            <h4>{review.comment}</h4>
            <h4>{review.rating}</h4>
            <h4>{review.dateEditted}</h4>
            <h4>{foundUser.username}</h4>
            <hr></hr>
        </>
    )
}

export default Review;