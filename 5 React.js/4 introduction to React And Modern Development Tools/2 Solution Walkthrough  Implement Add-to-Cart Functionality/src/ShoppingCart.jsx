import { useState } from "react";

const ShoppingCart = () => {

     const [products,setProducts] = useState([]);

     const [productName, setProductName] = useState("")

     const [productPrice,setProductPrice] = useState('')

     const handleAddProduct = () => {
        if(productName.trim() !== "" && productPrice.trim() !== ""){

          const newProducts = {
            id: Date.now(),
            name: productName,
            price: productPrice,
            quantity: 1
        }
        console.log(newProducts)
        setProducts([...products,newProducts]);
        }
   
     }

   return(
    <div>
        <h1>Simple Shopping Cart</h1>
        <div>
            <h3>Add a Product</h3>
            <input type="text" placeholder="Product Name" onChange={(e) => setProductName(e.target.value)} value={productName}/>
            <input type="number" placeholder="Price" onChange={(e) => setProductPrice(e.target.value)} value={productPrice}/>
            <button onClick={handleAddProduct}>Add to Cart</button>
        </div>
        {
            products.length > 0 ? (
             <div>
                <h3>Products is cart</h3>
                 {/* list of the products */}
                <ul>
                    {
                        products.map(products => (
                        <li>
                              <strong>{products.name}</strong>
                        </li>
                        ))
                    }
                </ul>
             </div>
            ) : <p>This cart is empty.</p>
        }
    </div>
   )

}

export default ShoppingCart;







