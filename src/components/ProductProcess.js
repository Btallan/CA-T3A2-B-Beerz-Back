const ProductDescription = ({product}) => {
    return (
        <>
            <img alt="Product IMG" src={product.processIMG} style={{height: "200px"}}></img>
        </>
    )
}

export default ProductDescription;