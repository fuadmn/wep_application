import { useState } from "react";

const ShoppingCart = () => {

     const [products,setProducts] = useState([]);

     const [productName, setProductName] = useState("")

     const [productPrice,setProductPrice] = useState('')

     const handleAddProcuct = () => {
        if(productName.trim() !== "" && productPrice.trim() !== ""){

          const newProcucts = {
            id: Date.now(),
            name: productName,
            price: parseFloat(productPrice),
            quantity: 1
        }
        console.log(newProcucts)
        setProducts([...products,newProcucts]);
        setProductName("");
        setProductPrice("");
        
        }
   
     }

     const removeProduct = (id) => {
       const updateProcucts = products.filter(products => products.id !== id);
       setProducts(updateProcucts)
     }

   return(
    <div>
        <h1>Simple Shopping Cart</h1>
        <div>
            <h3>Add a Product</h3>
            <input type="text" placeholder="Procuct Name" onChange={(e) => setProductName(e.target.value)} value={productName}/>
            <input type="number" min="0" placeholder="Price" onChange={(e) => setProductPrice(e.target.value)} value={productPrice}/>
            <button onClick={handleAddProcuct}>Add to Cart</button>
        </div>
        {
            products.length > 0 ? (
             <div>
                <h3>Products is cart</h3>
                 {/* list of the products */}
                <ul>
                    {
                        products.map(products => (
                        <li key={products.id}>
                              <strong>{products.name}</strong> - ${products.price.toFixed(2)}

                              <div>
                                Quantity: 
                                <button>-</button>1
                                <button>+</button>
                              </div>
                                <button onClick={()  => removeProduct(products.id)}>Remove</button>
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