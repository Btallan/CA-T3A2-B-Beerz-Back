import { useGlobalState } from '../../utils/stateContext';
import {Link} from 'react-router-dom'

import Review from './Review'

// MATERIAL UI IMPORTS
import {Button, Typography} from '@mui/material'

const Reviews = ({product}) => {
    // Calling the store into the component through global state
    const {store} = useGlobalState()
    // Unpacking the store
    const {reviewList, loggedInUser} = store

    // console.log(reviewList)
    // console.log(product.id)

    const productReviews = reviewList.filter(reviews => parseInt(reviews.productID) === parseInt(product.id))
    // console.log(productReviews)

    // FUnction to return the overall rating
    const getOverallRating = (productReviews) => {
       var ratingArray = []
        const numberReviews = productReviews.length    

        productReviews.forEach(review =>
            ratingArray.push(parseInt(review.rating))
        )
        
        var totalScore = ratingArray.reduce((a,b) => a +b, 0)
        var average = 0
        if(numberReviews){
            var average = totalScore / numberReviews
        }
        console.log(average)
        

        if(average === 0){
            return "Product has not yet been reviewed"
        } else {
            return average.toFixed(1)
        }
    }
    
    return (
        <>
            <Typography variant='h6'>Reviews</Typography>
            <Typography variant="subtitle1">Average Rating: {getOverallRating(productReviews)}</Typography>
            {loggedInUser && <Button component={Link} to={`/add-review/${product.id}`} variant="contained">Add a review!</Button>}
            

            <hr></hr>
            {productReviews.map(review =>
                <Review key={review.id} review={review} />    
            )}
        </>
    )
}


export default Reviews;