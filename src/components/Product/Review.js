import { useGlobalState } from '../../utils/stateContext';

// MATERIAL UI IMPORTS
import {Typography} from '@mui/material'


const Review = ({review}) => {    
    // Calling the store into the component through global state
    const {store} = useGlobalState()
    // Unpacking the store
    const {userList} = store
    
    const foundUser = userList.find(user => user.id === review.userID)
    // console.log(review)
    return (
        <>
            <Typography variant="h6">{review.headline}</Typography>
            <Typography variant="subtitle2">Rating: {review.rating}</Typography>
            <Typography variant="body1">{review.comment}</Typography>
            <Typography variant="subtitle2">{review.dateEditted} - {foundUser.username}</Typography>
            <hr></hr>
        </>
    )
}

export default Review;