
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
            price: parseFloat(productPrice),
            quantity: 1
        }
        console.log(newProducts)
        setProducts([...products,newProducts]);
        setProductName("");
        setProductPrice("");
        
        }
   
     }

     const removeProduct = (id) => {
       const updateProducts = products.filter(products => products.id !== id);
       setProducts(updateProducts)
     }

     const increaseQuantity= (id) => {
        // console.log(products)
        const updateProducts = products.map( products  => (
          products.id === id ? {...products, quantity : products.quantity + 1 } : products
        ))
        //  console.log(updateProducts)
        setProducts(updateProducts)
     }

     const decreaseQuantity = (id) => {
       
      const updateProducts = products.map(products => (
        products.id === id   && products.quantity > 1 ? {...products, quantity: products.quantity -1 } : products
      ))
      setProducts(updateProducts)
     }
     
     const totalPrice = products.reduce((total, products) => total + products.price * products.quantity,0);

     

   return(
    <div>
        <h1>Simple Shopping Cart</h1>
        <div>
            <h3>Add a Product</h3>
            <input type="text" placeholder="Product Name" onChange={(e) => setProductName(e.target.value)} value={productName}/>
            <input type="number"
             min="0" 
            // step="2" 
            placeholder="Price" onChange={(e) => setProductPrice(e.target.value)} value={productPrice}/>
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
                        <li key={products.id}>
                              <strong>{products.name}</strong> - ${products.price.toFixed(2)}

                              <div>
                                Quantity: 
                                <button onClick={() => decreaseQuantity(products.id)}>-</button>{products.quantity}
                                <button onClick={()=>increaseQuantity(products.id)}>+</button>
                              </div>
                                <button onClick={()  => removeProduct(products.id)}>Remove</button>
                        </li>
                        ))
                    }
                </ul>
                <h4>Total Pice : ${totalPrice}</h4>
             </div>
            ) : <p>This cart is empty.</p>
        }
    </div>
   )

}

export default ShoppingCart;
