import { useGlobalState } from '../../utils/stateContext';
import {Link} from 'react-router-dom'

import Review from './Review'

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
        var average = totalScore / numberReviews

        if(average === 0){
            return <p>Product has not yet been reviewed</p>
        } else {
            // console.log(productReviews)
            // console.log(ratingArray)
            // console.log(totalScore)
            // console.log(average)
            return average.toFixed(1)
        }
    }
    
    return (
        <>
            <h4>Reviews</h4>
            <p>Average Rating: {getOverallRating(productReviews)}</p>
            {loggedInUser && <Link to={`/add-review/${product.id}`}>Add a review!</Link>}
            <hr></hr>
            {productReviews.map(review =>
                <Review key={review.id} review={review} />    
            )}
        </>
    )
}


export default Reviews;