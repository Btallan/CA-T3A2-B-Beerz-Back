// Import global states
import { useGlobalState } from '../../utils/stateContext'

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
            <h4>{order.orderDate}</h4>
            <p>{orderedProduct.name}</p>
            <p>{order.quantityOrdered}</p>
            <p>Status: {order.status}</p>
            <hr></hr>
        </>
    )

}

export default Order;