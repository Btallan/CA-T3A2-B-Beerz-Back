// Import global states
import { useGlobalState } from '../../utils/stateContext'
// Import navigate
import { useNavigate } from "react-router-dom";


// MATERIAL UI IMPORTS
import {Button, Typography} from '@mui/material'

const Order = ({order}) => {
    // Calling dispatch into the component, so that we can update the global state
    const {store} = useGlobalState();
    // Unpack the store
    // Import the available tags
    const {productList} = store

    const navigate = useNavigate()

    // console.log(orderList)
    const orderedProduct = productList.find(product => parseInt(product.id) === parseInt(order.productID))
    // console.log(orderedProduct)

    // Checking to see whether the user has any outstanding orders,
    // var activeOrders = orderedProduct.some(product => product.status === "")
    // console.log(activeOrders)

    const contactBrewery = () => {
        navigate(`/contact/order/${orderedProduct.id}`)
    }

    return(
        <>
            <Typography variant='body1'>{order.orderDate}</Typography>
            <Typography variant='body1'>{orderedProduct.name}</Typography>
            <Typography variant='body1'>{order.quantityOrdered}</Typography>
            <Typography variant='body1'>Status: {order.status}</Typography>
            <hr></hr>
            <Button onClick={contactBrewery} id="contactButton" variant="contained">Contact Brewery</Button>
        </>
    )

}

export default Order;