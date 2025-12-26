import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to ShopHub</h1>
        <p className="text-center text-lg mb-8">Your one-stop e-commerce store</p>
        <div className="text-center">
          <Link to="/products" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-xl hover:bg-blue-700 mr-4">
            Browse Products
          </Link>
          <Link to="/login" className="bg-gray-600 text-white px-8 py-4 rounded-lg text-xl hover:bg-gray-700">
            Login
          </Link>
        </div>
      </div>
    </>
  )
}

export default App
