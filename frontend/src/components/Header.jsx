

export default function Header() {
    return (
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Truly</h1>
  
          <nav className="space-x-6">
            <a href="/" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="/products" className="text-gray-700 hover:text-indigo-600">Products</a>
            <a href="/about" className="text-gray-700 hover:text-indigo-600">About</a>
            <a href="/contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
          </nav>
        </div>
      </header>
    );
  }
  