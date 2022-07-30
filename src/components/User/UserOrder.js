// Import global states
import { useGlobalState } from '../../utils/stateContext'

// MATERIAL UI IMPORTS
import {Typography} from '@mui/material'

const Order = ({order}) => {
    // Calling dispatch into the component, so that we can update the global state
    const {store} = useGlobalState();
    // Unpack the store
    // Import the available tags
    const {productList} = store

    // console.log(orderList)
    const orderedProduct = productList.find(product => parseInt(product.id) === parseInt(order.productID))
    // console.log(orderedProduct)

    // Checking to see whether the user has any outstanding orders,
    // var activeOrders = orderedProduct.some(product => product.status === "")
    // console.log(activeOrders)


    return(
        <>
            <Typography variant='body1'>{order.orderDate}</Typography>
            <Typography variant='body1'>{orderedProduct.name}</Typography>
            <Typography variant='body1'>{order.quantityOrdered}</Typography>
            <Typography variant='body1'>Status: {order.status}</Typography>
            <hr></hr>
        </>
    )

}

export default Order;