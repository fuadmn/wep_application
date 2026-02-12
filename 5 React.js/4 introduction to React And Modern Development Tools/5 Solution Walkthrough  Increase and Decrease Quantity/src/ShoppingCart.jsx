
// import { useState } from "react";

// const ShoppingCart = () => {

//      const [products,setProducts] = useState([]);

//      const [productName, setProductName] = useState("")

//      const [productPrice,setProductPrice] = useState('')

//      const handleAddProcuct = () => {
//         if(productName.trim() !== "" && productPrice.trim() !== ""){

//           const newProcucts = {
//             id: Date.now(),
//             name: productName,
//             price: parseFloat(productPrice),
//             quantity: 1
//         }
//         console.log(newProcucts)
//         setProducts([...products,newProcucts]);
//         setProductName("");
//         setProductPrice("");
        
//         }
   
//      }

//      const removeProduct = (id) => {
//        const updateProcucts = products.filter(products => products.id !== id);
//        setProducts(updateProcucts)
//      }

//      const increaseQuantity= (id) => {
//         // console.log(products)
//         const updateProcucts = products.map( products  => (
//           products.id === id ? {...products, quantity : products.quantity + 1 } : products
//         ))
//         //  console.log(updateProcucts)
//         setProducts(updateProcucts)
//      }

//      const decreaseQuantity = (id) => {
       
//       const updateProcucts = products.map(products => (
//         products.id === id   && products.quantity > 1 ? {...products, quantity: products.quantity -1 } : products
//       ))
//       setProducts(updateProcucts)
//      }

//    return(
//     <div>
//         <h1>Simple Shopping Cart</h1>
//         <div>
//             <h3>Add a Product</h3>
//             <input type="text" placeholder="Procuct Name" onChange={(e) => setProductName(e.target.value)} value={productName}/>
//             <input type="number" min="0" placeholder="Price" onChange={(e) => setProductPrice(e.target.value)} value={productPrice}/>
//             <button onClick={handleAddProcuct}>Add to Cart</button>
//         </div>
//         {
//             products.length > 0 ? (
//              <div>
//                 <h3>Products is cart</h3>
//                  {/* list of the products */}
//                 <ul>
//                     {
//                         products.map(products => (
//                         <li key={products.id}>
//                               <strong>{products.name}</strong> - ${products.price.toFixed(2)}

//                               <div>
//                                 Quantity: 
//                                 <button onClick={() => decreaseQuantity(products.id)}>-</button>{products.quantity}
//                                 <button onClick={()=>increaseQuantity(products.id)}>+</button>
//                               </div>
//                                 <button onClick={()  => removeProduct(products.id)}>Remove</button>
//                         </li>
//                         ))
//                     }
//                 </ul>
//              </div>
//             ) : <p>This cart is empty.</p>
//         }
//     </div>
//    )

// }

// export default ShoppingCart;





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
        setProducts([...products,newProcucts]);
        }
   
     }

     const removeProduct = (id) => {
      const updateProcucts = products.filter(products => products.id  !== id);
      setProducts(updateProcucts)
     }

     const increaseQuantity = (id) => {
      const updateProcucts = products.map( products => (
        products.id === id ? {...products, quantity : products.quantity + 1 } : products
      ))
      setProducts(updateProcucts)
     }

     const decreaseQuantity = (id) => {
       const updateProcucts = products.map( products => (
        products.id === id && products.quantity > 1 ? {...products, quantity : products.quantity -1 } : products
       ))
       setProducts(updateProcucts)
     }

     
   return(
    <div>
        <h1>Simple Shopping Cart</h1>
        <div>
            <h3>Add a Product</h3>
            <input type="text" placeholder="Procuct Name" onChange={(e) => setProductName(e.target.value)} value={productName}/>
            <input type="number" placeholder="Price" onChange={(e) => setProductPrice(e.target.value)} value={productPrice}/>
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
                                <button onClick={() => decreaseQuantity(products.id)}>-</button>
                                {products.quantity}
                                <button onClick={() => increaseQuantity(products.id)}>+</button>
                              </div>
                                <button onClick={() => removeProduct(products.id)}>Remove</button>
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