import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">ShopHub</Link>
        <div>
          <Link to="/products" className="mx-4 hover:text-gray-300">Products</Link>
          <Link to="/login" className="mx-4 hover:text-gray-300">Login</Link>
          <Link to="/register" className="mx-4 hover:text-gray-300">Register</Link>
        </div>
      </div>
    </nav>
  )
}
