import './style.css'
const SingleProduct=({product})=>{
    return(
        <div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p> price: ${product.price}</p>
        </div>

    )

}
export default SingleProduct;