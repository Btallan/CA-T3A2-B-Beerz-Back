import { useGlobalState } from "../../utils/stateContext";
import Product from './Product'

// MATERIAL UI IMPORTS
import {Typography} from '@mui/material'

const Products = () => {
    // Calling the store into the component through global state
    const {store} = useGlobalState()
    // Unpacking the store
    const {productList} = store

    return (
        <>
            <Typography variant="h4" >View our product line!</Typography>
            {productList.map(product => 
                <Product key={product.id} product={product} />
            )}
        </>
    )
}

export default Products;