// Import navigate
import { useNavigate } from 'react-router-dom';
// Import context
import { useGlobalState } from '../../utils/stateContext';
// Import State
import { useState } from 'react';

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
    // Handle submit of form
    const handleIncrement = (event) => {
        event.preventDefault()
        quantity ++
        // console.log(quantity)
        setFormData({
            ...formData,
            quantityOrdered: quantity
        })
    }    
    
    const handleDecrement = (event) => {
        event.preventDefault()
        if(!quantity === 0){
            quantity --
            // console.log(quantity)
            setFormData({
                ...formData,
                quantityOrdered: quantity
            })
        }
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
                <form onSubmit={addOrder}>
                    <div>
                        <button name ="add" value="1" onClick={handleIncrement}>+</button>
                        <p>{quantity}</p>
                        <button name="subtract" value="-1" onClick={handleDecrement}>-</button>
                    </div>
                <input type="submit" value="Order"></input>
            </form>
        </>
    )
}

export default OrderProduct;