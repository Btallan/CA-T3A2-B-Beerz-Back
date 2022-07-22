import {Link} from 'react-router-dom'

const Product = ({product}) => {
    return (
        <>
            <h1>{product.name}</h1>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <Link to={`${product.id}`}>See more</Link>
        </>
    )
}

export default Product;