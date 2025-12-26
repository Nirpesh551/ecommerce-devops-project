import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

export default function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/api/products')
        setProducts(res.data)
        setLoading(false)
      } catch (err) {
        console.error(err)
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">All Products</h2>
        {loading ? (
          <p>Loading products...</p>
        ) : products.length === 0 ? (
          <p>No products yet. Seed the database first!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map(product => (
              <div key={product._id} className="border rounded-lg p-6 shadow-lg">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 mb-4" />
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-600 my-2">{product.description}</p>
                <p className="text-2xl font-bold text-blue-600">${product.price}</p>
                <p className="text-sm text-gray-500">Stock: {product.countInStock}</p>
                <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
