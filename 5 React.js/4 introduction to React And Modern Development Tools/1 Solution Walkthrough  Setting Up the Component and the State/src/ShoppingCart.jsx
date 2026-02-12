import { useState } from "react"



const ShoppingCart = () => {

    const [products, setProducts] = useState([]);

    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");

    return(
        <div>
           <h1>Simple Shopping Cart</h1>
           <div>
            <h3>Add a Product</h3>
             <input type="text" placeholder="Procuct Name"/>
             <input type="text" placeholder="Price"/>
             <button>Add to Cart</button>
           </div>
           <ul>
             {
                products.length > 0 ? (
                   <h3>Products is cart</h3>
                ): <p>This cart is empty.</p>
             }
           </ul>
        </div>
    )
}

export default ShoppingCart



