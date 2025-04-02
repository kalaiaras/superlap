import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

interface SlideItem {
    url: string;
    caption :string
}
const Example = () => {
    const slides: SlideItem[] = [
        {
          url: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
          caption: "In With the New Fragrance "
        },
        {
          url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
          caption: "Must Have Minis"
        },
        {
          url: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
          caption: "Glow Recipe Tinted Cheek serum"
        },
      ];
      const slideProperties = {
        autoplay: true,
        arrows: true,
        duration: 5000,
        transitionDuration: 1000,
        infinite: true,
        pauseOnHover: true,
        canSwipe: true,
        easing: 'linear' as const,
        indicators: true, // Added indicators for better UX
    
      };

      return (
        <div className="slide-container" style={{ maxWidth: '100vw', margin: '0 auto' }}>
          <Slide {...slideProperties}>
            {slides.map((slide, index) => (
              <div key={index} className="each-slide-effect">
                <div 
                  style={{ 
                    backgroundImage: `url(${slide.url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <span style={{ 
                    padding: '20px',
                    background: 'rgba(0,0,0,0.5)',
                    color: '#fff',
                    fontSize: '1.5rem',
                    borderRadius: '4px'
                  }}>
                    {slide.caption}
                  </span>
                </div>
              </div>
            ))}
          </Slide>
        </div>
      );
};

export default Example;