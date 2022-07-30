// Import navigate
import { useNavigate } from 'react-router-dom';
// Import context
import { useGlobalState } from '../../utils/stateContext';
// Import State
import { useState } from 'react';

// MATERIAL UI IMPORTS
import {Button, Typography} from '@mui/material'

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
        if(!quantity == 0){
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
            {/* Form to book into event */}
            <div>
                <Typography variant='body1'>${product.price} ea</Typography>
            </div>
            <form onSubmit={addOrder}>
                <div>
                    <Button variant='contained' name ="add" value="1" onClick={handleIncrement}>+</Button>
                    <Typography variant='body1'>{quantity}</Typography>
                    <Button variant='contained' name="subtract" value="-1" onClick={handleDecrement}>-</Button>
                </div>
            <Button type="submit" variant="contained" value='Order'>Order</Button>

            </form>
            <div>
                <Typography variant='body1'>${quantity * product.price} total</Typography>
            </div>

        </>
    )
}

export default OrderProduct;