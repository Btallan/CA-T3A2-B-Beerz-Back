import {useParams} from 'react-router-dom'
import { useGlobalState } from '../../utils/stateContext';

// Import components
import Reviews from './Reviews'
import ProductDescription from './ProductDescription';
import ProductProcess from './ProductProcess'

// import ProductTabs from './ProductTabs'



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

    // var tabSelection = "Description"
    // var description = true
    // var brewing = false
    // var reviews = false

    // Handling the submission of the form
    const handleButton = (event) => {
        // event.preventDefault()
        // console.log(event.target.name)
        // tabSelection = event.target.name
        // console.log(tabSelection)
    }


    return (
        <>
            <h1>{product.name}</h1>
            <img alt="Product IMG" src={product.productIMG} style={{height: "200px"}}></img>

            <button onClick={handleButton} name="description">Description</button>
            <button onClick={handleButton} name="brewing-process" >Brewing Process</button>
            <button onClick={handleButton} name="reviews" >Reviews</button>

            {/* <ProductTabs product={product} tabSelection={tabSelection} /> */}

            <ProductDescription product={product}/>
            <ProductProcess product={product}/>
            <Reviews product={product}/>

        </>
    )





}

export default ProductDetails;