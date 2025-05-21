function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-900 text-white border-b border-gray-700 px-8 py-3 flex items-center justify-between">
      {/* Logo Section */}
      <a href="/" className="flex items-center gap-4">
        <h1 className="text-2xl font-bold tracking-wide">
          <span>CRU</span>
          <span>D</span>
        </h1>
      </a>

      {/* Navigation Links */}
      <ul className="hidden lg:flex gap-8 font-semibold">
        <li>
          <a href="/" className="border-b-2 border-white pb-1">Home</a>
        </li>
        <li>
          <button className="flex items-center gap-1 pb-1">
            Services
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </li>
        <li><a href="/careers" className="pb-1">Career</a></li>
        <li><a href="/blogs" className="pb-1">Blogs</a></li>
        <li><a href="/about" className="pb-1">About Us</a></li>
      </ul>

      {/* Get in Touch Button */}
      <a
        href="/addProduct"
        className="hidden lg:inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
      >
        Add Product
      </a>
    </nav>
  );
}

export default Navbar;
