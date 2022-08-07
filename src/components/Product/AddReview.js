// Import the state package
import {useState} from 'react'
import { useGlobalState } from '../../utils/stateContext'
import {useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// MATERIAL UI IMPORTS
import {Button, TextField, Container, Card, Typography} from '@mui/material'
// import { createReview } from '../../services/reviewsServices'

const AddReview = ({id}) => {
    // Sets the initial values of the form, used also when form is clear/completed
    var initialFormData = {
        headline: "",
        comment: "",
        rating: "",
        productID: ""
    }


    // get the product params from the URL
    const params = useParams();

    // Initialise the abiltiy to navigate
    const navigate = useNavigate()

    // Initialise the local state
    const [formData, setFormData] = useState(initialFormData)

    // Calling in reducer through context to add reviews,
    const {store, dispatch} = useGlobalState()
    const {reviewList,loggedInUser} = store

    // Function to handle the form data as the user writes it in, storing it within the local state
    const handleFormData = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    // Function handles the data when the form is submitted
    // It uses reducer to add it to context
    const handleSubmit = (event) => {
        event.preventDefault();
        if(formData.text === ""){
            console.log("Empty message")
        } else {
            // adds the message to the list            
            addReview(formData)
            navigate(`/products/${params.id}`)
        }
        console.log("Submit button clicked")
        setFormData(initialFormData)
        navigate(`/products/${params.id}/reviewed`)
    }

    const addReview = (formData) => {
        const review = {
            headline: formData.headline,
            comment: formData.comment,
            rating: formData.rating,
            productID: parseInt(params.id),
            userID: loggedInUser.id,
            dateCreated: Date(),
            dateEditted: Date(),
            id: nextID(reviewList)
        }
        // console.log(review)
        
        // // API
        // createReview(review)
        //     .then(review => {
        //         dispatch({
        //             type: "addReview",
        //             data: review
        //         })
        //    })
        
        
        // Reducer
        dispatch({
            type: "addReview",
            data: review
        })
    }

    function nextID(data){
        // first exclude the empty case
        if(data.length === 0) return ;

        // second handle if data not empty
        const sortData = data.sort((a,b) => a.id - b.id);
        const nextID = sortData[sortData.length -1].id +1
        return nextID 
    }

        
    return (
        <>
            <Container>
                <Card className='welcomeCards'>
                    <Typography variant='h4'>What do you think?</Typography>
                    <form onSubmit={handleSubmit}>

                        <div className='textFieldInputLong'>
                            <TextField label='Headiline' type="text" name="headline" id="headline" value={formData.headline} onChange={handleFormData} size="small" fullWidth className='textFieldInputColour'/>
                        </div>

                        <div className='textFieldInputLong'>
                            <TextField label='Comment' type="text" name="comment" id="comment" value={formData.comment} onChange={handleFormData} multiline rows={5} fullWidth className='textFieldInputColour'/>
                        </div>

                        <div className='textFieldInputLong'>
                            <TextField label='Rating (between 1-5)' InputProps={{inputProps :{max: 5, min:1}}} type="number" id="rating" name="rating" min="1" max="5" onChange={handleFormData} fullWidth className='textFieldInputColour'/>
                        </div>

                        
                        <Button type="submit" variant="contained" value="submit">Add Review</Button>

                    </form>
                </Card>
            </Container>
        </>
    )
}


export default AddReview;