import React, { useState, useEffect } from "react"
import axios from "axios"

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products")
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching products:", error)
        setError("error loading products")
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) return <div>loading</div>
  if (error) return <div>{error}</div>

  return (
    <div>
      <h1>products</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <span>{product.name}</span>
            <span>₪{product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products
