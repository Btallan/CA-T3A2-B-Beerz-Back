// Import global states
import { useGlobalState } from '../../utils/stateContext'
// Import navigate
import { Link } from "react-router-dom";
// Import order component
// import Order from '../User/UserOrder'


// MATERIAL UI IMPORTS
import {Typography, Button, Container, Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'

const UserOrders = () => {
    // Calling dispatch into the component, so that we can update the global state
    const {store} = useGlobalState();
    // Unpack the store
    // Import the available tags
    const {orderList,loggedInUser, productList} = store
    // console.log(orderList)

    const userOrders = orderList.filter(orders => parseInt(orders.userID) === parseInt(loggedInUser.id))
    userOrders.sort((a,b) => b.id - a.id)    
    
    // Check to see whether the user has any orders
    // var activeUserOrders = !userOrders.length

    // console.log(userOrders)
    // console.log(activeUserOrders)

    return (
        <Container >
            <Typography variant='h4' style={{textAlign: 'center', color: 'white'}}>My Orders</Typography>
            <Card>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableCell>Date</TableCell>
                        <TableCell>Product</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell></TableCell>
                    </TableHead>
                    <TableBody>
                        {userOrders.map(order =>
                        <TableRow>                            
                            <TableCell>{order.orderDate}</TableCell>
                            <TableCell>{productList.find(product => parseInt(product.id) === parseInt(order.productID)).name}</TableCell>
                            <TableCell>{order.quantityOrdered}</TableCell>
                            <TableCell>{order.status}</TableCell>
                            <TableCell><Button component={Link} to={`/contact/order/${order.id}`} id="contactButton" variant="contained">Contact Brewery</Button>
</TableCell>                         
                        </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            </Card>
        </Container>
    )
}

export default UserOrders;