import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = ["business", "entertainment", "health", "science", "sports", "technology"];

  return (
    <nav className="bg-blue-600 text-white py-4 px-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">NewsApp</h1>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(true)} className="md:hidden z-50">
          <Menu size={28} />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:underline font-semibold">Home</Link>
          {categories.map((category) => (
            <Link key={category} to={`/category/${category}`} className="hover:underline capitalize">
              {category}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Sliding from Right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-700 shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between p-4">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="z-50">
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col space-y-4 p-4">
          <Link to="/" className="hover:underline font-semibold" onClick={() => setIsOpen(false)}>Home</Link>
          {categories.map((category) => (
            <Link 
              key={category} 
              to={`/category/${category}`} 
              className="hover:underline capitalize"
              onClick={() => setIsOpen(false)}
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      {/* Background Overlay when Menu is Open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
