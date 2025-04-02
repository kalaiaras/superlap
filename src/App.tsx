
import './App.css'
import Header from './componends/Header'
import Layout from './componends/Layout'
import MegaMenu from './componends/Menu'
import  Slideshow from './componends/Slide'
import ChoosenProduct from './componends/ChoosenProduct'
import NewArrivalsBeauty from './componends/NewArrivals'
import Footer from './componends/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShoppingCartPage from './componends/CartPage';

function App() {

  return (
    <>
        <Router>
      <Layout>
        <Header />
        <MegaMenu />
        
        <Routes>
          <Route path="/" element={
            <>
              <Slideshow />
              <ChoosenProduct />
              <NewArrivalsBeauty />
            </>
          } />
          
          <Route path="/cart" element={<ShoppingCartPage />} />
          
        </Routes>
        
        <Footer />
      </Layout>
    </Router>

    </>
       
    
  )
}

export default App
