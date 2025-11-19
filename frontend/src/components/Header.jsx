

import { Link } from "react-router-dom";
export default function Header() {
    return (
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-8/10 mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-600">Truly</h1>
  
          <nav className="space-x-6">
            <Link to="/" className="text-black-700 hover:text-indigo-600" >Home</Link>
            <Link to="/products" className="text-black-700 hover:text-indigo-600">All Products</Link>
            <Link to="/about" className="text-black-700 hover:text-indigo-600">About</Link>
            <Link to="/contact" className="text-black-700 hover:text-indigo-600">Contact</Link>
          </nav>
        </div>
      </header>
    );
  }
  