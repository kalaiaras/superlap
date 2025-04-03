import { useDispatch } from 'react-redux';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { addItem } from '../Redux/CartSlice';
import { ToastContainer, toast } from 'react-toastify';

const NewArrivalsBeauty = () => {
 const dispatch = useDispatch()

  const beautyProducts: any[] = [
    {
      id: 1,
      name: 'Hydrating Foundation',
      category: 'Face Makeup',
      description: '24-hour hydration with buildable medium coverage',
      price: 34.99,
      originalPrice: 42.99,
      rating: 4.7,
      reviewCount: 892,
      image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      isNew: true,
      isVegan: true
    },
    {
      id: 2,
      name: 'Matte Liquid Lipstick',
      category: 'Lip Makeup',
      description: 'Transfer-proof, 12-hour wear in 20 vibrant shades',
      price: 22.99,
      rating: 4.5,
      reviewCount: 1245,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      isNew: true,
      isCrueltyFree: true
    },
    // Add 18+ more beauty products...
    {
      id: 20,
      name: 'Crystal Facial Roller',
      category: 'Skincare Tool',
      description: 'Rose quartz facial roller for depuffing and circulation',
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.8,
      reviewCount: 567,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      isNew: true,
      isLimitedEdition: true
    },
    {
        id: 1,
        name: 'Radiant Glow Serum Foundation',
        category: 'Face',
        description: 'Lightweight, buildable coverage with hyaluronic acid for 24-hour hydration. Leaves skin with a natural radiant finish.',
        price: 42.99,
        originalPrice: 49.99,
        rating: 4.8,
        reviewCount: 1243,
        image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883',
        isNew: true,
        isVegan: true,
        shades: 16,
        size: '1 oz'
      },
      {
        id: 2,
        name: 'Matte Revolution Lipstick',
        category: 'Lips',
        description: 'Velvety matte finish with comfortable wear. Infused with avocado oil for moisture without shine.',
        price: 24.99,
        rating: 4.6,
        reviewCount: 892,
        image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa',
        isBestSeller: true,
        isCrueltyFree: true,
        shades: 24,
        size: '0.12 oz'
      },
      {
        id: 3,
        name: 'Crystal Clear Facial Roller',
        category: 'Tools',
        description: 'Rose quartz facial roller to reduce puffiness, improve circulation, and enhance product absorption.',
        price: 32.50,
        originalPrice: 39.99,
        rating: 4.9,
        reviewCount: 2105,
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c',
        isLimitedEdition: true,
        material: 'Genuine rose quartz'
      },
      {
        id: 4,
        name: 'Brow Defining Pomade',
        category: 'Brows',
        description: 'Water-resistant formula for natural-looking, defined brows that last all day. Includes angled brush.',
        price: 22.00,
        rating: 4.7,
        reviewCount: 756,
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348',
        isVegan: true,
        shades: 8,
        size: '0.14 oz'
      },
      {
        id: 5,
        name: '24K Gold Eye Mask Set',
        category: 'Skincare',
        description: 'Rejuvenating under-eye masks infused with gold particles to reduce dark circles and puffiness.',
        price: 18.99,
        originalPrice: 25.00,
        rating: 4.5,
        reviewCount: 432,
        image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b',
        isNew: true,
        count: '5 pairs'
      },
      {
        id: 6,
        name: 'Silk Finish Pressed Powder',
        category: 'Face',
        description: 'Micro-milled powder for a soft-focus finish that blurs imperfections without looking cakey.',
        price: 29.99,
        rating: 4.4,
        reviewCount: 567,
        image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137',
        isCrueltyFree: true,
        shades: 12,
        size: '0.35 oz'
      },
      {
        id: 7,
        name: 'Lash Paradise Mascara',
        category: 'Eyes',
        description: 'Volumizing mascara that creates dramatic lash impact without clumping or flaking.',
        price: 14.99,
        originalPrice: 19.99,
        rating: 4.8,
        reviewCount: 3241,
        image: 'https://images.unsplash.com/photo-1515688594390-b649af70d282',
        isBestSeller: true,
        colors: 3
      },
      {
        id: 8,
        name: 'Glow Drops Illuminator',
        category: 'Face',
        description: 'Liquid highlighter that creates a dewy, lit-from-within glow. Can be mixed with foundation or worn alone.',
        price: 28.00,
        rating: 4.6,
        reviewCount: 987,
        image: 'https://images.unsplash.com/photo-1572635148818-ef6fd45eb394',
        isNew: true,
        shades: 6,
        size: '1 oz'
      },
      {
        id: 9,
        name: 'Clay Detox Mask',
        category: 'Skincare',
        description: 'Deep-cleansing mask with kaolin clay and charcoal to purify pores and control excess oil.',
        price: 36.99,
        rating: 4.7,
        reviewCount: 654,
        image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa',
        isVegan: true,
        size: '3.4 oz'
      },
      {
        id: 10,
        name: 'Precision Liquid Eyeliner',
        category: 'Eyes',
        description: 'Ultra-fine brush tip for sharp wings and precise lines. Waterproof and smudge-proof.',
        price: 19.99,
        originalPrice: 24.99,
        rating: 4.9,
        reviewCount: 1789,
        image: 'https://images.unsplash.com/photo-1617897903246-719242758050',
        isBestSeller: true,
        colors: 5
      }
  ];

  // Group products into slides (4 products per slide)
  const productSlides = [];
  const productsPerSlide = 4;
  

  const handleAddItems = (product:any)=>{
    dispatch(addItem({id:product.id, name:product.name, prize:product.price, qty:1, image:product.image}))
    toast.success("Product item add to cart successfully");

  }
  for (let i = 0; i < beautyProducts.length; i += productsPerSlide) {
    productSlides.push(beautyProducts.slice(i, i + productsPerSlide));
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
    <section className="py-12 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-rose-800 mb-2">New Beauty Arrivals</h2>
          <p className="text-gray-600">Discover our latest makeup and skincare products</p>
        </div>
        
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
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                      {product.isNew && (
                        <span className="bg-rose-600 text-white text-xs font-semibold px-2 py-1 rounded">
                          New
                        </span>
                      )}
                      {product.isLimitedEdition && (
                        <span className="bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded">
                          Limited
                        </span>
                      )}
                      {product.isVegan && (
                        <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                          Vegan
                        </span>
                      )}
                      {product.isCrueltyFree && (
                        <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                          Cruelty-Free
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <span className="text-xs text-rose-600 font-medium">{product.category}</span>
                    <h3 className="font-bold text-lg mb-1 line-clamp-1">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                    
                    <div className="flex items-center mb-2">
                      {renderStars(product.rating)}
                      <span className="ml-1 text-gray-500 text-xs">({product.reviewCount})</span>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="font-bold text-lg text-rose-700">${product.price.toFixed(2)}</span>
                      {product.originalPrice && (
                        <span className="ml-2 text-sm text-gray-500 line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    
                    <button className="mt-4 w-full bg-rose-600 hover:bg-rose-700 text-white py-2 px-4 rounded-full transition-colors duration-300 flex items-center justify-center gap-2"
                    
                    onClick={()=>handleAddItems(product)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      Add to Bag
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

export default NewArrivalsBeauty;