// MATERIAL UI IMPORTS
import {Typography} from '@mui/material'

const ProductDescription = ({product}) => {
    return (
        <>
            <Typography variant="h6">{product.title}</Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Typography variant="body1">${product.price} ea</Typography>
        </>
    )
}

export default ProductDescription;