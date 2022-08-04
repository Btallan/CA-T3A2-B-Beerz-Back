import { useGlobalState } from "../../utils/stateContext";
import Product from './Product'

// MATERIAL UI IMPORTS
import {Typography, Box, Container} from '@mui/material'

const Products = () => {
    // Calling the store into the component through global state
    const {store} = useGlobalState()
    // Unpacking the store
    const {productList} = store

    return (
        <>
            <Container>
                <div className="spacer"></div>
                <Typography variant="h4" style={{textAlign: "center"}}>Our product line!</Typography>
                <hr></hr>
                <Box style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around"}}>
                    {productList.map(product => 
                        <Product key={product.id} product={product} />
                    )}
                </Box>
            </Container>
            {/* <div className="footerSpacer"></div> */}
        </>
    )
}

export default Products;