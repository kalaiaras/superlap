import { useSelector } from 'react-redux';
import { RootState } from '../Redux/Store'; // Adjust the path to your store
import { Link } from 'react-router-dom';
import { removeItem, updateQty } from '../Redux/CartSlice';
import { useDispatch } from 'react-redux';

const ShoppingCartPage = () => {
  const { items } = useSelector((state: RootState) => state.CartReducer);
  const dispatch = useDispatch();

  const handleremoveItem = (productId: string) => {
    dispatch(removeItem(productId));
  };

  const handleQuantityChange = (productId: string, qty: number) => {
    if (qty > 0) {
      dispatch(updateQty({id:productId, qty}));
    }
  };

  const calculateTotal = () => {
    return items.reduce((total: number, item: any) => {
      return total + (item.prize * item.qty);
    }, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      
      {items.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
          <Link 
            to="/products" 
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="hidden md:grid grid-cols-12 bg-gray-100 p-4 font-medium">
                <div className="col-span-5">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-2 text-center">Total</div>
              </div>
              
              {items.map((item: any) => (
                <div key={item.id} className="grid grid-cols-6 md:grid-cols-12 p-4 border-b items-center">
                  <div className="col-span-3 md:col-span-5 flex items-center gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <button 
                        onClick={() => handleremoveItem(item.id)}
                        className="text-red-600 text-sm mt-1 hover:text-red-800"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  
                  <div className="col-span-1 md:col-span-2 text-center">
                    <span className="md:hidden text-gray-500 text-sm">Price: </span>
                    ${item.prize.toFixed(2)}
                  </div>
                  
                  <div className="col-span-2 md:col-span-3 flex justify-center">
                    <div className="flex items-center border rounded">
                      <button 
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                        onClick={() => handleQuantityChange(item.id, item.qty - 1)}
                      >
                        -
                      </button>
                      <span className="px-4">{item.qty}</span>
                      <button 
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                        onClick={() => handleQuantityChange(item.id, item.qty + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <div className="col-span-2 text-center">
                    <span className="md:hidden text-gray-500 text-sm">Total: </span>
                    ${(item.prize * item.qty).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${calculateTotal()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-4 border-t">
                  <span>Total</span>
                  <span>${calculateTotal()}</span>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-3 rounded mt-6 hover:bg-blue-700 transition">
                Proceed to Checkout
              </button>
              
              <Link 
                to="/products" 
                className="block text-center text-blue-600 mt-4 hover:text-blue-800"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartPage;