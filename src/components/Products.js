import { useGlobalState } from "../utils/stateContext";
import Product from './Product'

const Products = () => {
    // Calling the store into the component through global state
    const {store} = useGlobalState()
    // Unpacking the store
    const {productList} = store

    return (
        <>
            <h1>View our product line!</h1>
            {productList.map(product => 
                <Product key={product.id} product={product} />
            )}
        </>
    )
}

export default Products;