import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { addItem } from '../Redux/CartSlice';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

const ProductCarousel = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      description: 'Premium sound quality with noise cancellation and 30-hour battery life',
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.5,
      reviewCount: 1245,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      isBestSeller: true
    },
    // Add 20+ more products here...
    {
      id: 21,
      name: 'Ergonomic Office Chair',
      description: 'Adjustable lumbar support with breathable mesh back',
      price: 249.99,
      originalPrice: 299.99,
      rating: 4.6,
      reviewCount: 1567,
      image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      isBestSeller: true
    },
    {
        id: 1,
        name: 'Wireless Bluetooth Headphones',
        description: 'Premium sound quality with noise cancellation and 30-hour battery life',
        price: 89.99,
        originalPrice: 129.99,
        rating: 4.5,
        reviewCount: 1245,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        isBestSeller: true
      },
      {
        id: 2,
        name: 'Smart Fitness Watch',
        description: 'Track heart rate, sleep, and 20+ sports modes with GPS',
        price: 149.99,
        rating: 4.2,
        reviewCount: 876,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        isNew: true
      },
      // Add 18+ more products following the same structure
      {
        id: 3,
        name: '4K Ultra HD Smart TV',
        description: '55-inch display with HDR and built-in streaming apps',
        price: 599.99,
        originalPrice: 799.99,
        rating: 4.7,
        reviewCount: 2341,
        image: 'https://images.unsplash.com/photo-1571415060716-baff5f717c37?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 4,
        name: 'Wireless Charging Stand',
        description: 'Fast charging stand for phone and earbuds simultaneously',
        price: 34.99,
        rating: 4.0,
        reviewCount: 342,
        image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
      },
      // Continue adding more products...
      {
        id: 21,
        name: 'Ergonomic Office Chair',
        description: 'Adjustable lumbar support with breathable mesh back',
        price: 249.99,
        originalPrice: 299.99,
        rating: 4.6,
        reviewCount: 1567,
        image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        isBestSeller: true
      }
  ];
   const dispatch = useDispatch()

  const handleAddItems = (product:any)=>{
    dispatch(addItem({id:product.id, name:product.name, prize:product.price, qty:1, image:product.image}))
    toast.success("Product item add to cart successfully");
  }
  const productSlides = [];
  const productsPerSlide = 4;
  
  for (let i = 0; i < products.length; i += productsPerSlide) {
    productSlides.push(products.slice(i, i + productsPerSlide));
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Chosen For You</h2>
        
        <Slide
          autoplay={false}
          arrows={true}
          indicators={true}
          duration={5000}
          transitionDuration={500}
          infinite={true}
          slidesToShow={1}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]}
        >
          {productSlides.map((slideProducts, index) => (
            <div key={index} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2">
              {slideProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 flex gap-2">
                      {product.isNew && (
                        <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                          New
                        </span>
                      )}
                      {product.isBestSeller && (
                        <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                          Bestseller
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 line-clamp-1">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                    
                    <div className="flex items-center mb-2">
                      {renderStars(product.rating)}
                      <span className="ml-1 text-gray-500 text-xs">({product.reviewCount})</span>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                      {product.originalPrice && (
                        <span className="ml-2 text-sm text-gray-500 line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    
                    <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors duration-300"
                     onClick={()=>handleAddItems(product)}
                     >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Slide>
      </div>
      <ToastContainer />

    </section>
  );
};

export default ProductCarousel;