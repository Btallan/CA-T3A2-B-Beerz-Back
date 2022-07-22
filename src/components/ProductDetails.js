import {useParams} from 'react-router-dom'
import { useGlobalState } from '../utils/stateContext';


const ProductDetails = () => {
    // Calling the store into the component through global state
    const {store} = useGlobalState()
    // Unpacking the store
    const {productList} = store

    // Saving the params from URL
    const params = useParams();
    // console.log(params)

    const getProduct = (id) => {
        return productList.find(product => product.id === parseInt(id))
    }

    const product = getProduct(params.id)

    return (
        <>
            <h1>{product.name}</h1>
            <img alt="Product IMG" src={product.productIMG} style={{height: "200px"}}></img>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <h4>Brewing Process</h4>
            <img alt="Product IMG" src={product.processIMG} style={{height: "200px"}}></img>
            <h4>Reviews</h4>

        </>
    )
}

export default ProductDetails;