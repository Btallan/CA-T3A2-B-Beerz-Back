// Import global states
import { useGlobalState } from '../../utils/stateContext'
// Import navigate
import { Link } from "react-router-dom";
// Import order component
// import Order from '../User/UserOrder'


// MATERIAL UI IMPORTS
import {Typography, Button, Container, Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useTheme, useMediaQuery, CardHeader, CardContent} from '@mui/material'

const UserOrders = () => {
    // Calling dispatch into the component, so that we can update the global state
    const {store} = useGlobalState();
    // Unpack the store
    // Import the available tags
    const {orderList,loggedInUser, productList} = store
    // console.log(orderList)

    const userOrders = orderList.filter(orders => parseInt(orders.userID) === parseInt(loggedInUser.id))
    userOrders.sort((a,b) => b.id - a.id)
    
    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    
    return (       
        <Container sx={{marginTop: '30px'}}>
            <Typography variant='h4' style={{textAlign: 'center', color: 'white', marginBottom: '20px'}}>My Orders</Typography>
            {isMatch ?
                <>
                    {userOrders.map(order =>
                        <Card sx={{margin: '10px 0'}}>
                        <CardHeader title={productList.find(product => parseInt(product.id) === parseInt(order.productID)).name} sx={{textAlign: 'center'}}></CardHeader>
                            <CardContent>
                                <Typography variant='body1'>Date Ordered: {order.orderDate}</Typography>
                                <Typography variant='body1'>Qty: {order.quantityOrdered}</Typography>
                                <Typography variant='body1'>Sttus: {order.status}</Typography>
                            </CardContent>
                            <CardContent>
                                <Button component={Link} to={`/contact/order/${order.id}`} id="contactButton" variant="contained">Contact Brewery</Button>
                            </CardContent>
                        </Card>
                    )}
                </>
                :
                <>
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
                                        <TableCell><Button component={Link} to={`/contact/order/${order.id}`} id="contactButton" variant="contained">Contact Brewery</Button></TableCell>                         
                                    </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Card>
                </>
                }           
        </Container>
    )
}

export default UserOrders;