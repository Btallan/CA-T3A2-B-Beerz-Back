import { useGlobalState } from '../utils/stateContext';

import Review from './Review'

const Reviews = ({id}) => {
    // Calling the store into the component through global state
    const {store} = useGlobalState()
    // Unpacking the store
    const {reviewList} = store

    // console.log(reviewList)
    const productReviews = reviewList.filter(reviews => reviews.ProductID === id)
    // console.log(productReviews)
    
    return (
        <>
            <h4>Reviews</h4>
            <hr></hr>
            {productReviews.map(review =>
                <Review key={review.id} review={review} />    
            )}
        </>
    )
}


export default Reviews;