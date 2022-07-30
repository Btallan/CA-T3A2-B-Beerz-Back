import {Link} from 'react-router-dom'

// MATERIAL UI IMPORTS
import {Button, Typography} from '@mui/material'

const Product = ({product}) => {
    // Store the current URL
    const url = window.location.href
    // Slice the current url to get the last 8 characters, -8 to start from the end
    const lastChars = url.slice(-8)
    // Initialise the variable to store the url boolean
    var urlBoolean
    // If statement to return true if products is the last 8 characters, false if not
    if(lastChars !== "products"){
        urlBoolean = false
    } else {
        urlBoolean = true
    }  
    
    return (
        <>
            <Typography variant='h5'>{product.name}</Typography>
            <img alt="Product IMG" src={product.productIMG} style={{height: "200px"}}></img>
            <Typography variant='h6'>{product.title}</Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Typography variant="body1">{product.price}</Typography>
            {/* Based upon url boolean, return certain links */}
            {urlBoolean ?
                // <Link to={`${product.id}`}>See more</Link>
                <Button component={Link} to={`${product.id}`} variant="contained">See More</Button>

            :
                // <Link to={`/products/${product.id}`}>See more</Link>
                <Button component={Link} to={`/products/${product.id}`} variant="contained">See More</Button>
            }
            
        </>
    )
}

export default Product;