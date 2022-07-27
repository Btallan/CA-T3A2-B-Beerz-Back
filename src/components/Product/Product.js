import {Link} from 'react-router-dom'

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
            <h1>{product.name}</h1>
            <img alt="Product IMG" src={product.productIMG} style={{height: "200px"}}></img>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <p>{product.price}</p>
            {/* Based upon url boolean, return certain links */}
            {urlBoolean ?
                <Link to={`${product.id}`}>See more</Link>
            :
                <Link to={`/products/${product.id}`}>See more</Link>
            }
            
        </>
    )
}

export default Product;