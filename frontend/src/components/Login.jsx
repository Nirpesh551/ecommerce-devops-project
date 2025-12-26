import Navbar from './Navbar'

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Login</h2>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <input className="shadow appearance-none border rounded w-full py-2 px-3 mb-4" placeholder="Email" type="email" />
          <input className="shadow appearance-none border rounded w-full py-2 px-3 mb-6" placeholder="Password" type="password" />
          <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  )
}
