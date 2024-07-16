import { useState , useEffect } from "react"
import SingleProduct from "../singleProduct"
import './style.css'
const ProductList =({apiUrl})=>{
    const [products , setProducts]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
       .then(res=>res.json())
       .then(data=>setProducts(data))
       .catch(err=>console.log(err))
       },[apiUrl])
    return(
        <div>
            {products.map(product=>(
                <SingleProduct key={product.id} product={product}/>
            ))}
        </div>
        
    )
}

export default ProductList;