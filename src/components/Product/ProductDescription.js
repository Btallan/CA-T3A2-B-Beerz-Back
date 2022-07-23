const ProductDescription = ({product}) => {
    return (
        <>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </>
    )
}

export default ProductDescription;