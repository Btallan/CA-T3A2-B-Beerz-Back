// Import navigate
import { useNavigate } from 'react-router-dom';
// Import context
import { useGlobalState } from '../../utils/stateContext';
// Import State
import { useState } from 'react';

// MATERIAL UI IMPORTS
import {Button, Typography, Box, Container} from '@mui/material'

// Import Material UI Icons
import { Add } from '@mui/icons-material';
import RemoveIcon from '@mui/icons-material/Remove';


const OrderProduct = ({product}) => {
    // Calling in dispatch
    const {store, dispatch} = useGlobalState()
    const {loggedInUser, orderList} = store

    const navigate = useNavigate()

    const initialFormData = {
        id: nextID(orderList),
        userID: loggedInUser.id,
        productID: product.id,
        quantityOrdered: 0,
        orderDate: Date(),
        status: "Pending"
    }
    // console.log(initialFormData)

    // Initialise the form state
    const [formData, setFormData] = useState(initialFormData)

    //
    // Variable and function to hane increment and decrement of order quantity
    //
    var quantity = formData.quantityOrdered
    var totalCost = 0.00
    // Handle submit of form
    const handleIncrement = (event) => {
        event.preventDefault()
        quantity ++
        // console.log(quantity)
        setFormData({
            ...formData,
            quantityOrdered: quantity
        })
        totalCost = quantity * product.price
        console.log(totalCost)
    }    
    
    const handleDecrement = (event) => {
        event.preventDefault()
        if(quantity !== 0){
            quantity --
            setFormData({
                ...formData,
                quantityOrdered: quantity
            })            
        }
        totalCost = quantity * product.price
        console.log(totalCost)
    }

    // Need use effect to see the effect of the update, console.log, is ahead one step due to async
    // useEffect(() => console.log(formData),[formData])

    const addOrder = (event) => {
        event.preventDefault()
        dispatch({
            type: "addProductOrder",
            data: formData
        })
        navigate(`/${loggedInUser.username}`)
    }
    // useEffect(() => console.log(formData),[formData])
    // useEffect(() => console.log(orderList),[orderList])

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
            <Container style={{textAlign: 'center'}}>

                <Box>
                    <Typography variant='h5' sx={{margin: '0 0 20px 0'}}>${product.price} ea</Typography>
                </Box>

                <form onSubmit={addOrder}>

                    <Box style={{display: 'flex', justifyContent: 'center'}}>

                        <Button name ="add" variant='contained' value={1} onClick={handleIncrement} sx={{margin: '10px', padding: '20px'}}>
                            <Add />                 
                        </Button>

                        <Typography variant='body1' sx={{margin: '30px', padding: '20px'}}>{quantity}</Typography>

                        <Button name="subtract" variant='contained' value={-1} onClick={handleDecrement} sx={{margin: '10px', padding: '20px'}}>
                            <RemoveIcon />
                        </Button>

                    </Box>

                <Button type="submit" variant="contained" value='Order' sx={{margin: '20px 0'}}>Order</Button>

                </form>

                <Box>
                    <Typography variant='h5' sx={{margin: '30px 0 0 0'}}>${quantity * product.price} total</Typography>
                </Box>
            </Container>
        </>
    )
}

export default OrderProduct;