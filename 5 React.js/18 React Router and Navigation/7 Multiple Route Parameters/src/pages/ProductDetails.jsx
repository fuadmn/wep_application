import { useParams } from "react-router"

const ProductDetail = () => {

  const {categoryId,productId} = useParams();
  
  console.log(productId)
  console.log(categoryId)

  return (
    <div>
      ProductDetail
     <p>category: {categoryId}</p>
     <p>productId: {productId}</p>

    </div>
  )
}

export default ProductDetail
