import { FiSearch, FiHeart, FiShoppingBag } from 'react-icons/fi';
import { FaRegUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../Redux/Store';
const Header = () => {
  const {items} :any =useSelector((state: RootState)=> state.CartReducer) 
   
console.log("items", items,)
  return (
    <div>
      <div className="flex flex-row justify-between items-center bg-gradient-to-r from-purple-500 to-pink-600 p-4 overflow-hidden relative">
  {/* Text Content */}
  <div className="flex-1 z-10 pl-6">
    <p className="text-3xl md:text-4xl font-bold text-white text-center md:text-left">
      GET <span className="text-yellow-300">50% OFF</span> TODAY ONLY!
    </p>
    <p className="text-white mt-2 text-sm md:text-base text-center md:text-left">
      Use code <span className="font-mono bg-black/20 px-2 py-1 rounded">HALFOFF</span> at checkout
    </p>
    <button className="mt-4 bg-white text-purple-600 hover:bg-yellow-100 font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 mx-auto md:mx-0 block">
      Shop Now
    </button>
  </div>

  {/* Image */}
  <div className="relative w-1/3 md:w-1/4">
    
    <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-purple-900 font-bold text-xs px-2 py-1 rounded-full rotate-12">
      LIMITED TIME!
    </div>
  </div>

  {/* Decorative Elements */}
  <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-white/10"></div>
  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"></div>
</div>
   
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="relative">
          <div className="text-2xl font-bold text-grey-600 tracking-tight">
            SEPHORA
          </div>
          </Link>

          {/* Search Bar */}
          <div className="relative mx-4 flex-1 max-w-xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for products, brands, or categories..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="relative text-gray-700 hover:text-pink-600 transition-colors">
              <FaRegUser className="text-xl" />
              <span className="sr-only">Account</span>
            </button>
            
            <button className="relative text-gray-700 hover:text-pink-600 transition-colors">
              <FiHeart className="text-xl" />
              <span className="sr-only">Favorites</span>
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
          
    <Link to="/cart" className="relative">  
            <button className="relative text-gray-700 hover:text-pink-600 transition-colors">
              <FiShoppingBag className="text-xl" />
              <span className="sr-only">Cart</span>
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
             { items?.length}
              </span>
            </button>
            </Link>
          </div>
        </div>

    </div>
    </header>
    </div>
  )
}

export default Header