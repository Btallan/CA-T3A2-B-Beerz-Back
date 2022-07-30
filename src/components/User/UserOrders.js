// Import global states
import { useGlobalState } from '../../utils/stateContext'

// Import order component
import Order from '../User/UserOrder'

// MATERIAL UI IMPORTS
import {Typography} from '@mui/material'

const UserOrders = () => {
    // Calling dispatch into the component, so that we can update the global state
    const {store} = useGlobalState();
    // Unpack the store
    // Import the available tags
    const {orderList,loggedInUser} = store
    // console.log(orderList)

    const userOrders = orderList.filter(orders => parseInt(orders.userID) === parseInt(loggedInUser.id))
    userOrders.sort((a,b) => b.id - a.id)    
    
    // Check to see whether the user has any orders
    var activeUserOrders = !userOrders.length

    // console.log(userOrders)
    // console.log(activeUserOrders)

    return (
        <>
            {!activeUserOrders ? 
                <>
                    <Typography variant='h4'>My Orders</Typography>
                        {userOrders.map(order =>
                        <Order key={order.id} order={order} />    
                        )}
                </>
                :
                    null
            }
        </>
    )
}

export default UserOrders;